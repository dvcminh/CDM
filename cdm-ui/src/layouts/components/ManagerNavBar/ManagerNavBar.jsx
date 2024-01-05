import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EarbudsBatteryOutlinedIcon from '@mui/icons-material/EarbudsBatteryOutlined';

const navigation = [
  { name: 'Vehicle', href: '/vehicle', current: false },
  { name: 'Charging', href: '#', current: false },
  { name: 'Shopping Guide', href: '#', current: false },
  { name: 'Shop', href: '/shop', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || ""
  );

  const handleUserButton = () => {
    if(userData == ""){
      navigate('/login');
    }else{
      if(userData.role === "CUSTOMER"){
        navigate('/customerhome');
      }else if(userData === "STAFF"){
        navigate('/staffhome');
      }else{
        navigate('/managerhome');
      }
    }
  }

  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = (name) => {
    if (name === 'Shopping Guide') {
      setModalOpen(true);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="h-24 w-auto"
                      src="https://res.cloudinary.com/droondbdu/image/upload/v1702194603/wepik-gradient-modern-car-detail-clean-amp-repair-logo-20231210074938LRYR_dyz3ez.png"
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="lg:ml-64 mt-8 flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="/managerhome/manageshop">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <EarbudsBatteryOutlinedIcon className="h-6 w-6" aria-hidden="true"/>
                </button>
                </a>

                <a href="/managerhome/managecar">
                <button
                  type="button"
                  className="ml-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <DirectionsCarFilledOutlinedIcon className="h-6 w-6" aria-hidden="true"/>
                </button>

                </a>

                {/* Profile dropdown */}
                <button onClick={handleUserButton}
                  type="button"
                  className="ml-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

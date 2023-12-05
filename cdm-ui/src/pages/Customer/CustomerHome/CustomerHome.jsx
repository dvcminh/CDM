import SideBar from '../../../layouts/components/SideBar';
import '../../../components/DashboardItem/DashboardItem.css'
import DashboardItem from '../../../components/DashboardItem'


function CustomerHome() {

    const dashboardItems = [
        {
          img: <img src='https://digitalassets.tesla.com/oxp/image/upload/solar-marketing_636x300_4bd7119e4705e.jpg' alt='solar' className='dashboard__item-img'/>,
          article: 'Order Tesla Solar',
          content: 'Produce energy to power your Tesla life',
          button: <button className='dashboard__item-button' onClick={() => alert('View Solar')}>View Solar</button>
        },
        {
          img: <img src='https://digitalassets.tesla.com/oxp/image/upload/v1692297205/dscf6059-4_acb1b643864e2.png' alt='order' className='dashboard__item-img'/>,
          article: 'Reserve a Car',
          content: 'Browse our models',
          button: <button className='dashboard__item-button' onClick={() => alert('Shop Now')}>Shop Now</button>
        },
        {
          img: <img src='https://digitalassets.tesla.com/oxp/image/upload/third-party-car_636x300_ed18888cb5f98.jpg' alt='pluss' className='dashboard__item-img'/>,
          content: 'Purchased a car from a third party?',
          article: 'Reserve a Car',
          button: <button className='dashboard__item-button' onClick={() => alert('Add')}>Add</button>
        }
      ]

    return ( 
        <div>
            <span className='flex'>
                <SideBar className='flex-1'/>
                <div className='flex flex-col'>
                    <h1 className='font-medium text-3xl mt-16 ml-10'>Dashboard</h1>
                    <div>
                        <span className='dashboard'>
                            <DashboardItem data={dashboardItems[0]}/>
                            <DashboardItem data={dashboardItems[1]}/>
                        </span>
                        
                        <span className='dashboard' style={{marginTop: 5}}>
                        <DashboardItem data={dashboardItems[2]}/> 
                        </span>
                    </div>
                </div>

                
            </span>
      </div> 
     );
}

export default CustomerHome;
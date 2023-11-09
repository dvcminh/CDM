import { useState } from 'react'
import './components/DashboardItem/DashboardItem.css'
import {publicRoutes} from './routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout';

function App() {
  
  return (
    <>
     <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                          const Page = route.component;
                          let Layout = DefaultLayout;         
                        return (
                          <Route key={index} path={route.path} element = {<Layout>
                                                                              <Page/>
                                                                          </Layout>}/>
                        )
                    }
                    )}
                </Routes>
            </div>
        </Router>
    </>
  )
}


export default App

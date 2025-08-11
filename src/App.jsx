import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showLogin}=useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-100'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/result' element={<Result/>}>
        </Route>
        <Route path='/buy' element={<BuyCredit/>}>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App


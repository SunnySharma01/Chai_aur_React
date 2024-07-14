import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />   {/* Outlet is a placeholder for the child routes */}
    <Footer />   // Footer component
    </>
  )
}

export default Layout
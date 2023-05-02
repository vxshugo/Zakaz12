import React from 'react'
import NavbarMain from '../../components/navbar'
import MainBlock from "../../components/main"
import UniversityInfo from '../../components/UniversityInfo'
import Footer from '../../components/footer'
import City from '../../components/City'
function Main() {
  return (
    <div>
        <NavbarMain/>
        <UniversityInfo/>
        <MainBlock/>
        <City/>
        <Footer/>
    </div>
  )
}

export default Main
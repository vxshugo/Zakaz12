import React from 'react'
import NavbarMain from '../../components/navbar'
import MainBlock from "../../components/main"
import UniversityInfo from '../../components/UniversityInfo'
import Footer from '../../components/footer'
function Main() {
  return (
    <div>
        <NavbarMain/>
        <MainBlock/>
        <UniversityInfo/>
        <Footer/>
    </div>
  )
}

export default Main
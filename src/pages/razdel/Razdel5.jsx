import React from 'react'
import NavbarMain from '../../components/navbar'
import styled from "styled-components"
import { mobile } from '../../responsive'
import Footer from '../../components/footer'


const Block = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 100px;
`

const Title = styled.h1`
margin-top: 30px;
align-items: center;
text-aling: center;
`
const TitleFile = styled.h3`
margin-top: 100px;
align-items: center;
text-aling: center;
`
const Button = styled.a`
text-decoration: none;
color: black;
background-color: #FFE0E0;
padding: 10px 20px;
border-radius: 20px;

&:hover{
    color: white;
}
`

function Razdel5() {
  return (
    <div>
        <NavbarMain/>
        <div className='container'>
            <Block>
                <Title>Слайд</Title>
                <TitleFile>Миллион кімге бұйырады ойын-сайысы</TitleFile>
                <Button href='https://docs.google.com/presentation/d/1zZEhn6OjhXLzEeX6MVKRhdIzC5qPXE0R/edit?rtpof=true' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Масалимова Нұрғиза азаматтық кұқық</TitleFile>
                <Button href='https://docs.google.com/presentation/d/1Et8U158EBKQMv8mGtJha5y44e1EW_ZZM/edit#slide=id.p1' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Азаматтық құқық мәмілесі</TitleFile>
                <Button href='https://docs.google.com/presentation/d/1tzl8HMLfbkUksjPx9AWeUlR-STaeIqBK/edit?rtpof=true' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Азаматтық құқықтың объектісі</TitleFile>
                <Button href='https://docs.google.com/presentation/d/1OU7JXJDU_Ew-RB_TOaz-k-rQEF8jyDVS/edit' target={"_blank"}>Жүктеу</Button>
            </Block>
        </div>
        <Footer/>
    </div>
  )
}

export default Razdel5
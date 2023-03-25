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

function Razdel3() {
  return (
    <div>
        <NavbarMain/>
        <div className='container'>
            <Block>
                <Title>Курстық жұмыстар</Title>
                <TitleFile>Курстық жұмыстың орындалуы мен толтыруының нұсқаулығы</TitleFile>
                <Button href='https://docs.google.com/document/d/1HbKxHj7aeHwVjy1C0TkI95JBDpjznRbB/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Тақырыптар курстық жұмыс бойынша</TitleFile>
                <Button href='https://docs.google.com/document/d/16iaXFtyRlVKx_nnkgZEs1wwwZKMTENSi/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Жұмыс жоспары</TitleFile>
                <Button href='https://docs.google.com/document/d/18qatzRfntP7OzfdblZOvEXFScrRTso3C/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Ашық сабақ дәйектемесі</TitleFile>
                <Button href='https://docs.google.com/document/d/1BpKSMPW6lg7iN7EFpV9RGKHmGNT3IX4v/edit' target={"_blank"}>Жүктеу</Button>
            </Block>
        </div>
        <Footer/>
    </div>
  )
}

export default Razdel3
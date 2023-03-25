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

function Razdel2() {
  return (
    <div>
        <NavbarMain/>
        <div className='container'>
            <Block>
                <Title>Тест</Title>
                <TitleFile>Емтихан тест сұрақтары</TitleFile>
                <Button href='https://docs.google.com/document/d/1Iv4fqMu2GJpk_ld2cxrjihtfPmm94POc/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Срез сұрақтары</TitleFile>
                <Button href='https://docs.google.com/document/d/16iaXFtyRlVKx_nnkgZEs1wwwZKMTENSi/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Сынақ сұрақтары</TitleFile>
                <Button href='https://docs.google.com/document/d/1JYNbHgkRRYhx7vS-IrfTwxKsg96_t4zU/edit' target={"_blank"}>Жүктеу</Button>
            </Block>
        </div>
        <Footer/>
    </div>
  )
}

export default Razdel2
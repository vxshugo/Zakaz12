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

function Razdel1() {
  return (
    <div>
        <NavbarMain/>
        <div className='container'>
            <Block>
                <Title>Дәрістер</Title>
                <TitleFile>Отбасы лекциясы</TitleFile>
                <Button href='https://docs.google.com/document/d/1jjFcbVGaoSquPZVB691faObyExcu_nuh/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Мазмұны электрондық кітап</TitleFile>
                <Button href='https://docs.google.com/document/d/1oincAs9a1g-L-au26GkpoqandN4cxQou/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Дәрістер</TitleFile>
                <Button href='https://docs.google.com/document/d/1XOOCnAyX_Gm_kuLa41C2VfPxjYNfh6La/edit' target={"_blank"}>Жүктеу</Button>
            </Block>
        </div>
        <Footer/>
    </div>
  )
}

export default Razdel1
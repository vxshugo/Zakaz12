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

function Razdel4() {
  return (
    <div>
        <NavbarMain/>
        <div className='container'>
            <Block>
                <Title>Жағдаяттық есептер</Title>
                <TitleFile>Тапсырмалар</TitleFile>
                <Button href='https://docs.google.com/document/d/1BnZnSLtxiQ24jkHtfQ5TyavFuj6K9zNV/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Тапсырмалар 2</TitleFile>
                <Button href='https://docs.google.com/document/d/1Ml3prRP0YTlmBr5DOtlwwlhzW4Qbm0tV/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Тапсырмалардың орындау үлгісі</TitleFile>
                <Button href='https://docs.google.com/document/d/1OQ2P1xV6joVD_6L5PV4UOzwBak2wkYDn/edit' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Отбасы кукыгы</TitleFile>
                <Button href='files/1.pdf' target={"_blank"}>Жүктеу</Button>
                <TitleFile>Азаматт практикум</TitleFile>
                <Button href='files/2.pdf' target={"_blank"}>Жүктеу</Button>
            </Block>
        </div>
        <Footer/>
    </div>
  )
}

export default Razdel4
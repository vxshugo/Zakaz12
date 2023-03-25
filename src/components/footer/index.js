import React from 'react'
import styled from "styled-components"
import { mobile } from '../../responsive'

const FooterBlock = styled.div`
  display: flex;
  margin-top: 100px; 
  flex-direction: row;
  justify-content: space-between;
  ${mobile({ margin: "none",flexDirection: 'column' })}
`
const Texts = styled.span`
  width: 480px;
  color: black;
  ${mobile({ width: "auto", marginBottom: "20px"})}
`
function Footer() {
  return (
    <div className='container'>
        <FooterBlock>
            <Texts>
            НАШИ АДРЕСА:
            Сарыарка район, Астана
            Орлыкөл, 14/3 (Астана - Технопарк)
            Проезд автобусами:
            № 14, 42, 48 – остановка «Асем» (ул. Ы.Дүкенұлы);
            №3, 48, 14, 22, 47 – остановка «Технопарк» (пр. Республики)
            Сарыарка район, Астана
            пр. Жеңіс, 68
            </Texts>
            <Texts>
            Проезд автобусами:
            № 5, 12, 14, 19, 20, 21, 25, 40, 106, 112
            Справки по телефонам:
            8 (7172) 31-10-14
            •8-778-040-81-71•8-777-430-00-16
            ВК: vk.com/kuastanaFacebook: kuastanaInstagram:baskaru_college
            Электронная почта: kuastana@mail.ru
            </Texts>
        </FooterBlock>
    </div>
  )
}

export default Footer
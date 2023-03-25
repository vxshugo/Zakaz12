import React from 'react'
import styled from "styled-components"
import { mobile } from '../../responsive'

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${mobile({ padding: "none", flexDirection: 'column' })}
`
const Text = styled.p`
  font-size: 16px;
  width: 400px;
  padding-top:50px;
  ${mobile({ padding: "none", width: "auto",flexDirection: 'column' })}
`
const IMG = styled.img`
  object-fit: cover;
  ${mobile({width: "300px"})}
`
function MainBlock() {
  return (
    <div className='container'>
        <Block>
            <div>
                <Text>
                18.01.2023 ж. Токежанова А.А. жетекшілігімен "Құқықтану" мамандығының П-32-20 тобының студенттерінің оқу тәжірибиесінің есебін қорғауы өтті. Студенттері заң пәндері бойынша білім алады. Оқу практикасы барысында олар іс жүргізу құжаттарын, азаматтық және қылмыстық істердің макеттерін жасау арқылы теориялық білімдерін практикалық дағдылармен бекітеді.
                </Text>
            </div>
            <div>
                <IMG src='img/image 2.png'/>
            </div>
        </Block>
    </div>
  )
}

export default MainBlock
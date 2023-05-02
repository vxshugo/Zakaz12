import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { data } from "../../info";
import { Link } from "react-router-dom"
const Block = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
const Item = styled.div`
  position: relative;
  color: #fff;
  width: 509px;
  height: 335px;
  background-color: ${(props) => props.bgColor};
  border-radius: 44px;
  align-items: center;
  ${mobile({ width: "360px", marginBottom: "20px" })}
`;
const ItemTitle = styled.h4`
  margin-top: 10px;
  font-size: 26px;
  color: black;
  line-height: 47px;
  text-align: center;
  ${mobile({ fontSize: "18px" })}
`;
const ItemIcon = styled.img`
  position: absolute;
  top: 90px;
  left: 5px;
  ${mobile({ width: "138px", top: "140px", left: "5px" })}
`;
const ItemButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 217px;
  height: 95px;
  font-size: 36px;
  border-radius: 41px;
  background: ${(props) => props.btColor};
  top: 210px;
  left: 270px;
  ${mobile({ width: "108px", height: "55px", top: "190px", left: "215px", fontSize: "26px" })}
`;

function MainBlock() {
  return (
    <div>
      <Block
        imgUrl={
          "https://media.discordapp.net/attachments/1050812814555615282/1102438176397721701/Group_1.png?width=937&height=566"
        }
      >
        {data.map((item, index) => (
          <div
            style={{
              marginTop: "50px",
              marginBottom: "20px",
              marginRight: "10px",
            }}
          >
            <Item key={index} bgColor={item.bg}>
              <ItemTitle>{item.title}</ItemTitle>
              <div style={{ display: "flex", flexDirection: "flex-end" }}>
                <ItemIcon src={item.iconURL}></ItemIcon>
                <ItemButton btColor={item.bt}>
                  <p style={{ color: "black" }}><Link style={{ textDecoration: "none", color: "black" }} to={`/razdel/${item.id}`}>өту</Link></p>
                </ItemButton>
              </div>
            </Item>
          </div>
        ))}
      </Block>
    </div>
  );
}

export default MainBlock;

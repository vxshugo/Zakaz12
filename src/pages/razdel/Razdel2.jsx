import React from "react";
import NavbarMain from "../../components/navbar";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Footer from "../../components/footer";
import { data } from "../../info";
import { useLocation } from "react-router-dom";
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  margin-top: 30px;
  align-items: center;
  text-aling: center;
  color: #fff;
`;
const TitleFile = styled.h3`
  margin-top: 100px;
  align-items: center;
  text-aling: center;
  color: #fff;
`;
const Button = styled.a`
  text-decoration: none;
  color: black;
  background-color: #ffe0e0;
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    color: white;
  }
`;
function Razdel2() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div>
      <NavbarMain />
      <div style={{backgroundImage: "url(https://media.discordapp.net/attachments/1050812814555615282/1102438176397721701/Group_1.png?width=937&height=566)",backgroundSize: "cover"}}>
        <Block>
          <Title>Материялдық құқық нормаларын талдау</Title>
          <TitleFile>РП  2022-2023 КМ 03</TitleFile>
              <Button
                href={"/files/id7.doc"}
                target={"_blank"}
              >
                Жүктеу
              </Button>
        </Block>
      </div>
      <Footer />
    </div>
  );
}

export default Razdel2;

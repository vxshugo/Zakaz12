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
const TextAndVideo = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  ${mobile({ flexDirection: "column" })}
`
const TextInBlock = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
`
const SecondText = styled.div`
max-width: 1120px;
color: #fff;
  font-size: 24px;
  font-weight: 400;
`
const VideoBlock = styled.div`

`
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
  background-color: #34495E;
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    color: white;
  }
`;
const Button2 = styled.a`
  text-decoration: none;
  color: white;
  background-color: #34495E;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
function Razdel() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div>
      <NavbarMain />
      <div style={{ backgroundImage: "url(https://media.discordapp.net/attachments/1050812814555615282/1102438176397721701/Group_1.png?width=937&height=566)", backgroundSize: "cover" }}>
        <Block>
          <Title>{data[id - 1].title}</Title>
          <TextAndVideo>
            <TextInBlock>
              {data[id - 1].textBlock1}
            </TextInBlock>
            <VideoBlock>
              <iframe width="560" height="315" src={data[id - 1].videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoBlock>
          </TextAndVideo>
          <SecondText>{data[id - 1].textBlock2}</SecondText>
          {data[id - 1].file?.map((item, index) => (
            <>
              <TitleFile>{item.title}</TitleFile>
              <div style={{display: "flex"}}>
                <Button
                  href={item.link}
                  target={"_blank"}
                >
                  Жүктеу
                </Button>
                <Button2
                  href={item.link2}
                  target={"_blank"}
                >
                  Өту
                </Button2>
              </div>
            </>
          ))}
        </Block>
      </div>
      <Footer />
    </div>
  );
}

export default Razdel;

import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Block = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.p`
  font-size: 16px;
  color: #000;
`;
const IMG = styled.img``;

function UniversityInfo() {
  return (
    <div>
      <Block imgUrl={"https://media.discordapp.net/attachments/1050812814555615282/1102438142855888896/urisprudenciya1.png"}>
        <IMG src="img/logo/image 3.png" />
      </Block>
      {/* <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A281d74ca4fb419a8d65cecdc23fd7c27591051ae0e9f3cce293a7612010e8b86&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      ></iframe> */}
    </div>
  );
}

export default UniversityInfo;

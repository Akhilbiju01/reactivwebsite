import React, { Component } from "react";
import styled, { css } from "styled-components";

function Untitled(props) {
  return (
    <>
      <Image src={require("../assets/images/blog-blue-network.png")}></Image>
      <Rect></Rect>
      <DnaBarcoding>DNA BARCODING</DnaBarcoding>
    </>
  );
}

const Image = styled.img`
  top: -43px;
  left: -8px;
  width: 1374px;
  height: 857px;
  position: absolute;
  object-fit: contain;
`;

const Rect = styled.div`
  top: 25px;
  left: 370px;
  width: 664px;
  height: 115px;
  position: absolute;
  background-color: #E6E6E6;
`;

const DnaBarcoding = styled.span`
  font-family: Roboto;
  top: 52px;
  left: 461px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(74,144,226,1);
  height: 63px;
  width: 461px;
  font-size: 40px;
  text-align: center;
`;

export default Untitled;

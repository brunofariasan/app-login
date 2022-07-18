import styled from "styled-components"

export const Button = styled.button`
    box-sizing: border-box;
    box-sizing: border-box;
    width: 379px;
    height: 67px;
    color: #FFFFFF;
    font-family: sans-serif;
    background: linear-gradient(90deg,#FF2D04 0%,#C13216 100%);
    box-shadow: inset 5px 5px 15px rgb(0 0 0 / 15%);
    border-radius: 50px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    max-width: 80%;
    align-items: center;

   
`;

export const ButtonRenew = styled.button `
    width: 131px;
    height: 107px;
    left: 1661px;
    top: 981px;
    background: #FFFFFF;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #C13216;
    border: none;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const ButtonLogout = styled.button `
    width: 131px;
    height: 107px;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    border: none;
`;

export const ButtonRenewMobile = styled.button `
    width: 131px;
    height: 107px;
    left: 1661px;
    top: 981px;
    background: #FFFFFF;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #C13216;
    border: none;
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        width: 83%;
    }
`;
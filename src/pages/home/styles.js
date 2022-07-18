import styled from "styled-components"

export const Body = styled.body `


`;

export const Header = styled.header `
    margin: 0px 40px 0px 0px;
    height: 17%;
`;

export const HeaderSection = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: unset;
`;

export const SmallLogo = styled.div `
    margin: 1% 0% 0% 0%;
    
    #imgBlack {
        max-width: 100%;
    }
`;

export const SectionDate = styled.div `
    width: 458px;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

    #watch{

    }
`;

export const Watch = styled.div `
    height: 166px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    line-height: 216px;
    text-align: center;
    font-size: clamp(0.1em, 5.5em + 2.9vw, 12.5em);
    color: #222222;
`;

export const FullDate = styled.div `
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #222222;
`;

export const ClimateSection = styled.div `

`;

export const NameCity = styled.div `
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #222222;
    text-align:end;
    margin: 12% 0% 0% 0%;

`;

export const TemperatureInformation = styled.div `
    display: flex;
    height: 63px;
`;

export const WeatherIcon = styled.image `

`;

export const CurrentTemperature = styled.p `
    font-family: system-ui;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 72px;
    text-align: center;
    color: #222222;
`;

export const Main = styled.main `
    height: 65vh;
`;

export const Section = styled.div `
    display: flex;
    justify-content: space-between;
    height: 90%;
    margin: 0 5.5% 0 0;
`;

export const SectionLogo = styled.div `
    display: flex;
    align-items: flex-end;
    height: 650px;

    img {
        height: clamp(18.0em,0.5em + 24.9vw,34.5em);
    }

    @media screen and (max-width: 768px){
        height: 650px;
        margin-top: 22%;

        img{ 
            height: clamp(32.1em, 30.5em + 29.9vw, 52.5em);
            width: 468px;
            object-fit: cover;
            object-position: 176% 64%;
            position: fixed;
        }
    }
    @media screen and (max-width: 380px){

        img{ 
            max-width: 365px;
            height: 55%;
        }
    }
`;

export const TextsSection = styled.div `
    align-items: flex-end;
    flex-direction: column;
    display: flex;
    align-self: center;
`;

export const TextsMargin = styled.div `
    text-align: end;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const MediumText = styled.p `
    font-family:  system-ui;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    height: 40px;
    color: #C12D18;

`;

export const SecondTitle = styled.p `
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    font-size: clamp(0.1em, 0.5em + 0.9vw, 4.5em);
    color: #222222;

`;

export const BigText = styled.p `
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    line-height: 96px;
    height: 80px;
    font-size: clamp(0.1em, 0.5em + 2.9vw, 6.5em);
    color: #C12D18;

`;

export const Footer = styled.footer `

`;

export const SectionFooter = styled.footer `
    justify-content: space-between;
    display: flex;
`;

export const StopwatchSection = styled.div `
    display: flex;
    align-items: center;
    height: inherit;
    width: 65%;
    margin: 0% 0% 0% 8%;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const TextoFooter = styled.p `
    width: 37%;
    font-size: clamp(0.001em, 0.6em + 0.175vw, 0.75em);
    display: flex;
    text-align: end;
`;

export const LineDiv = styled.div `
    margin: 0% 16% 0% 4%;
`;

export const Line = styled.div `
    height: 70px;
    border-right: 1px solid #FFFFFF;
`;

export const TextRefresh = styled.p `
    width: 79px;
    text-align-last: right;
    display: flex;
    margin: 0 34px 0px 0px;

`;

export const StopwatchDiv = styled.div `
    margin: 1% 0% 0% 0%;
    height: 100%;
`;

export const Stopwatch = styled.p `
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #FFFFFF;
`;

export const TextSeconds = styled.p `
    text-align-last: center;
`;

export const SectionButtons = styled.div `
    display: flex;
    margin: 0 0 0 3%;

    @media screen and (max-width: 768px){
        margin: 0 0 0 0%;
        width: 100%;
    }
`;
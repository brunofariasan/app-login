import React, { useState, useEffect} from "react";
import {  Body, Header, HeaderSection, SmallLogo, SectionDate, FullDate, Watch, ClimateSection, NameCity, TemperatureInformation, 
          CurrentTemperature, Main, Section, SectionLogo, TextsSection, TextsMargin, MediumText, SecondTitle, BigText, 
          StopwatchSection, Footer, SectionFooter, TextoFooter, LineDiv, Line, TextRefresh, StopwatchDiv, Stopwatch, TextSeconds, SectionButtons 
        } from './styles'
import {ButtonRenew, ButtonLogout, ButtonRenewMobile} from '../../components/forms/style.button'
import logoBlack from '../../assets/image/compassuol-logo-black.png'
import logo from '../../assets/image/uol-ball-transparent 1.png'
import logoTemp from '../../assets/image/Ripple-1s-200px.gif'
import './style.css';
import './style.css';
import axios from 'axios';


import { useNavigate  } from 'react-router-dom';

const Home = () => {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
  const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", 
                                                    "agosto", "outubro", "novembro", "dezembro")
  
  const now = new Date;
  const date = (dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ] + " de " + now.getFullYear ());

  const time = ([now.getHours()]+":"+[now.getMinutes().toString().padStart(2, "0")])

  var [totalTimeInseconds, setTotalTimeInSeconds] = useState(500)
  var seconds = totalTimeInseconds

  const navigate = useNavigate();
  const Logout = () => {
    navigate('/')
  } 

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
    getWeather(position.coords.latitude, position.coords.longitude);
    setLocation(true)
    })

    const getWeather = async (lat, long) => {
      const res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: lat,
          lon: long,
          appid: 'ec465b702e56980fda09659eebeced6b',
          lang: 'pt',
          units: 'metric'
        }
      });
      setWeather(res.data);
    }

    if(seconds === 0){
      navigate('/')
    }else{ 
      setTimeout(() => {
        setTotalTimeInSeconds(seconds - 1)
      }, 1000)
    }
  }, [seconds])
  
    var imageClimate = '';
    var climate = '';
    var nameCity = '';

    const  verificationLocation = () => {

      if(location == false) {
          console.log(' Você precisa habilitar a localização no browser o/')
          imageClimate = logoTemp
          nameCity = 'Habilite sua localização'
        } else if(weather == false) {
          console.log('Carregando o clima...')
          imageClimate = `http:// https://openweathermap.org/img/wn/11d@2x.png`;
  
        }else if (location == true){
          console.log('Carregado ...')
          console.log({imageClimate})
          imageClimate = `http://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`;
          climate = Math.round(weather['main']['temp'])+ '°';
          nameCity = weather['name'];
        }
    } 
      var sessionRenewal = () => {
        seconds = 501;
      }
    verificationLocation()
    
  return (
    <Body>
      <Header>
        <HeaderSection>
          <SmallLogo>
            <img id="imgBlack" src={logoBlack} alt="logo"/>
          </SmallLogo>
          <SectionDate>
              <Watch>{time}</Watch>   
              <FullDate>{date}</FullDate>            
          </SectionDate>
          <ClimateSection>
            <NameCity>{nameCity} </NameCity>
            <TemperatureInformation>
              <img class="imgTempo" src={imageClimate}/>
              <CurrentTemperature> 
                {climate}
              </CurrentTemperature>
            </TemperatureInformation>
          </ClimateSection>
        </HeaderSection>
      </Header>
      <Main>
        <Section>
          <SectionLogo>
            <img src={logo} alt="logo"/>
          </SectionLogo>
          <TextsSection>
            <TextsMargin>
              <MediumText>
                Our mission is
              </MediumText>
              <SecondTitle>
                Nossa missão é
              </SecondTitle>
              <BigText> 
                to transform the world
              </BigText>
              <SecondTitle>
                transformar o mundo
              </SecondTitle>
              <BigText> 
                building digital experiences 
              </BigText>
              <SecondTitle>
                construindo experiências digitais
              </SecondTitle>
              <BigText>
                that enable our client’s growth 
              </BigText>
              <SecondTitle>
                que permitam o crescimento dos nossos clientes
              </SecondTitle>
            </TextsMargin>
          </TextsSection>
        </Section>
      </Main>
      <Footer>
        <SectionFooter>
          <StopwatchSection>
            <TextoFooter>
              Essa janela do navegador é usada para manter sua sessão de autenticação ativa. 
              Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
            </TextoFooter>
            <LineDiv>
              <Line></Line>
            </LineDiv>
            <TextRefresh>Application refresh in </TextRefresh>
            <StopwatchDiv>
              <Stopwatch>{seconds.toString().padStart(2, "0")}</Stopwatch>
              <TextSeconds>
                Seconds
              </TextSeconds>
            </StopwatchDiv>
          </StopwatchSection>
          <SectionButtons>
            <ButtonRenew onClick={sessionRenewal}>Continuar Navegando</ButtonRenew>
            <ButtonLogout onClick={Logout}>Logout</ButtonLogout>
            <ButtonRenewMobile onClick={sessionRenewal}>Continuar Navegando</ButtonRenewMobile>
          </SectionButtons>
        </SectionFooter>
      </Footer>
        
    </Body>
  );
 }

  
export default Home;
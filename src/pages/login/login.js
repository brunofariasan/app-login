import React from "react";
import { DivLogin,TextTitle,TextSubtitle, TextLogin, DivTitle, Error, 
            Div,DivFlexible, Body, DivInput, P, DivInformation,DivFormat} from './styles'
import {Button} from '../../components/forms/style.button'
import image from '../../assets/image/image 2.png'
import logoCompass from '../../assets/image/compassuol-logo-white 2.png'
import './style.css';

import  Input  from "../../components/forms/Inputs";
import useForm from "../../assets/hooks/useForm";
import { useNavigate  } from 'react-router-dom';

const Home = () => { 

    const username = useForm('username');
    const password = useForm('password');
    const bu = useForm('error');
    const navigate = useNavigate();

  function handleSubmit() {
    if(username.validate() && password.validate()){
      navigate('home')
    }
  }
  
  return (
    <Body>
        <DivFormat>
            <DivInformation>
                <Div>
                    <DivFlexible>
                        <DivTitle>
                            <TextTitle>
                                <img class="imgLogoCompass" src={logoCompass} alt="logo"/>
                                Olá,
                            </TextTitle>
                            <TextSubtitle>
                                Para continuar navegando de forma segura, 
                                efetue o login na rede.
                            </TextSubtitle>
                            <TextLogin>
                                Login
                            </TextLogin>
                        </DivTitle>    
                        <DivInput>                         
                            <Input id="user" type="username" placeholder="Usuário" name="username" {...username}/>
                        </DivInput>
                        <DivInput>
                            <Input id="lock"  placeholder="Senha" type="password" name="password" {...password}/>
                        </DivInput>
                        <Error>
                            <P>{username.error || password.error}</P>
                        </Error>
                        <Button id="button-login" onClick={handleSubmit}>
                            Login
                        </Button>
                    </DivFlexible>
                </Div>
            </DivInformation>
        </DivFormat>      
        <DivLogin>
            <img id="imgLogoCompassOne" src={logoCompass} alt="logo"/>
            <img clas="imgLogo" src={image} alt="logo"/>
        </DivLogin>
        
    </Body>
  );
}
  
export default Home;
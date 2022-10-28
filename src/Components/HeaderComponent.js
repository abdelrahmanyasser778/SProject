
import React, { useState } from 'react';
import { Button, Container, Row ,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import HeaderImg from '../images/620405890d2841cca82eb6c8_2-1024x576.jpg';

import Styled from "styled-components";
import { HeroContainer,HeroBg,ImgBg,HeroContent,HeroH1,HeroP, } from './HeroElements'

const HeaderComponent = () => {



  return (
    <HeroContainer id="Home">
    <HeroBg>
      
        <ImgBg src={HeaderImg}></ImgBg>
    </HeroBg>
    <HeroContent>
    <HeroH1>
      نقدم في <span className='green'>مركز العروض التقنية</span><br/> دورات قدرات و تحصيلي  يقدمها نخبه من افضل مدربي المملكة
        </HeroH1>

    </HeroContent>
    
</HeroContainer>
  )
}

export default HeaderComponent

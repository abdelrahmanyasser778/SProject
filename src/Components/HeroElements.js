import styled from "styled-components";

export const HeroContainer = styled.div`
    background:#099B93;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0px 30px;
    height:633px;
    position:relative;
    z-index:1;

    
`
export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:5;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
`


export const ImgBg = styled.img`
    width:100%;
    height:84vh;
    -o-object-fit:cover;
    object-fit:cover;
    
`

export const HeroContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const HeroH1 = styled.h1`
    color:#fff;
    
    font-size:48px;
    @media screen and (max-width:768px){
        font-size:40px;
    }
    @media screen and (max-width:768px){
        font-size:32px;
    }
`

export const HeroP = styled.p`
    margin-top:24px;
    color:#fff;
    font-size:24px;
    text-algin:center;
    max-width:600px;
    @media screen and (max-width:768px){
        font-size:24px;
    }
    @media screen and (max-width:768px){
        font-size:18px;
    }
`




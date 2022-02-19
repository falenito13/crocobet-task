import styled, {createGlobalStyle} from "styled-components";
import {BODY_COLOR, HeaderHeightDesktop, HeaderHeightMobile} from "../constants/Styles";

export const GlobalStyles = createGlobalStyle`
    * {
     box-sizing: border-box;
     margin : 0;
     padding : 0;
    }
    .body {
    background-color : ${BODY_COLOR};
    min-height : 100vh;
    width : 100%;
    }
    `

const Centered = styled.div`
    display : flex;
    width : 100wv;
    height : calc(100% - ${HeaderHeightDesktop});
    @media screen and (max-width : 768px){
    height : calc(100% - ${HeaderHeightMobile});
    }
`
export const VerticallyHorizontallyCentered = styled(Centered)`
    justify-content : center;
    align-items : center;
    min-height : calc(100vh - 80px);
`

export const HorizontallyCentered = styled(Centered)`
    justify-content : center;
    margin-top : ${p => p.marginTop ? p.marginTop : '0px'};
`

export const VerticallyCentered = styled(Centered)`
    align-items : center;
`

export const ContentText = styled.p`
    color : #FFFFFF;
    font-size : ${p => p.fontSize ? p.fontSize : '18px'};
    text-align : center;
`

export const Link = styled.a`
    color : #1a76eb;
    font-weight : 950;
    text-decoration : none;
`

export const Col = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : ${p => p.marginTop ? p.marginTop : '0px'};
    margin-right : ${p => p.marginRight ? p.marginRight : '0px'};
`

export const Row = styled.div`
    display : flex;
    flex-direction : row;
`

export const Header = styled.div`
   font-size : 32px;
   font-weight : 850;
   color : #FFFFFF;
   text-align : ${p => p.center ? 'center' : ''};
`

export const Label = styled.label`
   margin-bottom : 8px;
   color : #FFFFFF;
`

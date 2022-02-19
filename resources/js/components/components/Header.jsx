import styled from 'styled-components'
import {
    LogoWidthDesktop, LogoWidthMobile, LogoHeightDesktop,
    LogoHeightMobile, HeaderHeightMobile, HeaderHeightDesktop, NAVBAR_COLOR
} from "../constants/Styles";

export const NavBar = styled.header`
    background-color : ${NAVBAR_COLOR};
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : ${HeaderHeightDesktop};
    @media screen and (max-width : 768px){
    height : ${HeaderHeightMobile};
    }
`

export const Logo = styled.img`
    width : ${LogoWidthDesktop};
    height : ${LogoHeightDesktop};
    margin-left : 16px;
    @media screen and (max-width : 768px){
    width : ${LogoWidthMobile};
    height : ${LogoHeightMobile};
    }
`

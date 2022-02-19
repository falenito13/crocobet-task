import styled from "styled-components";
import {DEFAULT_GREEN, DEFAULT_GREEN_HOVER, DEFAULT_RED, DEFAULT_RED_HOVER} from "../constants/Styles";

const Button = styled.button`
    padding : 8px 16px;
    border-radius : 20px;
    @media screen and (max-width : 768px){
     padding : 4px 8px;
     font-size : 12px;
    }
`

const Login = styled(Button)`
    background-color : ${DEFAULT_GREEN};
    border: none;
    color : #FFFFFF;
    &:hover {
     background-color : ${DEFAULT_GREEN_HOVER};
     }
    &:focus {
     outline: none;
     border-color: ${DEFAULT_GREEN};
  }
`

export const NavBarLogin = styled(Login)`
    margin-right : 16px;
`


export const LoginButton = styled(Login)`
    width : 100%;
    padding : 16px 0;
    margin-top : 16px;
`

export const Logout = styled(Button)`
    background-color : ${DEFAULT_RED};
    margin-right : 16px;
    border: none;
    color : #FFFFFF;
    &:hover {
     background-color : ${DEFAULT_RED_HOVER};
     }
    &:focus {
     outline: none;
     border-color: ${DEFAULT_RED};
  }
`

export const TodoButton = styled(Button)`
    background-color : #00b100;
    text-align : center;
    width : 100%;
    margin-top : 16px;
    border : none;
    color : #FFFFFF;
`
export const StatusButton = styled(Button)`
    background-color : ${p => p.bg ? p.bg : '#3246a8'};
    text-align : center;
    width : 100%;
    margin-top : 16px;
    border : none;
    color : #FFFFFF;
    margin-bottom : 8px;
`


import styled from 'styled-components'
import {DEFAULT_WHITE} from "../constants/Styles";

export const PrimaryInput = styled.input`
    padding-left : 8px;
    height : 48px;
    border : ${DEFAULT_WHITE} 2px solid;
    border-radius : 4px;
    &:focus {
    outline: none;
  }
`



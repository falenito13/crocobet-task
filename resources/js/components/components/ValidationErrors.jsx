import React from 'react'
import styled from 'styled-components'
import {DEFAULT_RED} from "../constants/Styles";

const ErrorText = styled.p`
    margin-top : 8px;
    color : ${DEFAULT_RED};
    text-align: center;
    font-size : 12px;
`
export default function ValidationErrors({errors}) {
    console.log(errors)
    return (
        <>
            {errors && errors.map((error, index) => (
                    <ErrorText key={index}>{error}</ErrorText>
                )
            )
            }
        </>
    )
}

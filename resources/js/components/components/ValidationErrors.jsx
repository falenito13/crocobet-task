import React from 'react'
import styled from 'styled-components'
import {DEFAULT_RED} from "../constants/Styles";

const ErrorText = styled.p`
    color : ${DEFAULT_RED};
    text-align: center;
    font-size : 10px;

`
export default function ValidationErrors({errors}) {
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

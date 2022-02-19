import styled from 'styled-components'
import {DEFAULT_WHITE} from "../constants/Styles";

export const userSelectStyles = {
    control: base => ({
            ...base,
            maxWidth: '200px',
            height: '46px',
            backgroundColor: DEFAULT_WHITE,
            color: '#3D3E38',
            textAlign: 'center',
            border: '1px solid #C0DBDB',
        }
    ),
    dropdownIndicator: base => ({
        ...base,
        color: '#146667',
    }),
    placeholder: base => ({
        ...base,
        color: '#3D3E38'
    }),
    indicatorSeparator: (styles) => ({display: 'none'})
};

export const DeleteIcon = styled.img`
    width : 32px;
    height : 32px;
    `

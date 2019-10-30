import React from 'react';
import styled from "styled-components";

const FormHead = styled.div`
    font-weight : bold;
    margin-bottom: 5px;
    text-align: center;
    font-size: 2em;
   
`;


function FormHeader(props) {
    return (
        <FormHead>
            {props.formLabel}
        </FormHead>
    );
}

export default FormHeader;
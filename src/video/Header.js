import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
        width :90%;
        height: 50px;
        text-align: center;
        background: #33E0FF;
        border-color: grey;
        border: solid;
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom:20px;
`;

function Header(props) {
    return (

            <HeaderTitle>{props.headerTitle}</HeaderTitle>

    );
}

export default Header;
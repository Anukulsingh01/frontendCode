import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
const Container =styled(AppBar)`
   background:red;
   height:9vh;
   `;
const Logo= styled(Toolbar)`
font-size:19px;
font-weight:bold;`;

const Header = () => {
    return (
         <Container position='static'>
         <Logo>Anu-Cool</Logo>
         </Container>
    );
}

export default Header;

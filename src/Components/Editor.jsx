import React from 'react';
import Box from '@mui/material/Box';
import {styled }from '@mui/material/styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { githubDark } from '@uiw/codemirror-theme-github';
import { useState } from 'react';


const Heading=styled(Box)`
background :grey;
display:flex;
padding:9px;`;
const Header =styled(Box)`
display:flex;
background:#060606;
justify-content:space-between;
align-items:center;
`;
const Container=styled(Box)`
flex-grow:1;
flex-basis:0;
display:flex;
flex-direction:column;
padding:0px 8px 8px;
`;
const Editor = ({heading,sign,bg,value,onChange}) => {
    const[open,setOpen]=useState(true);

    return (
            <Container style={open ? null : {flexGrow: 0}}>
                <Header>
                    <Heading>
                        <Box 
                        component='span'
                        style={

                            {
                             background: bg,
                             height:20,
                             width:20,
                             display:'flex',
                             placeContent:'center',
                             borderRadius:5,
                             marginRight:5,
                             paddingBottom:2

                            }
                        }>
                       {sign}</Box>
                       {heading}
                    </Heading>
                   <CloseFullscreenIcon fontSize='small' style={{alignSelf:'center',color: 'white'}} onClick={()=>setOpen(prevState => !prevState)} />

                </Header>
                <CodeMirror
                 value={value}
                 height="300px"
                 theme={githubDark}
                 extensions={[html()]}
                 onChange={(val) => onChange(val)}
                />

            </Container>
    );
}

export default Editor;

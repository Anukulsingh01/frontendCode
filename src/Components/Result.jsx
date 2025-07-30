import React, { useContext ,useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DataContext } from '../contexts/DataProvider';
import { use } from 'react';

const Container=styled(Box)`
height:41vh`;
const Result = () => {
    const [src,setSrc]=useState(" ");
    const{html,css,js} = useContext(DataContext);
    const source=`
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    </html>
    `
    useEffect(()=>{
        const timeOut=setTimeout(()=>{
        setSrc(source) },1000)
    return()=>clearTimeout(timeOut);
},[html,css,js]);
    return (
        <Container>
          <iframe srcDoc={source} sandbox='allow-scripts' width='100%' height='100%'></iframe>
        </Container>
    );
}

export default Result;

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@mui/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';


export default () => {

    const theme = createTheme();

    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <ThemeProvider theme={ theme } ><Landing /> </ThemeProvider>} />
                        <Route path="/pricing" element={ <ThemeProvider theme={ theme } ><Pricing /> </ThemeProvider>} />
                    </Routes>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}
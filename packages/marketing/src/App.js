import React, { useState } from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-use-history';
import { StylesProvider } from '@mui/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({ history }) => {

    const theme = createTheme();

    return (
        <div>
            <StylesProvider>
               <BrowserRouter history={ history }> 
                    <Routes >
                        <Route path="/*" element={ <ThemeProvider theme={ theme } ><Landing /> </ThemeProvider>} />
                        <Route path="/pricing/*" element={ <ThemeProvider theme={ theme } ><Pricing /> </ThemeProvider>} />
                    </Routes>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}
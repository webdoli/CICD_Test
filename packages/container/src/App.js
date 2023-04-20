import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-use-history'
//import { history } from './hooks/history';

import Header from './components/Header';
import Progress from './components/Progress';
//import MarketingApp from './components/MarketingApp';
//import AuthApp from './components/AuthApp';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => {

    const [ isSignedIn, setIsSignedIn ] = useState( false );

    return (
        <BrowserRouter>
            <div>
                <Header 
                    onSignOut={() => setIsSignedIn(false) } 
                    isSignedIn = {isSignedIn} 
                />
                <Suspense fallback={<Progress />}>
                    <Routes>
                        <Route path="/*" element={ <MarketingLazy /> } />
                        <Route path="auth/*" element={ <AuthLazy onSignIn={() => setIsSignedIn(true)}/> } />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}
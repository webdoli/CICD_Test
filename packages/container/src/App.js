import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-use-history'
//import { history } from './hooks/history';

import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history';
//import MarketingApp from './components/MarketingApp';
//import AuthApp from './components/AuthApp';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

export default () => {

    const [ isSignedIn, setIsSignedIn ] = useState( false );

    useEffect(() => {

        if ( isSignedIn ) {
            history.push('/dashboard');
        }

    }, [isSignedIn])

    return (
        <BrowserRouter history={history}>
            <div>
                <Header 
                    onSignOut={() => setIsSignedIn(false) } 
                    isSignedIn = {isSignedIn} 
                />
                <Suspense fallback={<Progress />}>
                    <Routes>
                        <Route path="/*" element={ <MarketingLazy /> } />
                        <Route path="auth/*" element={ <AuthLazy onSignIn={() => setIsSignedIn(true)}/> } />
                        <Route path="/dashboard" element={ isSignedIn ? <DashboardLazy /> : < Navigate to="/" /> } />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}
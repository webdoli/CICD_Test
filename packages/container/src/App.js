import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-use-history'
import { history } from './hooks/history';
//import { createMemoryHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

//import MarketingApp from './components/MarketingApp';
//import AuthApp from './components/AuthApp';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));


export default () => {

    const [ isSignedIn, setIsSignedIn ] = useState( false );
    
    //const history = createMemoryHistory();
    /*
    for( let item in history ) {
        console.log(`${item} : ${history[item]}`);
    }
    */

    const signInFunc = () => {
        
        setIsSignedIn( true );

    }

    
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
                        <Route path="auth/*" element={ <AuthLazy onSignIn={ signInFunc } /> } />
                        <Route path="/dashboard/*" element={ isSignedIn ? <DashboardLazy /> : < Navigate to="/" /> } />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}
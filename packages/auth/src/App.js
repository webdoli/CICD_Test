import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-use-history';

import Signin from './components/Signin';
import Signup from './components/Signup';

export default ({ history, onSignIn }) => {

    return (
        <div>
            <h3> @ Test 회원가입 페이지 V3 @ </h3>
            <BrowserRouter history={ history }>
                <Routes >
                    <Route path="/auth/signin/*" element={ <Signin onSignIn={onSignIn}/>} />
                    <Route path="/auth/signup/*" element={ <Signup onSignIn={onSignIn}/> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
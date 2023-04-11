import React from 'react';
import TestComp from './components/TestComp';
import MarketingApp from './components/MarketingApp';

export default () => {
    return (
        <div>
            <TestComp />
            <h1> MarketingApp </h1>
            <hr/>
            <MarketingApp />
        </div>
    )
}
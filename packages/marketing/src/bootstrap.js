import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 마운트
const mount = ( el ) => {

    ReactDOM.createRoot( el )
            .render( <App /> );

}

console.log('process.env.NODE_ENV= ' + process.env.NODE_ENV );
// 웹팩 테스트
if ( process.env.NODE_ENV === 'production' ) {

    const devRoot = document.querySelector('#marketing-dev-root');

    if ( devRoot ) {
        mount( devRoot );
    }

}


// 개발팀 ID요소
if ( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#marketing-dev-root');

    if ( devRoot ) {
        mount( devRoot );
    }

}

// export
export { mount };
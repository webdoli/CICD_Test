import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// 마운트
const mount = ( el, { onSignIn, onNavigate, defaultHistory, initialPath } ) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [ initialPath ]
    });

    if( onNavigate ) { history.listen( onNavigate ); }
    
    ReactDOM.createRoot( el )
    .render( <App onSignIn={onSignIn} history={history} />);

    //return

    return {
        onParentNavigate({ location }) {

            let nextPathname = location.pathname;
            let { pathname } = history.location       
  
            if( pathname !== nextPathname ) {
                history.push( nextPathname );
            }
            
        }
    }
}

console.log('process.env.NODE_ENV= ' + process.env.NODE_ENV );
// 웹팩 테스트
if ( process.env.NODE_ENV === 'production' ) {

    const devRoot = document.querySelector('#auth-dev-root');

    if ( devRoot ) {
        mount( devRoot, { defaultHistory: createBrowserHistory() } );
    }

}


// 개발팀 ID요소
if ( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#auth-dev-root');

    if ( devRoot ) {
        mount( devRoot, { defaultHistory: createBrowserHistory() } );
    }

}

// export
export { mount };
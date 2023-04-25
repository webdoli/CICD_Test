import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-use-history'

export default ({ onSignIn }) => {
    
    const ref = useRef( null );
    const history = useHistory();

    useEffect( () => {
        
        const { onParentNavigate } = mount( ref.current, {
            
            initialPath: history.location.pathname,
            onNavigate: ({ location }) => {
                
                let nextPath = location.pathname;
                const { pathname:currentPath } = history.location;

                if( currentPath !== nextPath ) {
                    history.push( nextPath );
                }   
                
            },
            onSignIn
        });

        history.listen( onParentNavigate );

    }, []);

    return <div ref={ ref }></div>

}
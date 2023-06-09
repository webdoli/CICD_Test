import { mount } from 'marketing/Marketing';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-use-history'

export default () => {
    
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
        });

        history.listen( onParentNavigate );

    }, []);

    return <div ref={ ref }></div>

}
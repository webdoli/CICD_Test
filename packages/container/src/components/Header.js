import React from 'react';
import pc from 'prefix-classnames';
import { Link, NavLink   } from 'react-router-dom';

const px = pc('con-team-ju');

const Header = ({ isSignedIn, onSignOut }) => {

    const onClick = () => {
        if( isSignedIn && onSignOut ) {
            onSignOut();
        }
    }


    return (
        <React.Fragment>
            <nav className={px(' relative container mx-auto p-6')}>
                {/* Flex Container For All Items */}
                <div className={px(' flex items-center justify-between')}>

                    <div className={px(' flex items-center space-x-20')}>
                        {/* Logo & img */}
                        
                        <Link to='/'>
                            <img src="https://react-prj-f9edc.web.app/images/cghubLogo.jpg" className={ px(' w-24')}/>
                        </Link> 
                          
                        
                        
                        {/* Left Menu */}
                        <div className={px(' hidden space-x-8 font-bold lg:flex')}>

                        </div>

                    </div>

                    {/* Right Menu */}
                    <div className={ px(' hidden items-center space-x-6 font-bold text-grayishViolet lg:flex')}>
                        <Link to={ isSignedIn ? "/" : "/auth/signin" }>
                            <button 
                                className={ px(' hover:bg-violet-200 px-2 py-2')}
                                onClick={onClick}    
                            >
                                { isSignedIn ? 'Logout' : 'Login' }
                            </button>
                        </Link>
                        <Link to="/auth/signin"><div className={px(' px-8 py-3 font-bold text-grey bg-cyan rounded-full hover:opacity-70')}> Sign Up</div></Link>
                    </div>

                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;

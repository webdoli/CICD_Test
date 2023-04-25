import React from 'react';
import { Link } from 'react-router-dom';
import pc from 'prefix-classnames';

const px = pc('auth-team-ju');

const Signin = ({ onSignIn }) => {

    const onClickFunc =  () => {
      onSignIn();
    }

    return (
        <div className={px(' flex items-center justify-center min-h-screen bg-white')}>
            
            {/* Left Side */}
            <div className={px(' p-6 md:p-20')} >

                <h2 className={px(' mb-5 text-4xl font-bold')}>로그인</h2>
                <p className={px(' max-w-sm mb-12 font-light text-gray-600')}>
                    Log in to your account to upload or download pictures, viedeos or music.
                </p>
                <input
                    type='text'
                    className={px(' w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light')}
                    placeholder="Enter your id"
                />

                {/* Middle Content */}
                <div
                  className={px(" flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0") }
                >
                  <div className={px(" font-thin text-cyan-700")}>
                    <Link to='/auth/signup'><p>회원가입</p></Link>
                  </div>

                  <button
                    className={ px(" w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150")}
                    onClick={onClickFunc}
                  >
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={ px(" w-7")}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="13" y1="18" x2="19" y2="12" />
                      <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

            </div>
              
        </div>
    );
}

export default Signin;

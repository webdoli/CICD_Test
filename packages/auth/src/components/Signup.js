import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <h3>회원가입</h3>
            <Link to='/auth/signin'><p>로그인</p></Link>
        </div>
    );
}

export default Signup;

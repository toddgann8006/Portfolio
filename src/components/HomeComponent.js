import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/profile.JPG';

function Home(props) {
    return (
        <div className='bg-dark'>
            <div className="container pb-5 pt-5 d-flex align-items-center">
                <div className='row mb-5 pb-5 backgroundGray d-flex align-items-center'>
                    <div className='col-md-6 mt-5'>
                        <h1>Hi, I'm Todd.</h1>
                        <p className='h4 mt-5 mb-5'>I'm a web developer from Knoxville, TN.</p>
                        <Link to='/projects' className="text-decoration-none bg-dark text-light h4 mt-5 p-3 border border-3 rounded-pill">Check out some of my work.</Link>
                    </div>
                    <div className='col-md-6 mt-5 mb-5'>
                        <img src={Logo} alt="logo" className='img-thumbnail rounded-circle'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;  
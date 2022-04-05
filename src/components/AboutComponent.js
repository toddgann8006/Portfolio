import React from 'react';

function About(props) {
    return (
        <div className='bg-dark pt-5 pb-5'>
            <div className="container pt-5 mb-5 mb-md-3 backgroundGray">
                <div className='row pl-md-5 ml-md-5'>
                    <div className='col-md-6'>
                        <p className='h1 text-left pt-3'>About Me</p>
                        <p className='mt-5 h4 text-left'>
                            I'm Todd Gann, a self-motivated, driven individual who is eagerly pursuing a long-time dream of working in web development.
                        </p>
                        <p className='mt-5 mb-5 h4 text-left'>
                            I work primarily with React, React Native, Node, Express, and MongoDB. When I'm not at work, I enjoy playing Pokemon Go, watching Marvel movies, spending time with my family, and helping the world's goofiest cat catch the elusive red dot.
                        </p>
                    </div>
                    <div className='col-md-6 mb-5 pt-2 d-flex align-items-center flex-column'>
                        <p className='h1'>Training</p>
                        <ul className='mt-5 text-left'>
                            <li>
                                <p>
                                    NuCamp Bootcamp
                                </p>
                                <p>
                                    August 2021-January 2022
                                </p>
                                <p>
                                    Full Stack Bootcamp working with Bootstrap, React, React Navive, NodeJS, Express, MongoDB.
                                </p>
                            </li>
                            <li className='pt-4'>
                                <p>
                                    The Web Developer Bootcamp (Udemy)
                                </p>
                                <p>
                                    Febuary 2021 - May 2021
                                </p>
                                <p>
                                    Full Stack Bootcamp working HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, and MongoDB.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 
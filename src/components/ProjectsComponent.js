import React from 'react';
import video from '../images/Video.mp4'

function Projects(props) {
    return (
        <div className='bg-dark'>
            <div className="container pb-5">
                <div className='row'>
                    <div className='col backgroundGray d-flex align-items-start mt-5 pb-5'>
                        <h1><u>Projects</u></h1>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-md-6 backgroundGray d-flex align-items-start flex-column'>
                        <p className='h1 pb-5'>Massage Knox App</p>
                        <video src={video} width="600" height="400" controls />
                    </div>
                    <div className='col-md-6 backgroundGray d-flex align-items-end flex-column'>
                        <p>
                            Text
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects; 
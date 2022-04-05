import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
    return (
        <footer className="bg-light">
            <div className="container">
                <div className="row pt-4 pb-3">
                    <div className="col">
                        <a className="text-decoration-none text-dark" href="https://github.com/toddgann8006">
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                            <p className="mt-2">github.com/toddgann8006</p>
                        </a>
                    </div>
                    <div className="col">
                        <a className="text-decoration-none text-dark" href="mailto:toddgann8006@comcast.net">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" />
                            <p className="mt-2">toddgann8006@comcast.net</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

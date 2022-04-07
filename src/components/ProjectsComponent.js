import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, Button } from 'reactstrap';
import video from '../images/Video.mp4';
import about from '../images/About.png';
import contact from '../images/Contact.png';
import directory from '../images/Directory.png';
import favorites from '../images/Favorites.png';
import home from '../images/Home.png';
import login from '../images/Login.png';
import menu from '../images/Menu.png';
import reserve from '../images/Reserve.png';
import spaapp from '../images/spaapp.png';
import nucamp from '../images/nucampreact.png';

function Projects(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            src: home,
            altText: "Home Page",
            caption: "Home Page"
        },
        {
            src: about,
            altText: "About Page",
            caption: "About Page"
        },
        {
            src: contact,
            altText: "Contact Page",
            caption: "Contact Page"
        },
        {
            src: directory,
            altText: "Directory Page",
            caption: "Directory Page"
        },
        {
            src: favorites,
            altText: "Favorites Page",
            caption: "Favorites Page"
        },
        {
            src: login,
            altText: "Log In Page",
            caption: "Log In Page"
        },
        {
            src: menu,
            altText: "Menu",
            caption: "Menu"
        },
        {
            src: reserve,
            altText: "Reserve Page",
            caption: "Reserve Page"
        },
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img height={400} width={'auto'} src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <div className='bg-dark'>
            <div className="container pb-5">
                <div className='row'>
                    <div className='col backgroundGray d-flex align-items-start mt-5 pb-5'>
                        <h1><u>Projects</u></h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 pb-5 backgroundGray d-flex justify-content-center'>
                        <Card style={{ width: '28rem' }}>
                            <video src={video} width="100%" height="400" controls />
                            <CardBody style={{ backgroundColor: 'rgb(200, 220, 210)' }}>
                                <CardTitle>
                                    <p className='h1'>Massage Knox App</p>
                                </CardTitle>
                                <CardText>
                                    The Massage Knox mobile app is my first major project. It is a rewards app that keeps track of how many times a client has visited the massage business using the camera on the phone to scan a QR code. They earn a stamp with each visit. It also receives push notifications to let clients know about last minute openings.
                                </CardText>
                                <CardText>
                                    I started it while in the Nucamp Bootcamp. I built the front end with React Native and the back end with Express.
                                    It was designed for and is currently being used by a local business. It is available on both of the mobile app stores.
                                </CardText>
                                <CardText>
                                    Links to code:
                                </CardText>
                                <Button className="mr-5" varient="secondary" href="https://github.com/toddgann8006/Massage-Knox-App-IOS">Front End</Button>
                                <Button className="ml-5" varient="secondary" href="https://github.com/toddgann8006/Massage-Knox-Server">Back End</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-lg-6 pb-5 backgroundGray d-flex justify-content-center'>
                        <Card style={{ width: '28rem' }}>
                            <Carousel activeIndex={activeIndex} next={next} previous={previous} className="bg-dark">
                                <CarouselIndicators
                                    items={items}
                                    activeIndex={activeIndex}
                                    onClickHandler={goToIndex}
                                />
                                {slides}
                                <CarouselControl
                                    direction="prev"
                                    directionText="Previous"
                                    onClickHandler={previous}
                                />
                                <CarouselControl
                                    direction="next"
                                    directionText="Next"
                                    onClickHandler={next}
                                />
                            </Carousel>
                            <CardBody style={{ backgroundColor: 'rgb(200, 220, 210)' }}>
                                <CardTitle>
                                    <p className='h1'>NuCamp Mobile App</p>
                                </CardTitle>
                                <CardText>
                                    The NuCamp mobile app was a class project we did together for four weeks while learning React Native. We worked on it throughout the week together then we had to do part of it as an assignment by ourselves each week.
                                </CardText>
                                <CardText>
                                    This isn't available on the app stores. I took the screenshots from an emulator. There is a link to the code on github below.
                                </CardText>
                                <CardText>Link to code:</CardText>
                                <Button varient="secondary" href="https://github.com/toddgann8006/Nucamp-Mobile-App">Front End</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-lg-6 pb-5 backgroundGray d-flex justify-content-center'>
                        <Card style={{ width: '28rem' }}>
                            <CardImg src={spaapp} alt='spa app home screen'
                                top width="100%" />
                            <CardBody style={{ backgroundColor: 'rgb(200, 220, 210)' }}>
                                <CardTitle>
                                    <p className='h1'>Healing Touch Spa</p>
                                </CardTitle>
                                <CardText>
                                    This is a spa website I designed while in the Nucamp Bootcamp. It was made using HTML and CSS. It is currently deployed on Netlify.
                                </CardText>
                                <CardText>
                                    Links:
                                </CardText>
                                <Button className="mr-5" varient="secondary" href="https://github.com/toddgann8006/Bootstrap-Spa-Project">Link To Code</Button>
                                <Button className="ml-5" varient="secondary" href="https://healingtouch.netlify.app/">Live Site</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-lg-6 pb-5 backgroundGray d-flex justify-content-center'>
                        <Card style={{ width: '28rem' }}>
                            <CardImg src={nucamp} alt='nucamp react app home screen'
                                top width="100%" />
                            <CardBody style={{ backgroundColor: 'rgb(200, 220, 210)' }}>
                                <CardTitle>
                                    <p className='h1'>Nucamp Web App</p>
                                </CardTitle>
                                <CardText>
                                    The NuCamp web app was a class project we did together for five weeks while learning React. Like with the mobile app, we worked on it throughout the week together then we had to do part of it as an assignment by ourselves each week. It is not currently deployed, but there is a link to the code below.
                                </CardText>
                                <CardText>
                                    Link to code:
                                </CardText>
                                <Button varient="secondary" href="https://github.com/toddgann8006/Nucamp-React-Project">Front End</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Projects; 
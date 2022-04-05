import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Projects from "./ProjectsComponent"
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

function Main(props) {

    const HomePage = () => {
        return (
            <Home />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/projects' component={Projects} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default (Main);
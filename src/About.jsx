import React from "react";
import Common from "./Common";
import img1 from './img.jpg';
const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" imgsrc={img1} visit="/contact" btname="Contact Now" />
        </>
    );
}

export default About;
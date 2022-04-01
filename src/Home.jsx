import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import img1 from './img.jpg';


const Home = () => {
    return (
        <>
            <Common name="Grow your business with" imgsrc={img1} visit="/service" btname="Get Started" />
        </>
    );
}

export default Home;
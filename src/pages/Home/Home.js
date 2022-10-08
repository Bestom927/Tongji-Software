import React from 'react';
import ReactPlayer from 'react-player';
import { PromotionVideo, GameEducation, Brochure } from '../YX/Yangxin';
import '../YX/Yangxin.css';

const Home = () => {
    return (
        <div className='home-container'>
            Home page here
            <PromotionVideo /><br /><br />
            <GameEducation />
            <Brochure />
        </div>
    )
}

export default Home;
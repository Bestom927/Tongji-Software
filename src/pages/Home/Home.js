import React from 'react'
import { PromotionVideo, GameEducation, Brochure } from '../YX/Yangxin';
import Semicircle from '../YFY/Semicircle';
import Support from '../../../src/components/Support/Support.js'

const Home = () => {
    return (
        <>
            <Semicircle />
            <div className='home-container'
                style={{
                    height: 1000,
                    width: 1500,
                    backgroundImage: "url(" + require("../../assets/bg-img.jpeg") + ")",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    
            </div>

            
            <PromotionVideo /><br /><br />
            <GameEducation />
            <Brochure />

            <Support/>
        </>
    )
}

export default Home;
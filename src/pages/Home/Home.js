import React from 'react'
import { PromotionVideo, GameEducation, Brochure } from '../YX/Yangxin';
import Semicircle from '../YFY/Semicircle';
import Support from '../../../src/components/Support/Support.js'
import WhatToDo from '../../components/WhatToDo/WhatToDo';
import CpisprSystem from '../../components/CpisprSystem/CpisprSystem';
import ProblemToBeSolved from '../../components/ProblemToBeSolved/ProblemToBeSolved';
import WhyImportant from '../../components/WhyImportant/WhyImportant';
import Software from '../../components/Software/Software';
const Home = () => {
    return (
        <>
        
            <div className='home-container'
                style={{
                    height: 1000,
                    width: "100%",
                    backgroundImage: "url(" + require("../../assets/bg-img.jpeg") + ")",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    
            </div>
            <CpisprSystem/>
            <ProblemToBeSolved/>
            <WhatToDo />
            
            <Semicircle />
            
            
            <WhyImportant />
            <Software />

            <PromotionVideo /><br /><br />
            <GameEducation />
            <Brochure />

            <Support/>
        </>
    )
}

export default Home;
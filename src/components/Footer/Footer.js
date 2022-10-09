import React from 'react'
import './Footer.css'
const Footer = () => {

    return (
        <div id="footer" >
            <div id="title">
                Contact us
            </div>
            
            <div id="contact_info">
                <div style={{bottom:"30px"}}>

                    <a href="https://gitlab.igem.org/2022/tongji-software">
                    <img src={require("../../../src/assets/igem.png")} alt="logo"></img>
                    </a>
                    
                    <a href="https://gitlab.igem.org/2022/tongji-software">
                    <img src={require("../../../src/assets/bilibili.png")} alt="logo"></img>
                    </a>

                    <a href="https://gitlab.igem.org/2022/tongji-software">
                    <img src={require("../../../src/assets/github.png")} alt="logo"></img>
                    </a>

                    <a href="https://gitlab.igem.org/2022/tongji-software">
                    <img src={require("../../../src/assets/gitlab_logo.png")} alt="logo"
                    style={{height:"100px"}}
                    ></img></a>
                
                </div>
            </div>
        </div>
    )
} 

export default Footer
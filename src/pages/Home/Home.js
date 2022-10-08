import React from 'react'

const Home = () => {
    return (
        <div className='home-container'
             style={{
                height:1000,
                width:1500,
                backgroundImage:"url("+require("./images/bg-img.jpeg")+")",
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover'
             }}>
            Home page here!!!
        </div>
    )
}

export default Home;
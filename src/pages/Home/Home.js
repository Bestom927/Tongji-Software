import React from 'react'

const Home = () => {
    return (
        <div className='home-container'
            style={{
                height: 1000,
                width: 1500,
                backgroundImage: "url(" + require("../../assets/bg-img.jpeg") + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

        </div>
    )
}

export default Home;
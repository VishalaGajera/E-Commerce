import React from 'react'

const About = () => {
    return (
        <div className='flex justify-center items-center bg-slate-700'>
            <div className='flex justify-center items-center w-full h-screen text-white'
                style={{
                    backgroundImage: `url('https://img.freepik.com/premium-photo/online-grocery-shopping-convenience-your-fingertips_1276750-745.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}>
                <h1>ABOUT US</h1>
                <p>With over 50 years of experience in the market, HOS Global Foods is the most popular choice for quality South Asian flavors and the largest South Asian distributor in the USA.</p>
            </div>
            <div className='container'>
                <div className='flex justify-center items-center mx-5'>
                </div>
            </div>
        </div>
    )
}

export default About





import React from 'react'

// import HomeThird from '../components/Home/HomeThird'
import SectionHeader from '../components/SectionHeader'
import AboutUs from '../components/Home/AboutUs'
import Community from '../components/community/Community'
import GetInTouch from '../components/getInTouch/GetInTouch'
import MenuPage from '../karanComponent/MenuPageKa'


const About = () => {
    return (

        <>
            <MenuPage title="ABOUT US" subtitle="Home" />
            {/* <SectionHeader title="ABOUT US">
                Home <span style={{ color: '#F15A29' }}> // </span> About Us
            </SectionHeader> */}
            <AboutUs />
            <Community />
            <GetInTouch />
        </>

    )
}

export default About

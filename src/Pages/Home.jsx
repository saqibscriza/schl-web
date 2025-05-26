import { Padding } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Community from '../components/community/Community'
import GetInTouch from '../components/getInTouch/GetInTouch'
import Welcome from '../components/Home/Welcome'
import { Outlet, Route, Routes } from 'react-router-dom'
import FeatureLayout from './features/FeatureLayout'

import BlogSection from '../components/Home/BlogSection'
import Security from '../components/Home/Security'
import AboutUs from '../components/Home/AboutUs'

const Home = () => {
    return (
        <>
            <Welcome />
            <Security />
            <Outlet />
            <AboutUs />
            <GetInTouch />
            <Community />
            <BlogSection />

        </>
    )
}

export default Home

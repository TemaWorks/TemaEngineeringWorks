import React from 'react'
import Landing from '../components/Landing'
import ServicePara from '../components/ServicePara'
import Linfo from '../components/Linfo'
import Sservice from '../components/Sservice'
import Features from '../components/Features'
import Achievements from '../components/Achievements'
import Companies from '../components/Companies'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Choose from '../components/Choose'
import ContactForm from '../components/ContactForm'


const Home = () => {
  return (
    <>
    <Landing/>
    <Linfo/>
    <ServicePara/>
    <Sservice/>
    <Features/>
    <Achievements/>
    <Choose/>
    <ContactForm/>
    <Team/>
    <Companies/>
    <Footer/>
    </>
  )
}

export default Home
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
	return (
    <>
    <Header />
		<Routes>
			<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='services' element={<Services />} />
		</Routes>
    <Footer />
    </>
	)
}

export default App

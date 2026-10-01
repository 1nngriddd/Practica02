import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Llistes} from './components/Llistes'

import {pelis} from './data/data'

const pelicules = pelis()


function App() {
  const pelis2026 = pelicules.filter(p => p.any === 2026)
  const pelisTerror = pelicules.filter(p => p.genere === 'terror')
  const pelisTopRating = pelicules.slice().sort((a, b) => b.rating - a.rating)
  const pelisDuesAA = pelicules.filter(p => {
  const numA = (p.titol.toLowerCase().match(/a/g) || []).length
    return numA >= 2
})

  return (
    <div className="App">
      <Header />
      <main>
        <Llistes titolSeccio="Pel·lícules del 2026" pelicules={pelis2026} />
        <Llistes titolSeccio="Pel·lícules de Terror" pelicules={pelisTerror} />
        <Llistes titolSeccio="Top Rating" pelicules={pelisTopRating} />
        <Llistes titolSeccio="Pel·lícules amb dues A's" pelicules={pelisDuesAA} />
      </main>

      <Footer />
    </div>
  )
}

export default App

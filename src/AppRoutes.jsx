import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App'
import { Formulario } from './formulario'

export const AppRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<App></App>}/> 
        <Route path='Formulario' element={<Formulario></Formulario>} />

        <Route path='/' element={<Formulario></Formulario>} />
        <Route path='App' element={<App></App>} />
        
    </Routes>
  )
}


// discord: dg0015


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NytSearch from './pages/NytSearch'
import Error from './pages/Error'
import QrGenerator from './pages/QrGenerator'
import SharedLayout from './pages/SharedLayout'
import './App.css'

const App = () => {
  return <BrowserRouter>

  <Routes>

    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path='/nytsearch' element={<NytSearch />} />
      <Route path='/qrgenerator' element={<QrGenerator />} />
      <Route path='*' element={<Error />} />
    </Route>

  </Routes>
  </BrowserRouter>
}

export default App

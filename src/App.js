import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NytSearch from './pages/NytSearch'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import './App.css'

const App = () => {
  return <BrowserRouter>

  <Routes>

    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path='/nytsearch' element={<NytSearch />} />
      <Route path='*' element={<Error />} />
    </Route>

  </Routes>
  </BrowserRouter>
}

export default App

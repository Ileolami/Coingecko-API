import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import DisplayCoin from './Display/DisplayCoin'
import Homepage from './Homepage'
import Category from './Category'
import NFT from './NFT'
import DisplayCategories from './Display/DisplayCategories'
import DisplayNFT from './Display/DisplayNft'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coin/:id" element={<DisplayCoin />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/category/:id" element={<DisplayCategories />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/nft/:id" element={<DisplayNFT />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App

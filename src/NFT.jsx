import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchNFT from './Component/SearchNfts'


const Category = () => {
    const [NFT, setNFT] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending')
       .then(response => {
            console.log(response.data.nfts)
            setNFT(response.data.nfts)
        })
       .catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <div className='ml-5'>
        <h1 className="text-2xl font-bold tracking-wider text-center mt-2">TRENDING NFTS</h1>
        <SearchNFT />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pl-7">
            {NFT.map((nft, index) => (
            <Link to={`/nft/${nft.id}`} key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 hover:bg-gray-900 hover:shadow-2xl transition duration-300 ease-in-out">
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={nft.thumb} alt={nft.name} className="w-20 h-20 mx-auto" />
               <div className='flex flex-col justify-center items-center'>
               <h1 className="text-2xl font-bold">{nft.name}</h1>
                <p className="text-gray-600">Coin Count: {nft.coins_count}</p>
                <p className="text-gray-600">Price: {nft.data.floor_price}</p>
                <p className="text-gray-600">Average Sale Price : {nft.data.h24_average_sale_price}</p>
               </div>
              </div>
            </Link>
            ))}
            
        </div>
    </div>
  )
}

export default Category
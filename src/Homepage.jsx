import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchCoin from './Component/SearchCoin';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                //console.log(response.data.coins);
                setTrendingCoins(response.data.coins);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
  return (
    <div className=''>
      <SearchCoin />
        <h1 className="text-2xl font-bold text-center tracking-wider">TRENDING COINS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pl-10">
            {trendingCoins.map((coin, index) => (
            <Link to={`/coin/${coin.item.id}`} key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 hover:bg-gray-900 hover:shadow-2xl transition duration-300 ease-in-out">
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={coin.item.thumb} alt={coin.item.name} className="w-20 h-20 mx-auto" />
                <div className='flex flex-col justify-center items-center'>
                <h1 className="text-2xl font-bold">{coin.item.name}</h1>
                <p className="text-gray-600">Price: ${coin.item.data.price.toFixed(3)}</p>
                <p className="text-gray-600">Market Cap Rank: {coin.item.market_cap_rank}</p>
                </div>
              </div>
            </Link>
            ))}
    </div>
    </div>
  )
}

export default Homepage


import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchCategories from './Component/SearchCategory'

const Category = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending')
       .then(response => {
            console.log(response.data.categories)
            setCategory(response.data.categories)
        })
       .catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <div className='ml-5 '>
        <h1 className="text-2xl font-bold tracking-wider text-center mt-2">TRENDING CATEGORIES</h1>
        <SearchCategories />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
            {category.map((category, index) => (
            <Link to={`/category/${category.id}`} key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 hover:bg-gray-900 hover:shadow-2xl transition duration-300 ease-in-out">
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={category.data.sparkline} alt={category.name} className="w-20 h-20 mx-auto" />
             <div className='flex flex-col justify-center items-center'>
                <h1 className="text-2xl font-bold">{category.name}</h1>
             <p className="text-gray-600">Coin Count: {category.coins_count}</p>
                <p className="text-gray-600">Market Cap : {category.data.market_cap.toFixed(2)}</p>
                <p className="text-gray-600">Price: ${category.data.market_cap_btc.toFixed(2)}</p>
             </div>
              </div>
            </Link>
            ))}
            
        </div>
    </div>
  )
}

export default Category
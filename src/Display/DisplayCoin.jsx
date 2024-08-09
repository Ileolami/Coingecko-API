import { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Rechart from './Rechart';


const Display = () => {
  const params = useParams();
  const [apiResponse, setApiResponse] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
        console.log(apiResponse);
        setApiResponse(apiResponse)
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false);
    }
      
    };


    fetchData();
  }, []);
  return (
    <div className='min-h-screen'>
      {loading && <div className='flex justify-center items-center h-screen'>
        <div className='spinner'></div>
        </div>}
      {apiResponse.data && (
        <div className=" max-w-screen-md mx-auto rounded-lg overflow-hidden shadow-lg p-6 bg-white">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">{apiResponse.data.name}</h1>
          <img src={apiResponse.data.image.large} alt={apiResponse.data.name} className=" w-52 lg:w-80 ml-20 lg:ml-52 mb-4 rounded-lg shadow" />
          <Rechart/>
          <h2 className="font-bold text-lg text-gray-800 mb-2 text-center tracking-widest">DETAILs</h2>
          <div className=' leading-12 '>
            <p className="text-gray-600 mb-10 flex justify-between border-b-2">Currency <span className="font-semibold">{apiResponse.data.symbol}</span></p>
            <p className="text-gray-600 mb-10 flex justify-between border-b-2">Current Price <span className="font-semibold">${apiResponse.data.market_data.current_price.usd}</span></p>
            <p className="text-gray-600 mb-10 flex justify-between border-b-2">Market Cap Rank <span className="font-semibold">{apiResponse.data.market_cap_rank}</span></p>
            <p className="text-gray-600 mb-10 flex justify-between border-b-2">Market Cap <span className="font-semibold">${apiResponse.data.market_data.market_cap.usd}</span></p>
            <p className="text-gray-600 mb-10 flex justify-between border-b-2">Total Supply <span className="font-medium">{apiResponse.data.market_data.total_supply}</span></p>
            <p className="text-gray-600 mb-10 flex justify-between border-b-2">Circulating Supply <span className="font-medium">{apiResponse.data.market_data.circulating_supply}</span></p>
            <p className="text-gray-600 flex justify-between border-b-2">Max Supply <span className="font-medium">{apiResponse.data.market_data.max_supply}</span></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Display
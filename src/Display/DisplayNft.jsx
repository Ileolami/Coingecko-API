import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const DisplayNFT = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false)
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`https://api.coingecko.com/api/v3/nfts/${params.id}`);
            //console.log(response.data)
            setApiResponse(response.data)
        } catch (error) {
            console.error(error)
        }finally {
          setLoading(false);
        }
    }
    fetchData()
}, []);
return (
  <div className='min-h-screen'>
    {loading && <div className='flex justify-center items-center h-screen'>
      <div className='spinner'></div>
      </div>}
    {apiResponse && (
      <div className=" max-w-screen-md mx-auto rounded-lg overflow-hidden shadow-lg p-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">{apiResponse.name}</h1>
        <img src={apiResponse.image.small} alt={apiResponse.name} className=" w-52 ml-20 lg:80 lg:ml-52 mb-4 rounded-lg shadow" />
          <h2 className="font-bold text-lg text-gray-800 mb-2 text-center tracking-widest">DETAILs</h2>
        <div className=' leading-12 '>
        <p className="text-gray-600 mb-10 flex justify-between border-b-2">Currency <span className="font-semibold">{apiResponse.native_currency_symbol}</span></p>
        <p className="text-gray-600 mb-10 flex justify-between border-b-2">Floor price <span className="font-semibold">${apiResponse.floor_price.usd}</span></p>
        <p className="text-gray-600 mb-10 flex justify-between border-b-2">Market Cap <span className="font-semibold">${apiResponse.market_cap.usd}</span></p>
          <p className="text-gray-600 mb-10 flex justify-between border-b-2">Symbol <span className="font-medium">{apiResponse.symbol}</span></p>
          <p className="text-gray-600 mb-10 flex justify-between border-b-2">Total Supply <span className="font-medium">{apiResponse.total_supply}</span></p>
          <p className="text-gray-600 flex justify-between border-b-2">Contract Address <span className="font-medium">{apiResponse.contract_address}</span></p>
      </div>
    </div>
    )}
    </div>
  )};
export default DisplayNFT
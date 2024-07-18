import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'; 

const Display = () => {
  const params = useParams();
  const [apiResponse, setApiResponse] = useState([]);
  const [graphRes, setGraphRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const graphRes = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=1`);
        const graphData = graphRes.data.prices.map((item) => {
          const [timestamp, p] = item;
          const date = new Date(timestamp).toLocaleDateString('en-us')
          return {
            Date: date,
            Price: p,
          };
        });
        const apiResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&x_cg_demo_api_key=CG-ZZmsLymLo67SDa17w5AucMF6`);
        setGraphRes(graphData);
        console.log(apiResponse);
        setApiResponse(apiResponse)
      } catch (error) {
        console.error(error);
      }
      
    };


    fetchData();
  }, []);
  return (
    <div className='flex items-center justify-center mt-4 flex-col'>
      <img src={apiResponse.data.image.large} alt={apiResponse.data.name} className='w-48'/>
      <h1 className='font-bold tracking-wider text-2xl'>{apiResponse.data.name}</h1>
       <AreaChart
          width={750}
          height={400}
          data={graphRes}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date"/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <div className='flex flex-col items-center'>
          <p>Market Cap Rank: {apiResponse.market_cap_rank}</p>
          <p>Current Price: ${apiResponse.current_price}</p>
        </div>
    </div>
  )
}

export default Display
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Rechart = () => {
  const params = useParams();
  const [graphRes, setGraphRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=1`);
        setGraphRes(response.data.prices.map((item) => {
          const [timestamp, p] = item;
          const date = new Date(timestamp).toLocaleDateString('en-us');
          return {
            Date: date,
            Price: p,
          };
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div style={{ width: '110%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={graphRes}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
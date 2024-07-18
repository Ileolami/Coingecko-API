import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayCategories = () => {
    const [apiResponse, setApiResponse] = useState(null)
    const params = useParams()

    useEffect(() => {
        console.log(params.id);
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/categories?order=market_cap_desc', {
                    headers: {
                        accept: 'application/json', 
                        'x-cg-demo-api-key': 'CG-ZZmsLymLo67SDa17w5AucMF6'
                    }
                });
                console.log(response.data);
                setApiResponse(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [params.id]);

  return (

    <div>DisplayCategories</div>
  )
}

export default DisplayCategories
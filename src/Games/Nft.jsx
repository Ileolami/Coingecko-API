import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Nft = () => {
    const [apiResponse, setApiResponse] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)

    const navigate = useNavigate()
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending'); 
                console.log(response.data)
                setApiResponse(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, []);
    
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    const handleSelection = () => {
        const correctAnswer = apiResponse.nfts[0].id 
        setIsCorrect(correctAnswer);
        if (correctAnswer) {
            navigate("/categories");
                } else {
            navigate("/nft");
    }
    }
    return (
        <div>
            <h1>What is the top trending nfts?</h1>
            {apiResponse && apiResponse.nfts ? (
                <div>
                    <div className="btn">
                        {shuffleArray([...apiResponse.nfts]).map((nft, index) => (
                            <button key={nft.id} onClick={() => handleSelection(nft.id)}>
                                {nft.name}
                            </button>
                        ))}
                    </div>
                    {isCorrect !== null && (
                        <div>
                            {isCorrect ? (
                                <p>Congratulations! You selected the correct Nft.</p>
                            ) : (
                                <p>Sorry, that&apos;s not correct.</p>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Nft
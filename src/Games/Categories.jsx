import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
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

    const handleSelection = (id) => {
        const correctAnswer = apiResponse.categories[0].id;
        setIsCorrect(correctAnswer);
        if(id === correctAnswer) {
            navigate("/number");
        } else {
            navigate("/categories");
        }
       
    }

    return (
        <div>
            <h1>What is the top trending categories?</h1>
            {apiResponse && apiResponse.categories ? (
                <div>
                    <div className="btn">
                        {shuffleArray([...apiResponse.categories]).map((category, index) => (
                            <button key={category.id} onClick={() => handleSelection(category.id)}>
                                {category.name}
                            </button>
                        ))}
                    </div>
                    {isCorrect !== null && (
                        <div>
                            {!isCorrect ? (
                                <p>Congratulations! You selected the correct categories.</p>
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

export default Categories
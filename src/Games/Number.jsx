import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Number = () => {
    const [apiResponse, setApiResponse] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const navigate = useNavigate();

    const option = [1234, 5678, 91011, 121314, apiResponse];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/global');
                console.log(response.data);
                setApiResponse(response.data.data.active_cryptocurrencies); // Replace 1234 with a test value
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleSelection = (id) => {
       const correctAnswer = apiResponse;
       setIsCorrect(correctAnswer);
       if(id === correctAnswer) {
           navigate('/search');
       } else {
        navigate('/number');
       }
    }

    
    return (
        <div>
            <h1>What is the total active currencies?</h1>
            {apiResponse && apiResponse ? (
                <div>
                    <div className="btn">
                        {option.map((choose, index) => (
                            <button key={choose} onClick={() => handleSelection(choose)}>
                                {choose}
                            </button>
                        ))}
                    </div>
                    {isCorrect !== null && (
                        <div>
                            {!isCorrect ? (
                                <p>Congratulations!🎉 You selected the correct number.</p>
                            ) : (
                                <p>Sorry!😞 You selected the wrong number.</p>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Number;
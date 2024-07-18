import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        console.log(response.data);
        setApiResponse(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleSelection = (id) => {
   const correctAnswer = apiResponse.coins[0].item.id;
    setIsCorrect(correctAnswer);
    if (id === correctAnswer) {
      navigate("/nft");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>What is the top trending coin?</h1>
      {apiResponse && apiResponse.coins ? (
        <div >
          <div className="btn">
          {shuffleArray([...apiResponse.coins]).map((coin, index) => (
            <button key={coin.item.id} onClick={() => handleSelection(coin.item.id)}>
              {coin.item.name}
            </button>
          ))}
          </div>
          {isCorrect !== null && (
            <div>
              {!isCorrect ? (
                <p>Congratulations!🎉 You selected the correct coin.</p>
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
  );
};

export default Trending;
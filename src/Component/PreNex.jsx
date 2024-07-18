import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PaginationButtons = ({ onPrevious, onNext }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={onPrevious}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Previous
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center"
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div>
  );
};

export default PaginationButtons;
import React, { useState } from "react";

interface Props {
  steps: Array<React.ReactNode>;
}

export type { Props };

const Stepper: React.FC<Props> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handlePrevious = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const handleStepButton = (e: { preventDefault: () => void; }, index: number) => {
    e.preventDefault()
    setCurrentStep(index);
  }

  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex items-center">
            {steps.map((obj, index) => (
              <div key={index} className="flex items-center text-teal-600 relative">
                <button onClick={(e) => handleStepButton(e, index)} className={currentStep == index ? 'transition duration-500 ease-in-out h-12 w-12 w-40 border-2 border-teal-600 bg-teal-600 text-white' : 'transition duration-500 ease-in-out h-12 w-12 w-40 border-2 border-teal-600'}>
                  Step  {index + 1}
                </button>
              </div>

            ))}
          </div>
        </div>
        <div className="">
          <div>
            {steps[currentStep]}
          </div>
          <div className="flex p-2 mt-4">
            <div className="flex-auto flex flex-row-reverse">
              {currentStep < steps.length - 1 && (
                <button onClick={handleNext} className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                  hover:bg-teal-600  
                  bg-teal-600 
                  text-teal-100 
                  border duration-200 ease-in-out 
                  border-teal-600 transition">Next</button>
              )}
              {currentStep > 0 && (
                <button onClick={handlePrevious} className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                  hover:bg-gray-200  
                  bg-gray-100 
                  text-gray-700 
                  border duration-200 ease-in-out 
                  border-gray-600 transition">Previous</button>
              )}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Stepper;





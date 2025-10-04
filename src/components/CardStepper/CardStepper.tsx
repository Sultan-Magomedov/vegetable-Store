import Stepper from "../Stepper/Stepper";


    interface CardStepperProps {
      value: number;
      onChange: (value: number) => void;
    }

    const CardStepper=({ value, onChange }: CardStepperProps) =>{
      const handleQuantityChange = (newValue: number) => {
        if (newValue < 1) {
          onChange(1);
        } else {
          onChange(newValue);
        }
      };

      return (
        <Stepper value={value} onChange={handleQuantityChange} />
      );
    }

    export default CardStepper;
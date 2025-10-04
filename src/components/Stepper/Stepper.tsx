import { Group, Button, Badge } from "@mantine/core";
import "@mantine/core/styles.css";
interface StepperProps{
  value:number
  onChange:(value:number)=>void
}
function Stepper({value,onChange}:StepperProps) {
  

  const handleIncrement = () => {
    onChange(value + 1);
  };
  const handleDecrement = () => {
      onChange(value - 1);
  };

  return (
    <Group gap="0" align="center">
      <Button
        style={{ width: "26px" }}
        variant="light"
        size="compact-sm"
        color="black"
        p={0}
        onClick={handleDecrement}
      >
        -
      </Button>
      <Badge variant="white" size="md" circle color="black">
        {value}
      </Badge>
      <Button
        style={{ width: "26px" }}
        variant="light"
        size="compact-sm"
        color="black"
        p={0}
        onClick={handleIncrement}
      >
        +
      </Button>{" "}
    </Group>
  );
}

export default Stepper;

import { useState } from "react";
interface CounterAppProps {
  value: number
}

export const CounterApp = ({value}: CounterAppProps): JSX.Element => {
  
  const [counter, setCounter] = useState<number>(value);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter( counter + 1);
  }
  
  const handleSubtract = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter( counter - 1);
  }
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCounter( value );
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
    </>
  )
}

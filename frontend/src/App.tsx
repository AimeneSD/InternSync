import { useState } from "react";

function App() {
  const [value,setValue] = useState(1);

  const handleClick = () => {
    setValue(value+1);
  }
  return (

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center ">
          <p>{value}</p>
          <button onClick={handleClick} className="cursor-pointer border-2 border-black">Incrémente</button>
        </div>
      </div>
  )
}

export default App;

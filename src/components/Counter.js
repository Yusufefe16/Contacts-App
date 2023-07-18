import { useState , useEffect} from "react";

function Counter() {
    const [number,setNumber] = useState(22);

  useEffect(() => {
    console.log("Component mount edildi!");

    /* const interval = setInterval(() => {
        setNumber((n) => n + 1);
      }, 1000); */

    return () => {
     /*  clearInterval(interval); */
      console.log("Component unmount edildi");}
  }, []);
  
  return(
    <div >
        <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>Artır</button>
    </div>
  );

}

export default Counter;
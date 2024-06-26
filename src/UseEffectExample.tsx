import { useEffect, useState } from "react"

export default function UseEffectExamples(){
    const [clicks, setClicks] = useState(0);

    useEffect(()=>{
        //Executed immediately
        console.log('component loaded');
        return () => {
            {/* run before the component is destroyed */}
           console.log ('The component will be destoryed');
        }
    },[]);
    useEffect(() =>{
        document.title = `${clicks} times`;

    },[clicks])
    return(
        <>
        <h1>UseEffect Examples</h1>
        <div>
            <button onClick={()=> setClicks(clicks+1)}>
                you have clicked {clicks} times </button>
        </div>
        </>
    )
}
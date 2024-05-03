import { useEffect } from "react"

export default function UseEffectExamples(){
    useEffect(()=>{
        //Executed immediately
        console.log('component loaded');
    })
    return(
        <>
        {/* run before the component is destroyed */}
           console.log ('The component will be destoryed');
        </>
    )
}
import { useState } from "react";
import SelectNumber from "./SelectNumber";
import ProjectContent from "./ProjectContent";

export default function ConditionalsIfSeveralComponents(){
    const [selectedRate, setSelectedRate] = useState(1);

    function displayResult(){
        if(selectedRate ===1){
            return <span>Nooo!</span>
        }else if (selectedRate ===2){
            return(
                <>
                <span>Please tell us how to get better:</span>
                <input type="text" />
                </>);
            }else if (selectedRate === 3){
                return <>
                <span>thnaks</span>
                </>
            }else{
                return <span> Thank you soo much</span>
            }
    }
    return(
        <> 
        <h1>Contionals if Example</h1>
        <div> Rate this website</div>
          <SelectNumber 
          selectContent={(value) =>`select ${value}`}
          onSelected={setSelectedRate} />
          <div>
            {/* {displayResult()} */}
            <ProjectContent bottomPart={<><span>Ths is the end</span></>}>
               <button onClick={()=>console.log("i just clicked")}>Click here</button>
            </ProjectContent>
          </div>
        </>
    )
}
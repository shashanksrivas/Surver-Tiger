import React from "react";

const ChoiceComponents=(props)=>{

return (
<div id={props.id}>
<input value={props.value} onChange={(e)=>props.applyChange(e)}/>
<button onClick={(e)=>props.applyAdd(e)}>Add</button>
<button onClick={(e)=>props.applyDelete(e)}>Delete</button>
</div>
)
}

export default ChoiceComponents;

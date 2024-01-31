import React from "react";

const ConfirmPage=(props)=>{

console.log(props)
return(
<div>
<label>Which of the following apps you have on your phone?</label>
{
props.list.map((data,index)=>{
return(<div>
<input type="checkbox" key={index}  />{data.value}
<br /></div>
)}
)
}

<label>Do you have LinkedIn installed on your Phone?</label>
<div style={{display:"flex", justifyContent:"flex-start"}}>
{
props.list2.map((data,index)=>{
return(<div>
<input type="radio" /> {data.value}
<br /></div>
)}
)
}
</div>
<div style={{display:"flex", justifyContent:"center"}}>
<button>Confirm </button>
</div>
</div>
)
}

export default ConfirmPage
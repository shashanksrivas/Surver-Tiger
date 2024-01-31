import React, { useState} from "react";
import ChoiceComponents from "./ChoiceComponents"
import ConfirmPage from "./ConfirmPage"

const CreateSurvey=()=>{
const [isVisible, setIsVisible] = useState(true);
const [isVisible2, setIsVisible2] = useState(false);
const [itemlist,setitemlist]=useState([{id:1,value:""}])
const [itemlist2,setitemlist2]=useState([{id:1,value:"Yes"},{id:2,value:"No"}])
const [ispublish, setPublish]=useState(false)
const handleChange=(e)=>{
if(e.target.value==="multiselect"){
setIsVisible2(false)
setIsVisible(true)
}
else{
setIsVisible(false)
setIsVisible2(true)
}
}
const handlechange1=(e)=>{

}
const Add=(e)=>{
setitemlist(()=>[...itemlist,{id:itemlist.length+1,value:""}])
console.log(itemlist)
}

const Add2=(e)=>{
setitemlist2(()=>[...itemlist2,{id:itemlist2.length+1,value:""}])
console.log(itemlist2)
}

const update=(e)=>{
console.log(parseInt(e.target.parentElement.id))
var index=parseInt(e.target.parentElement.id)
    const newState = itemlist.map(obj => {
      if (obj.id === index) {
        return {...obj, value: e.target.parentElement.firstChild.value};
      }
      return obj;
    });
setitemlist(newState)
console.log(itemlist)
}

const Delete=(e)=>{
console.log(e.target.parentElement.firstChild.value)
setitemlist(itemlist.filter((data)=>data.id!==e.target.parentElement.id))
}

const Delete2=(e)=>{
console.log(e.target.parentElement.firstChild.value)
setitemlist2(itemlist2.filter((data)=>data.id!==e.target.parentElement.id))
}

const addQuestion=()=>{
setIsVisible(true)
setIsVisible2(false)
console.log(itemlist)
setitemlist([{id:1,value:""}]);
console.log(itemlist)
}

const publish=()=>{
setPublish(true)
}

return (
<div style={{display:"flex", justifyContent:"center"}}>
{!ispublish ?
<div>
<select onChange={(e)=>handleChange(e)}>
<option value="multiselect">Multi-Select</option>
<option value="singleselect">Single Select</option>
</select>
<br />
<br />

<input data-testid="inputText" style={{width:"400px"}} name="inputText" value={isVisible ? "Which of the following apps you have on your phone?":"Do you have LinkedIn installed on your phone?"} onKeyPress={(e)=>handlechange1(e)} ></input>
<br />
{(isVisible ||isVisible2) && "options"}
{
isVisible &&
itemlist.map((data,index)=>{
console.log(data.value)
return (
<ChoiceComponents key={index} id={data.id} value={data.value} applyChange={update} applyAdd={Add} applyDelete={Delete}/>
)
})
}


{
isVisible2 && itemlist2.map((data,index)=>{
return (
<ChoiceComponents key={index} value={data.value} applyAdd={Add2} applyDelete={Delete2}/>
)
})
}

{
((isVisible && itemlist.length===4) || (isVisible2 && itemlist2.length===2 )) && <div>
<button onClick={()=>addQuestion()}>Add Question</button>
<button onClick={()=>publish()}>Publish</button>
</div>
}
</div>
: <ConfirmPage list={itemlist} list2={itemlist2}/>}
</div>
)
}

export default CreateSurvey;
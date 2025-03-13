import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {List} from './Todolist'
import {Add} from './ADDTODO'
// localStorage.clear()

const Todo=()=>{
    const [count,setcount]=useState("")
    const news=new Date()
    const [settask,updatetask]=useState(()=>[])
const [setdate,updateddate]=useState("")
useEffect(()=>{
let stored=[]
for(let k=0;k<localStorage.length;k++){
  let rty=localStorage.key(k)
  let tr=localStorage.getItem(rty)
  stored.push(tr);
}
updatetask(stored)
},[])

      const handleupdate=(value)=>{
        localStorage.setItem(`${count}`,`${count}`)
setcount("")
if(count===""){
    return;
}
if(settask.includes(count)){
    return;
}
        updatetask((prev)=>[...prev,count])
    }
    useEffect(() => {
        const interval = setInterval(() => {
          updateddate(new Date().toLocaleTimeString()); // Update time every second
        }, 1000);
    
        return () => clearInterval(interval); // Clean up interval
      }, []);
      const clearall=()=>{
         updatetask([])
      }
    const handledelete=(event)=>{
     let rting=document.getElementById('good')
     let rting2=rting.parentElement.parentElement.firstChild
     localStorage.removeItem(rting2.textContent)
     console.log(rting2.textContent)
      const item= settask.filter((curr)=>curr!==rting2.textContent)
      updatetask(item)
      
    }
 
return(
    <>
  <Add data={news} first={setdate} second={setcount} third={count} handleupdates={handleupdate}/>
<div class="flex justify-center mr-4 mt-3">
<div class="">
{settask.map((curr,index)=>{
    return(
<List key={index} data={curr} onhandledelete={handledelete}/>
    )
})}
</div>
</div>
<div class="flex justify-center mt-2">
<div><button style={{backgroundColor:" rgb(205, 182, 47)",color:"white"}} onClick={clearall}>Clear Now</button></div>
</div>
</>
)
}
export default Todo
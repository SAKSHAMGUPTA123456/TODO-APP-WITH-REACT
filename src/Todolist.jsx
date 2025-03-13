import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
export const List=({curr,data,onhandledelete})=>{
  const handletext=(event)=>{
let rtx=document.getElementById('hacking')
const perfecting=event.target.parentElement.parentElement.parentElement.parentElement.firstChild
console.log(perfecting)
if(perfecting.style.textDecoration=="none"){
  perfecting.style.textDecoration="line-through"
}
else{
  perfecting.style.textDecoration="none"
  }
}
  
        return(
            <>
          <div style={{backgroundColor:"white",width:"240px",borderRadius:"30px",}} class="mt-4 flex justify-between" >
          <div style={{wordWrap:"break-word",width:"50px"}} class="ml-2">{data}</div>
          <div><button style={{backgroundColor:"green",width:"20px",borderRadius:"20px",height:"20px"}} class="mt-2"><IoIosArrowDropdownCircle style={{color:"white"}} onClick={(event)=>handletext(event)} id="hacking"/></button></div>
          <div><button style={{backgroundColor:"red",width:"20px",borderRadius:"20px",height:"20px"}} class="flex justify-center mt-2"  id="good"onClick={()=>onhandledelete(data)}><MdDeleteForever style={{color:"white"}}/></button></div>
         
          </div>
         
          </>
        )
}

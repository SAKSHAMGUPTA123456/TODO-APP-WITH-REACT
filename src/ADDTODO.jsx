export const Add=({data,first,second,third,handleupdates})=>{
    return(
        <>
          <div class="flex justify-center mt-8">
<div style={{color:"white"}}><h1 style={{fontSize:"50px"}} >TODO APP</h1></div>
</div>
<div class="flex justify-center">
<div style={{color:"white"}}>{data.toLocaleDateString()}</div>
<div style={{color:"white"}} class="ml-2">{first}
</div>
</div>

<div class="flex justify-center">
    <div><div><input type="text" style={{borderRadius:"30px",height:"50px"}} onChange={(event)=>second(event.target.value)} value={third}></input></div></div>
    <button style={{backgroundColor:"blue",color:"white",borderRadius:"30px"}} onClick={()=>handleupdates(third)}>ADD TODO</button>
</div>
        
        </>
    )
}
function Card({img,desc,placeName,whenToVisit,price,ratings}){
    return(
      <>
     <div className="border w-[250px] p-3 m-auto rounded-xl" onClick={()=>
        alert(`Welcome to ${placeName} !!`)
     } >
     
       <div className="relative">
       <div className="flex justify-end mt-0 absolute right-1 top-1">
                <div className="border-0 rounded-lg w-16  bg-orange-100 text-orange-800 text-center">
       <p>{ratings}</p> 
     </div>
            </div>
       <img className="rounded-lg" src={img}/>
       {/* condiional rendering */}
       {
        price>=12000 ?   <div className="absolute  m-2 border-0 rounded-xl px-3 py-[2px] bg-blue-800 text-sm text-neutral-100 bottom-3 left-2"> Expensive</div> :  <div className="absolute  m-2 border-0 rounded-xl px-3 py-[2px] bg-blue-800 text-sm text-neutral-100 bottom-3 left-2"> Cheapest</div> 
      
       }    
     
       </div>
        <div className="flex justify-between items-center">
                    <p className="mt-2 text-lg text-neutral-900 font-semibold">{placeName}</p>
                    <span className={whenToVisit=='Winter' ? 'h-2 w-2 rounded-full bg-green-600' : "h-2 w-2 rounded-full bg-red-600"}></span>
                </div>
                <p className=" text-sm  font-sans text-neutral-600">{desc}</p>
               
                    </div> 
      </>
    )
  }
  export default Card;  
  
  
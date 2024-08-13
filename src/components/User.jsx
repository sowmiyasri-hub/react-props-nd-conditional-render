function User({name, profession, image}){
    return(
      <>
      <div className=" w-[400px] flex justify-between items-center px-5 py-2 bg-white mx-auto rounded-lg mt-5">
      <div className="flex gap-4 items-center "> 
                        <img src={image} className="h-14 w-14 object-cover rounded-full" alt="" />
                    <div>
                        <p className="m-0">{name}</p>
                        <p className=" m-0 text-sm">{profession}</p>
                    </div>
                </div>
                <button className="">Follow</button>
            </div>
       
    
    
      </>
    )
  }
  export default User; 
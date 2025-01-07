import React from 'react'

export default function Home() {

    let n=10;
    let m=20;
    let w="welcome";

    let status=true;

    let numArray=[10,20,30,40,50,60,70,80,90,100];
   let myFilterArray= numArray.filter((item)=>item<50)
    let l=["ram","shyam","hari","sita","gita","rita"];

    let myData=l.map((item,index)=><h4> {index+1} {item} </h4>)





  return (
    <div>

        {myData}

        { status ?
             <p>Welcome to ws</p>

             :
             ''
    
    
    
        }

        { status &&  <p>Welcome to ws</p>}
        <div>
            {
                l.map((item,index)=>{
                   return(<div> {index+1}  {item}</div>)
                })
            }
        </div>


        {l.map((item,index)=><div> {index+1} {item} </div> )}

        <h1>{w}  {n+m} </h1>

        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem praesentium ullam temporibus odio vitae dolores at cum, dolor libero distinctio aut quod. Dolore veritatis placeat ratione repudiandae, sapiente vero reprehenderit?</p>

        {myFilterArray.map((item)=><h4>{item}</h4>)}
    </div>
  )
}

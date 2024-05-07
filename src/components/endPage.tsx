import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { BeatLoader, BounceLoader, CircleLoader, ClockLoader, PacmanLoader, SyncLoader, MoonLoader, PuffLoader, RingLoader, DotLoader, ScaleLoader,BarLoader } from "react-spinners";

export function EndPage(){
    const[visible,setVisible]= useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setVisible(false)
        },5000)
    },[])
    return (
        <div className='flex justify-center items-center h-[100vh] flex-col'>
          {visible?<div className='flex gap-3 items-center'>
            <h1>Your form is submitted... please Wait</h1><BeatLoader size={15}/>
          </div>:<></>}  
           {!visible?<div className="p-5">
            <h1>do u still want to continue???</h1>
            <div className='flex justify-center p-5'>
            <Button className="border-2 border-black hover:bg-yellow-300" type="button">
                <Link to={'/translate'}>Go to</Link>
            </Button>
            </div>
          </div>:<></>} 
        </div>
    )
}
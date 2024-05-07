import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BeatLoader, BounceLoader, CircleLoader, ClockLoader, PacmanLoader, SyncLoader, MoonLoader, PuffLoader, RingLoader, DotLoader, ScaleLoader } from "react-spinners";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import   DialogDemo  from "./alertpopup";
export function Funtransalation(){

    const [textValue, setTextValue] = useState("")
    const [translatedText, setTranslatedtext] = useState("")
    const [isvisible,setVisible] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [isAlert, setAlert] = useState(false)
    var serverUrl = "https://api.funtranslations.com/translate/minion.json";
    let navigate = useNavigate();
    const onclickBtn = ()=>{
        // console.log("inside")
        // setLoaded(true)
        // axios.get(serverUrl + "?" + "text=" + textValue).then((response:any)=>{
        //     console.log(response)
        //     setVisible(true)
        //     setLoaded(false)
        //     setTranslatedtext(response?.data.contents.translated.toString())
        // }).catch((err:Error)=>{
        //     console.log(err,"err......")
        //     setVisible(true)
        //     setLoaded(false)
        //     setTranslatedtext("Unable to fetch data from api")
        // })
        setAlert(true)

    }
    const submit = ()=>{
        console.log("inside close ")
        setAlert(false)
    }
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoaded(true)
    //     },7000)
    //     // setTimeout(()=>{
    //     //     window.location.reload();
    //     // },10000)
    // },[])
    if(isvisible){
        return(
            <div>
                {loaded?<div className="flex items-center h-[100vh] justify-center"><PacmanLoader size={15}></PacmanLoader></div>:<div className="flex items-center h-[100vh] justify-center flex-col">
                <h1 className="uppercase animate-animate-pulse-slow text-red-500 text-center">{translatedText}</h1>
               </div>}
            </div>
            )
    }

    return(
        <div className="flex items-center h-[100vh] justify-center flex-col">
            <div className="border-2 border-gray-300 p-5 animate-bounce-slow bg-gradient-to-r from-gray-200 to-slate-300 rounded-full">
            <h1 className="uppercase animate-animate-pulse-slow text-red-500 text-center">Fun Translation</h1>
            <div className="p-5">
            <Input className="hover:bg-blue-100 rounded-lg text-center bg-blue-200" type="text" placeholder="Enter your text" onChange={(e)=>{
                setTextValue(e.target.value.trim())
            }} />
            </div>
            <div className="flex justify-center">
                <Button className="border-2 border-black" type="button" onClick={onclickBtn}> <span className="animate-animate-pulse-slow text-blue-500">Translate</span></Button>
              </div>
            </div>
            {isAlert? <DialogDemo onClose={submit}/>:<></>}
        </div>
    )
}
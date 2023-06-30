import React from 'react'
import { useState,useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";
import Replicate from "replicate";

export default function Home2() {
    const [ai,setAI] = useState()
    const replicate = new Replicate({
        auth: process.env.REACT_APP_REPLICATE_API_TOKEN,
      });
    const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    const input = { prompt: "an astronaut riding a horse on mars, hd, dramatic lighting, detailed" };
    
    const completion = async() => {
        setAI(await replicate.run(model, { input }))
        return ai
    }
    const handleClick = () => {
        completion()
    }
    useEffect(() => {
    },[])

    return(
        <div><button onClick={handleClick}>Hello</button>
        <div><img className='aiImage' src={ai} alt="hello" /></div>
        </div>
    )

}
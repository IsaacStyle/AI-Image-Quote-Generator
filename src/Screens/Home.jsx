import React from 'react'
import { useState,useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";

export default function Home() {
    const [ai,setAI] = useState()
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
    const openai = new OpenAIApi(configuration);
    const completion = async() => {
        const complete = await openai.createImage({
            prompt: "A dog playing in the snow",
            n: 1,
            size: "512x512"
    })
      setAI(complete.data.data[0].url)
      return complete.data.data[0].url
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
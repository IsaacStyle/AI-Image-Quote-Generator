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
            prompt: `A snowy mountain with a flag above`,
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
        <div>
        <div><img className='aiImage' style={{border:'solid'}} src={ai || "https://i.gifer.com/3H9v.gif"} alt="hello" /></div>
        <button onClick={handleClick}>Hello</button>
        </div>
    )

}
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
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024"
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
        <div><img src={ai} alt="hello" /></div>
        </div>
    )

}
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
    const handleClick = (e) => {
        e.preventDefault();
        completion()
    }
    useEffect(() => {
    },[])

    return(
        <div>
        <div className='imageBox'><img className='aiImage' style={{border:'solid'}} src={ai || "https://i.gifer.com/3H9v.gif"} alt="hello" /></div>
        <form className='createForm' onSubmit={handleClick}>
            <input
            type="text"
            className='inputs'
            placeholder="Describe the image you would like to generate."
            name="prompt"
            // value={}
            // onChange={handleChange}
            />
            <input
            type="text"
            className='inputs'
            placeholder="What quote would you like?"
            name="quote"
            />
            <button className='inputs' id='button1' type='submit'>Generate!</button>
        </form>
        </div>
    )

}
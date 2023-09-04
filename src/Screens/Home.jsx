import React from 'react'
import { useState,useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";

export default function Home() {
    const [ai,setAI] = useState()
    const [prompt2,setprompt2] = useState('')
    const [quote2,setQuote2] = useState('')
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
    const openai = new OpenAIApi(configuration);
    const completion = async() => {
        const complete = await openai.createImage({
            prompt: prompt2,
            n: 1,
            size: "512x512"
    })
      setAI(complete.data.data[0].url)
      setprompt2('')
      setQuote2('')
    }
    const handleClick = (e) => {
        e.preventDefault();
        completion()

    }
    const handleChange = (e) => {
        const { value, name } = e.target;
        setprompt2(value);
      };
    useEffect(() => {
    },[])
    const handleChange2 = (e) => {
        const { value, name } = e.target;
        setQuote2(value);
      };
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
            value={prompt2}
            onChange={handleChange}
            />
            <input
            type="text"
            className='inputs'
            placeholder="What quote would you like?"
            name="quote"
            value={quote2}
            onChange={handleChange2}
            />
            <button className='inputs' id='button1' type='submit'>Generate!</button>
        </form>
        </div>
    )

}
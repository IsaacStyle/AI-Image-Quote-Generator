import React from 'react'
import { useState,useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";

export default function Home2() {
    const [ai,setAI] = useState()
    const [image, setImage] = useState('');
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
      return complete.data.data[0].url
    }

    const handleClick = async (e) => {
      e.preventDefault();
    
      // Assuming completion() is an async function, await it
      await completion();
    
      // Load the image from the 'ai' source
      const img = new Image();
      img.src = ai;
      
      img.onload = () => {
        // Create a canvas element and get its 2D context
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the image on the canvas
        context.drawImage(img, 0, 0);
        
        // Add text overlay
        context.font = '30px Arial';
        context.fillStyle = 'white';
        context.fillText(quote2, 20, 40); // Adjust text position as needed
        
        // Convert the canvas to a data URL with JPEG format
        const dataURL = canvas.toDataURL('image/jpeg');
        console.log(img)
        console.log(dataURL)
    
        // Assuming 'setImage' is a function to set the image data URL, you should use it like this:
        setImage(dataURL);
      };
    };

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

    return(
        <div>
        <div className='imageBox'>
          <img className='aiImage' style={{border:'solid'}} src={image || "https://i.gifer.com/3H9v.gif"} alt="hello" />
          {/* <p className='quote'></p> */}
        </div>
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
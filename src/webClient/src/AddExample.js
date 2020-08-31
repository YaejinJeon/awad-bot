import React, { useState} from 'react'
import axios from 'axios';

export default ({cardId}) => {

  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(``, {
      content
    });

    setContent('');

  };
  return ( 
  <div>
      <form onSubmit = { onSubmit} >
      <div className = "formBox" >

      <label > Examples </label>  

      <input 
        value = {content }
        onChange = { e => setContent(e.target.value) }
        className = "inputForm" 
      />

      </div> 
      < button className = "btn right" > Add </button> 
      </form>

      </div> )
      };
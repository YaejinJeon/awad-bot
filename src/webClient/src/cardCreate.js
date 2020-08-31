import React, {useState} from 'react';
import axios from 'axios';

export default()=>{
  
  const [word, setWord] = useState('')
  const [meaning, setMeaning] = useState('')

  const onAdd = async (e) => {
    e.preventDefault();
    await axios.post();

    setWord(''); //비우기
    setMeaning('');

  }

  return (
    <div>
      <form onSubmit = {onAdd}>
        <div className = "formBox">
          <label>Word</label>
          <input 
          value = {word} 
          onChange ={ e => setWord(e.target.value)}
          className = "inputForm"
          />
          <label>Meaning</label>
          <input 
          value = {meaning} 
          onChange ={ e => setMeaning(e.target.value)}
          className = "inputForm"
          />
        </div>
        <button className = "btn right">Add</button>

      </form>

    </div>
  )

}
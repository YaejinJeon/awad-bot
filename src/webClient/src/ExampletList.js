import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default ({cardId}) => {

  const [examples, setExamples] = useState([]); //example 배열

  const fetchData = async () => {
    const res = await axios.get(``);
    setExamples(res.data);

  };

  useEffect(() => {
    fetchData();

  }, []);

  const renderedExamples = examples.map( e => {
    return <li key = {e.id} > {e.content} </li>;

  } );

  return <ul> {renderedExamples} </ul>;

}
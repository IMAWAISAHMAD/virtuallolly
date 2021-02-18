import React,{useState,useEffect} from 'react';   
import Lollies from '../components/Lollies'; 
import Header from '../components/Header';
import {Link} from 'gatsby';
import axios from 'axios';

export default () => {    
  const [lollies,setLollies] = useState()
  const [loading,setLoading] = useState(false)
  useEffect(() => {
      axios("/api/get-lollies").then(result => {
        if (result.status !== 200) {
          console.error("Error loading lollies");
          console.error(result);
          return;
        }
        setLollies(result.data.lollies);
        setLoading(true);
      });
    }, [loading]);
  
  return (
    <div  style={{textAlign:'center'}}>    
      <Header/>
      <h1>Virtuallolly...</h1>
      {loading ?  <Lollies data={lollies}/> : <h1>Loading....</h1> }
      <Link to={'/create'}>Send Virtual Lolly To Friends</Link>
    </div>        
  )    
}
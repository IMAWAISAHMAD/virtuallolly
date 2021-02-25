import React,{useEffect,useState} from "react";
import LollyTemplate from '../components/LollyTemplate';
import axios from 'axios';
import {Spinner} from 'theme-ui';

export default (props) => {

  const[data,setData] = useState();
  const [loading,setLoading] = useState(false);
  const refId = props.location.search;
  const path = refId.slice(4, 25)

  useEffect(()=>{
    const getData=async()=>{
      await axios(`/lolly/${path}`).then(res=>{
        if (res.status !== 200) {
          console.error("Error Finding lolly");
          console.error(res);
          return;
        }
        const response  = res.data.lollyByPath[0];
        setData(response);
        setLoading(true);
    })
    
  }
  getData();
  
},[])
  
  return (
    <>
      {loading ? <LollyTemplate data={data}/> :<div style={{textAlign:'center'}}><Spinner/></div> }  
    </>
  );
};
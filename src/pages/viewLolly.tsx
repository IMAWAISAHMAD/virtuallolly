import React,{useEffect,useState} from "react";
import LollyTemplate from '../components/LollyTemplate';
import axios from 'axios';
export default (props) => {
  const[data,setData] = useState();
  const [loading,setLoading] = useState(false);
  const refId = props.location.search;
  const path = refId.slice(4, 25)
  console.log('LollyPath: ',path);
  useEffect(()=>{
    const getData=async()=>{
      await axios(`/lolly/${path}`).then(res=>{
        if (res.status !== 200) {
          console.error("Error Finding lolly");
          console.error(res);
          return;
        }

        console.log(res.data.lollyByPath[0]);
        const response  = res.data.lollyByPath[0];
        setData(response);
        setLoading(true);
    })
    
  }
  getData();
},[])
  
  return (
    <>
      {loading ? <LollyTemplate data={data}/> : <div>Loading....Please Wait...</div> }  
    </>
  );
};
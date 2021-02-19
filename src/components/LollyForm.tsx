import React,{useState,useRef} from 'react'
import Lolly from './Lolly'
import axios from 'axios'
export default function CreateLolly() {

    const [flavourTop,setFlavourTop] = useState('#d52358');
    const [flavourMiddle,setFlavourMiddle] = useState('#e95946');
    const [flavourBottom,setFlavourBottom] = useState('#deaa43');
    const recipientRef = useRef();
    const messageRef = useRef();
    const senderRef = useRef();
    const handleSubmit = async () => { 
        console.log('Handle submit function called');
        console.log('Recipient Name: ', recipientRef.current.value);
        console.log('Message Name: ', messageRef.current.value);
        console.log('Sender Name: ', senderRef.current.value);
        const lolly = {
            flavourTop,
            flavourMiddle,
            flavourBottom,
            recipientName:recipientRef.current.value,
            message:messageRef.current.value,
            senderName:senderRef.current.value
        } 
        console.log(lolly);
        await axios.post('/new',lolly);
    }
    return (
        <div>
            <Lolly flavourTop={flavourTop} flavourMiddle={flavourMiddle} flavourBottom={flavourBottom}/>
           <form name="new-lolly" /* action="/api/create-lolly" method="POST" */>
           
            <input required type="color" id="flavourTop" name="flavourTop" value={flavourTop} onChange={(e)=>setFlavourTop(e.target.value)}/>
            <input required type="color" id="flavourMiddle" name="flavourMiddle" value={flavourMiddle} onChange={(e)=>setFlavourMiddle(e.target.value)}/>
            <input required type="color" id="flavourBottom" name="flavourBottom" value={flavourBottom} onChange={(e)=>setFlavourBottom(e.target.value)}/>

           
            <label htmlFor="recipientName">To</label>
            <input required type="text" id="recipientName" name="recipientName" ref={recipientRef} />

            <label htmlFor="message">Say something nice</label>
            <textarea  required name="message" id="message" cols={30} rows={10} ref={messageRef}></textarea>

            <label htmlFor="sendersName">From</label>
            <input  required type="text" id="sendersName" name="sendersName" ref={senderRef}/>

           
            <input type="button" value="Freeze this lolly and get a link" onClick={handleSubmit}/>

            </form>
        </div>
    )
}

import React from 'react'
import Lolly from './Lolly'
import {nanoid} from 'nanoid'
export default function Lollies({data}) {
  console.log(data);
    return (
        <div>
          {data.map(lolly=>(
            <span key={nanoid()} style={{marginLeft:50}}>
              <Lolly flavourTop={lolly.flavourTop} flavourMiddle={lolly.flavourMiddle} flavourBottom={lolly.flavourBottom}/>
            </span>
          ))}
        </div>
    )
}

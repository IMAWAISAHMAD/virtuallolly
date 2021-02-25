import React from 'react'
import {Text} from 'theme-ui'

export default function Header() {
    return (
        <div style={{textAlign:"center"}}>
          <Text
          sx={{
            fontSize: 25,
            fontFamily: "Yellowtail",
            color: "black",
            textShadow: "#e0f 0 0 8px",
            textAlign: "center",
          }}
          >
          <h1>Virtual Lolly</h1> 
          <p>Because we all know someone who deserves some sugar.</p>
          </Text>
        </div>
    )
}

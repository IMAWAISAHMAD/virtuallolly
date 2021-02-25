import React from 'react'
import Header from '../components/Header'
import Lolly from '../components/Lolly'
import {Text} from 'theme-ui'
export default function melted() {
    return (
        <div style={{textAlign:'center'}}>
            <Header/>
            <Text
            sx={{
                fontSize: 25,
                fontFamily: "Yellowtail",
                color: "black",
                textShadow: "#e0f 0 0 8px",
                textAlign: "center",
            }}
            >
            Ummm. We don't know. Maybe it melted?
            Knock knock. Who's there? 404.
            </Text>
            <br/>
            <Lolly
            flavourTop=""
            flavourMiddle=""
            flavourBottom=""
            />   
        </div>
    )
}

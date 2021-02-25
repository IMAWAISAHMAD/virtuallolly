import React from "react";
import  Header  from "../components/Header";
import Lolly from "../components/Lolly";
import { Button } from "theme-ui";
import { Link } from "gatsby";

export default () => {
  return (
    <div style={{ margin: "40px 0px" }}>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Lolly
          flavourTop="#a3ba57"
          flavourMiddle="#8e947b"
          flavourBottom="#36382f"
        />
        <Lolly
          flavourTop="#d6d627"
          flavourMiddle="#919114"
          flavourBottom="#424205"
        />
        <Lolly
          flavourTop="#f28507"
          flavourMiddle="#e8b982"
          flavourBottom="#362716"
        />
        <Lolly
          flavourTop="#1e07ed"
          flavourMiddle="#0e0657"
          flavourBottom="#030114"
        />
        <Lolly
          flavourTop="#ab05f2"
          flavourMiddle="#4c046b"
          flavourBottom="#240233"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Button
          as={Link}
          to="/createLolly"
          sx={{
            fontSize: 20,
            fontFamily: "Yellowtail",
            color: "white",
            backgroundColor:"black",
            borderRadius: "20px",
            textShadow: "#e0f 0 0 8px",
            textAlign: "center",
            padding:15
          }}
        >
          Make a new lolly to send to a friend
        </Button>
      </div>
    </div>
  );
};
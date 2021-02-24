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
          flavourTop="#d52358"
          flavourMiddle="#e95946"
          flavourBottom="#deaa43"
        />
        <Lolly
          flavourTop="#d52358"
          flavourMiddle="#e95946"
          flavourBottom="#deaa43"
        />
        <Lolly
          flavourTop="#d52358"
          flavourMiddle="#e95946"
          flavourBottom="#deaa43"
        />
        <Lolly
          flavourTop="#d52358"
          flavourMiddle="#e95946"
          flavourBottom="#deaa43"
        />
        <Lolly
          flavourTop="#d52358"
          flavourMiddle="#e95946"
          flavourBottom="#deaa43"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Button
          as={Link}
          to="/createLolly"
          sx={{
            boxShadow: "0px 0px 12px",
            borderRadius: "20px",
            backgroundColor:'orange',
            fontWeight:'bold',
            fontSize:'16'
          }}
        >
          Make a new lolly to send to a friend
        </Button>
      </div>
    </div>
  );
};
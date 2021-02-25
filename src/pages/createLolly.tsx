import React,{useState} from 'react'
import Header from '../components/Header'
import Lolly from '../components/Lolly'
import axios from 'axios'
import {navigate} from 'gatsby'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { Label, Input, Textarea, Box, Button } from "theme-ui";

interface MyFormValues {
    recipientName: string;
    message: string;
    senderName: string;
}

const lollySchmema = Yup.object().shape({
    recipientName: Yup.string()
        .min(5, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    senderName: Yup.string()
        .min(5, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
   
  });

export default () => {

    const initialValues:MyFormValues= { recipientName: "", message: "", senderName: "" };
    const [flavourTop,setFlavourTop] = useState('#d52358');
    const [flavourMiddle,setFlavourMiddle] = useState('#e95946');
    const [flavourBottom,setFlavourBottom] = useState('#deaa43');

    const createLolly = async (values) => { 
        console.log(values);
        const {recipientName,message,senderName} = values;
        const lolly = {
            flavourTop,
            flavourMiddle,
            flavourBottom,
            recipientName,
            message,
            senderName,
        } 
        console.log(lolly);
        await axios.post('/new',lolly).then(res=>{
        if (res.status !== 200) {
            console.error("Error Finding lolly");
            console.error(res);
            return;
            }
        const {lollyPath}  = res.data.lollyByPath[0];
        navigate(`/viewLolly?id=${lollyPath}`)
        });
    }
    return (
    <div style={{ margin: "40px 0px" }}>
      <Header />
      <div
        style={{
          marginTop: "50px",
        }}
      >
            <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "95%",
                margin: "0 auto",
            }}
            >
                <Lolly
                    flavourTop={flavourTop}
                    flavourMiddle={flavourMiddle}
                    flavourBottom={flavourBottom}
                />
                <div>
                    <input
                    type="color"
                    name="flavourTop"
                    id="flavourTop"
                    value={flavourTop}
                    style={{ margin: "30px 0"}}
                    onChange={(e) => {
                        setFlavourTop(e.target.value);
                    }}
                    />
                    <br />
                    <input
                    type="color"
                    name="flavourMiddle"
                    id="flavourMiddle"
                    value={flavourMiddle}
                    style={{ margin: "30px 0"}}
                    onChange={(e) => {
                        setFlavourMiddle(e.target.value);
                    }}
                    />
                    <br />
                    <input
                    type="color"
                    name="flavourBottom"
                    id="flavourBottom"
                    value={flavourBottom}
                    style={{ margin: "30px 0" }}
                    onChange={(e) => {
                        setFlavourBottom(e.target.value);
                    }}
                    />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={lollySchmema}
                    onSubmit={(values, { resetForm }) => {
                    resetForm({
                        values: { recipientName: "", message: "", senderName: ""  },
                    });
                    console.log(values);
                    createLolly(values);

                    }}
                >
                {({ values, touched, errors, handleChange, handleSubmit }) => (
                    <Box
                    as="form"
                    sx={{
                    margin: "0px 30px",
                    padding: "20px 70px",
                    width: "500px",
                    }}
                    onSubmit={handleSubmit}
                    >
                    <Label htmlFor="recipientName">To</Label>
                    <Input
                    type="text"
                    name="recipientName"
                    id="recipientName"
                    mb={3}
                    value={values.recipientName}
                    onChange={handleChange}
                    />
                    {touched.recipientName && errors.recipientName ? (
                    <p
                    style={{
                    fontSize: "15px",
                    color: "red",
                    textAlign: "center",
                    }}
                    >
                    {errors.recipientName}
                    </p>
                    ) : null}
                    <Label htmlFor="message">Say Something Nice</Label>
                    <Textarea
                    type="text"
                    name="message"
                    id="message"
                    rows="6"
                    mb={3}
                    value={values.message}
                    onChange={handleChange}
                    />
                    {touched.message && errors.message ? (
                    <p
                    style={{
                    fontSize: "15px",
                    color: "red",
                    textAlign: "center",
                    }}
                    >
                    {errors.message}
                    </p>
                    ) : null}
                    <Label htmlFor="senderName">From</Label>
                    <Input
                    type="text"
                    name="senderName"
                    id="senderName"
                    mb={3}
                    value={values.senderName}
                    onChange={handleChange}
                    />
                    {touched.senderName && errors.senderName ? (
                    <p
                    style={{
                    fontSize: "15px",
                    color: "red",
                    textAlign: "center",
                    }}
                    >
                    {errors.senderName}
                    </p>
                    ) : null}
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Button
                    type="submit"
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
                    Freeze this lolly and get a link
                    </Button>
                    </div>
                    </Box>
                )}
                 </Formik>
            </Box>
        </div>
    </div>
    )

}

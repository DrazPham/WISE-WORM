import React, { useState,useRef } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const ContactForm = () => {
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://script.google.com/macros/s/AKfycbyN5eL-b8Yqfh9z3u2-vwuAgwYGfvuWb820aYhAcSCislQxJIBb0AnoirP5kOXAKQ39/exec", {
            method: 'POST',
            body: new FormData(formRef.current),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert(data.msg);
            })
            .catch(err => console.log(err));
    };
    return (
        <Container style={{backgroundColor:"white",border:"1px solid black",padding:"20px",borderRadius:"10px" }}>
            <Form  ref={formRef} onSubmit={handleSubmit}>
                <h3>Hãy chia sẻ cho chúng mình câu chuyện của bạn!</h3>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label style = {{fontWeight:"bold"}}>Tên của bạn</Form.Label>
                    <Form.Control type="text" name="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Description">
                    <Form.Label style = {{fontWeight:"bold"}}>Câu chuyện</Form.Label>
                    <Form.Control style = {{fontWeight:"bold"}} as="textarea" rows={3} name="Message" required />
                </Form.Group>
                <Button style={{ float: "right" }} variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};
export default ContactForm;
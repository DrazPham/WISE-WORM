import React, { useState, useRef } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

const ContactForm = () => {
    const formRef = useRef(null);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Message: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

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
        <Container style={{ 
            padding: "20px",
            borderRadius: "10px",
            margin: "0 12px",
            display:"flex",
            justifyContent:"center",
            }}>
            <Button variant="primary" onClick={handleShow}>
                Chia sẻ câu chuyện
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hãy chia sẻ cho chúng mình câu chuyện của bạn!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label style={{ fontWeight: "bold" }}>Tên của bạn</Form.Label>
                            <Form.Control type="text" name="Name" value={formData.Name} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Label style={{ fontWeight: "bold" }}>Câu chuyện</Form.Label>
                            <Form.Control style={{ fontWeight: "bold" }} as="textarea" rows={3} name="Message" value={formData.Message} onChange={handleChange} required />
                        </Form.Group>
                        <Button style={{ float: "right" }} variant="success" type="submit">
                            Gửi
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ContactForm;

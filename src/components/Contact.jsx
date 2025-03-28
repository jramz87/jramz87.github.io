import React, { useState, useRef } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        
        setValidated(true);
        setLoading(true);
        
        // EmailJS configuration
        // EmailJS configuration using environment variables
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        
        // Prepare template parameters
        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString() // Current time for the {{time}} parameter
        };
        
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus({
                    submitted: true,
                    success: true,
                    message: 'Your message has been sent successfully!'
                });
                setFormData({ name: '', email: '', message: '' });
                setValidated(false);
            })
            .catch((error) => {
                console.error('Email send error:', error.text);
                setStatus({
                    submitted: true,
                    success: false,
                    message: 'There was an error sending your message. Please try again later.'
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact">
            <h2>Get In Touch</h2>
            <Container>
                {status.submitted && (
                    <Alert variant={status.success ? "success" : "danger"}>
                        {status.message}
                    </Alert>
                )}
                
                <Form 
                    className="contact-form" 
                    noValidate 
                    validated={validated} 
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide your name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="form-group">
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button 
                        type="submit" 
                        className="btn" 
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                {' '}Sending...
                            </>
                        ) : 'Send Message'}
                    </Button>
                </Form>
            </Container>
        </section>
    );
}

export default Contact;
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"
// component handles add operation of new speaker, contains add button and modal component 
export function AddSpeaker({ insertRecord }) {
    const [show, setShow] = useState(false);
    const formData = {};
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        // Temporary hardcoded
        const speakerData = {
            ...formData, sessions: [
                {
                    id: "1011",
                    title: "Decomposing applications for scalability and deployability",
                    eventYear: '2019',
                    room: {
                        name: "4306",
                        capacity: 100,
                    },
                }
            ],
        }
        insertRecord(speakerData, handleClose)
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Speaker
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="fistName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="add first name" onChange={(e) => formData['first'] = e.target.value} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="add last name" onChange={(e) => formData['last'] = e.target.value} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="organization">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control type="text" placeholder="add organization" onChange={(e) => formData['company'] = e.target.value} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Session Date</Form.Label>
                            <Form.Control type="date" placeholder="date" onChange={(e) => formData['sessionYear'] = e.target.value} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bio" onChange={(e) => formData['bio'] = e.target.value}>
                            <Form.Label>Bio </Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
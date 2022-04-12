import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"

export function AddSpeaker({ insertRecord }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (speakerData) => {
        console.log(speakerData.currentTarget)
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
                            <Form.Control type="text" placeholder="add first name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="add last name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="organization">
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control type="text" placeholder="add organization" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Session Date</Form.Label>
                            <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bio">
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
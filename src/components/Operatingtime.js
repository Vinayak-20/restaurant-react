import React from 'react'
import { useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
// import

function Operatingtime({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Operatinghours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Workingtime</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item >Monday | {timedata.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday | {timedata.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wenesday| {timedata.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday| {timedata.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday|   {timedata.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday| {timedata.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Sunday| {timedata.Sunday}</ListGroup.Item>


                    </ListGroup>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Operatingtime
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Country.css';

const Country = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, capital, flag, population, region } = props.country;

    console.log(props);
    return (
        <div className="card-style">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <h4>Capital: {capital}</h4>
            <Button className="btn-style" variant="primary" onClick={handleShow}>
                DETAILS
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Country Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, Finally You find All the Details!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    );
};

export default Country;
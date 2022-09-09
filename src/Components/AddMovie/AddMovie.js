import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

const AddMovie = ({add}) => {
    const [show, setShow ] = useState (false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //initialState
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

//update state
const handleTitle = (e) => {
setTitle(e.target.value)
}
const handleDescription = (e) => {
    setDescription(e.target.value)
}

const handleRate = (e) => {
    setRate(e.target.value)
}

const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value)

} 

//function add movie

const handleAdd = (e) => {
  let newMovie = {title, description, rate, posterUrl}
  add(newMovie)
}
  
        return ( 
    <div>
   <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favorite Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text" placeholder="Enter Movie Title" value={title} onChange={(e) => handleTitle (e)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" placeholder="Enter movie description" value={description} onChange={(e) => handleDescription (e)}  />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Rate</Form.Label>
              <Form.Control as="number" placeholder="Enter movie Rat" value={rate} onChange={(e) => handleRate (e)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control as="url" placeholder='Enter movie poster' value={posterUrl} onChange={(e) => handlePosterUrl(e) } />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAdd} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovie
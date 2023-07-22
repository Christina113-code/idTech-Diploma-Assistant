import React, { useState } from 'react'
import ClipboardCopy from './ClipboardCopy'
{
  /* The following line can be included in your src/index.js or DiplomaApp.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Diploma from './Diploma';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './useLocalStorage';


const DiplomaApp = () => {
  const [show, setShow] = useState(false);
  const [diplomas, setDiplomas] = useLocalStorage('diplomas', [])
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingID, setEditingID] = useState('');

  const addDiploma = (e) =>{
    
    const newguy = {
      name, notes, id: uuidv4()
    }
    
    setDiplomas(old => [...old, newguy]);
    setShow(false);
    setName('');
    setNotes('');
  }

  const showEditingModal = (id) =>{
    diplomas.forEach((d)=>{
      if(d.id === id){
        setEditing(true);
        console.log(`current id: ${id}`)
        setEditingID(id)
        setName(d.name);
        setNotes(d.notes);

      }
    })
  }

  const editDiploma = () => {
    diplomas.forEach(d =>{
      if(d.id == editingID){
        d.name = name;
        d.notes = notes;
        setEditing(false)
      }
    })
  }


const handleChange = (e) =>{

  setName(e.target.value)
}
const handleNotesChange = (e) =>{

  setNotes(e.target.value);

}
const onDelete = (id) =>{
  
  setDiplomas(diplomas.filter(d => d.id != id))
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <h1 className='p-4'>Diploma Writing Assistant for iD Tech Employees :)</h1>
    <a href='https://chat.openai.com/' target='_blank' noreferrer>CHAT GPT TO THE RESCUE</a>
    <div className='d-flex p-2 justify-content-center'>

      <Button variant = "primary" onClick = {handleShow}>Add Diploma</Button>
    </div>
    {/* Add Diploma Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Diploma</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Bob" onChange={handleChange}value={name}/>
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={3} value={notes} onChange={handleNotesChange}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick = {addDiploma} type='submit'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

{/* Edit Diploma Modal */}
<Modal show={editing} onHide={() => setEditing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Diploma</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Bob" onChange={handleChange}value={name} />
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={3} value={notes} onChange={handleNotesChange}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditing(false)}>
            Close
          </Button>
          <Button variant="primary"  onClick = {()=> editDiploma()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




      {/* Diploma List */}

    {diplomas.map(diploma => <Diploma key = {diploma.id}name={diploma.name} notes = {diploma.notes} completed = {false} diploma = {" "} onClick = {()=>showEditingModal(diploma.id)} onDelete={() => {onDelete(diploma.id)}}/>)}
    
      

    {/* <ClipboardCopy copyText="hi"/> */}
    </>
  )
}

export default DiplomaApp
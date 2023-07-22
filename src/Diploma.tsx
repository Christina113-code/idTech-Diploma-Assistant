import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {CopyToClipboard} from 'react-copy-to-clipboard'
const Diploma = ({name,notes, completed, diploma, onClick, onDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <CopyToClipboard 
        text={`${name}, ${notes}`} 
        onCopy ={()=>alert("Copied!")}
        >
          <span>Copy to clipboard</span>
        </CopyToClipboard>
        <Card.Text>
        {notes}
        </Card.Text>
        <Button onClick = {onClick} variant="primary">Edit</Button>
        <Button variant='danger' onClick={onDelete}>Delete</Button>

      </Card.Body>
    </Card>
  );
}

export default Diploma
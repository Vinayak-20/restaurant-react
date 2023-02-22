import React from 'react'
import  { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Review({review}) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button className='ms-4'
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Reviews
        </Button> 
        <Collapse in={open}>
          <div id="example-collapse-text">

          {
            review.map(item=>
                
                      <>
                      <h3>{item.name}</h3>
                      <h6>{item.rating}</h6>
                      <p>{item.comments}</p>
                      </>

                )
          }     
             
        

       
           
          </div>
        </Collapse>
      </>
    );
  }

export default Review
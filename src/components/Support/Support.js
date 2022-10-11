import React from 'react'

import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
const Support = () => {

    return (
        <div id="support" >
      <Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
         }}
        >Support</h2>
      </Col>
      <Col md={{span:8,offset:1}}>
       <p>Support thing.Support thing.Support thing.Support thing.Support thing.Support thing.Support thing.
       Support thing.Support thing.Support thing.Support thing.Support thing.Support thing.Support thing.Support thing.
       Support thing.Support thing.Support thing.Support thing.Support thing.Support thing.
       </p>
      </Col>
      <br/>
      <Col md={{span:8,offset:1}}>
        <Link style={{
            background:"#0072F9",
            height:"30px",
            width:"50px",
            borderRadius:"30px",
            color:"white",
            padding:"10px",
            textDecoration:"none",
        }}to="/tongji-software/partnership">More Info
       </Link>
      </Col>
      <br/><br/><br/>
        </div>
    )
} 

export default Support
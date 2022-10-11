import React from 'react'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
const Software = () => {

    return (
        <div id="support" >

      <Row>
      <Col md={{offset:1,span:8}}>
      <h1 className='head2' style={{
            color:"#2e77e5",
         }}
        >Software Demo</h1>
      </Col>
         
        <Link style={{
            textAlign:"center",
            marginRight:"0",
            background:"#2e77e5",
            height:"6vh",
            width:"10vw",
            borderRadius:"5vw",
            color:"white",
            paddingTop:"1vh",
            fontSize:"x-large",
            textDecoration:"none",
        }}to="/tongji-software/software">More Info
       </Link>
      </Row>
      <Col md={{span:6,offset:1}}>
       <p style={{fontSize:"x-large"}}>Anti-CRISPR Genome-based Predicting Software
       </p>
      </Col>





      
        </div>
    )
} 

export default Software
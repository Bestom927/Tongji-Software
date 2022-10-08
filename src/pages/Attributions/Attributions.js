import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Attributions = () => {
    return (
        <div className='attributions-container'>
            <img src={require("../../assets/2-1.png")} alt="attr-page-img1" />
       
      <Row>
      <Col md={{offset:1}}>
      {/* <div id="title">
         Attributions
      </div> */}
      <h1 style={{color:"#2e77e5"}}> Attributions</h1>
      </Col>
      </Row>
     
      <br/>

      <Row>
      <Col md={{span:6,offset:1}}>
       <p>Our team members come from the Academy of Life Sciences and Technology,
         the Academy of Design and Innovation, the Academy of Software, 
         the Academy of Mathematical Sciences, and the Academy of Electronics and 
         Information Engineering. All of them assisted each other throughout the project and actively participated in all parts of the work. At the same time, we were able to exchange ideas and learn to collide with new inspirations, 
        and each member was very important, making us feel like one big family.</p>
      </Col>
      <Col md={{span:4 ,offset:1}}>
      <Card style={{ width: '18rem'}} >
      <Card.Body>
     <h4 style={{color:"#2e77e5"}}>What we have accomplished?</h4>
     <br/> <br/> <br/>
      </Card.Body>
    </Card>
      </Col>
      </Row>
      <br/><br/><br/><br/><br/><br/>
      
        </div>
        
    )
}

export default Attributions;
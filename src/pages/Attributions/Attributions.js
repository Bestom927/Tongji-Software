import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import '../CC/cc.css';
import CheckboxIcon from '../CC/checkbox';
import Star from '../CC/star';


function Attributions (props)  {
    return (
        <div className='attributions-container'>
            <img src={require("../../assets/2-1.png")} alt="attr-page-img1" />
       
      <Row>
      <Col md={{offset:1}}>
      {/* <div id="title">
         Attributions
      </div> */}
      <h1 style={{color:"#2e77e5" ,fontWeight:"bold"}}> Attributions</h1>
      </Col>
      </Row>
     
      <br/>

      <Row>
      <Col md={{span:8,offset:1}}>
       <p style={{fontSize:'18px'}}>Our team members come from the Academy of Life Sciences and Technology,
         the Academy of Design and Innovation, the Academy of Software, 
         the Academy of Mathematical Sciences, and the Academy of Electronics and 
         Information Engineering. All of them assisted each other throughout the project and actively participated in all parts of the work. At the same time, we were able to exchange ideas and learn to collide with new inspirations, 
        and each member was very important, making us feel like one big family.</p>
      <br/>
       <Row>
        <Col xs={3}>
        <br/>
        <Button size="lg" className="chosenButton" variant="outline-light"><Star/>&nbsp;&nbsp; Biology&nbsp;&nbsp; </Button>
        <br/>  <br/>
        <Button size="lg" className="defaultButton" variant="outline-light"><Star/>&nbsp;&nbsp; Software</Button>
        <br/>  <br/>
        <Button size="lg" className="defaultButton" variant="outline-light"><Star/>&nbsp;&nbsp; Design&nbsp;&nbsp;&nbsp;</Button>
       </Col>
       <Col xs={6}>
        <Card border="light"  style={{ width: '40rem' ,padding:"20 20 20 20"}} className='card'> 
      <Card.Body>
       <p style={{fontWeight:"bold" ,fontSize:"17px"}}> Our team composed by 5 people, we were mainly responsed for the whole synthetic biology part, including concept generated, contact partnership, data analysis, and etc. 
      </p>
      <br/>
      <img src={require("../../assets/bio1.png")} alt="bio1" className="portrait"/>
      &nbsp;&nbsp;
      <img src={require("../../assets/bio2.png")} alt="bio1" className="portrait"/>
      &nbsp;&nbsp;
      <img src={require("../../assets/bio3.png")} alt="bio1" className="portrait"/>
      &nbsp;&nbsp; &nbsp;&nbsp;····
      </Card.Body>
        </Card>
        </Col>
        </Row>
      </Col>
      <Col md={{span:3 ,offset:0}}>
        <div >
      <Card border="light" style={{ width: '18rem'}} className='card' >
      <Card.Body>
     <h5 style={{color:"#2e77e5"}}>What we</h5>
     <h5 style={{color:"#2e77e5"}}> have accomplished?</h5>
    
     <br/><br/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Software</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Video</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Brochure</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Communication with other agency</p>
     <hr/>
     <p><CheckboxIcon/>&nbsp;&nbsp;Game</p>
     <hr/>
      </Card.Body>
    </Card>
    </div>
      </Col>
      </Row>

    
      <br/><br/><br/><br/><br/><br/>
      
        </div>
        
    )
}

export default Attributions;
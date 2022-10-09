import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import '../CC/cc.css';
import CheckboxIcon from '../CC/checkbox';
import Star from '../CC/star';
import NameCard from '../CC/namecard';


function Attributions (props)  {

const [card,setCard]=useState("biology");
console.log(card);
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
       <p style={{fontSize:'18px'}}>Our team members come from the Academy of Life Sciences and Technology, the Academy of Design and Innovation, the Academy of Software and the Academy of Mathematical Sciences. All of them assisted each other throughout the project and actively participated in all parts of the work. At the same time, we were able to exchange ideas and do some brainstorming with new inspirations. Each member was very important, and a indivisible part of our team family.</p>
      <br/>
       <Row>
        <Col xs={3}>
        <br/>
        {
        card==="biology"&&
        <Button size="lg"   className="chosenButton"  variant="outline-light">
          <Star/>&nbsp;&nbsp; Biology&nbsp;&nbsp; </Button>
        }  

        {
        card!=="biology"&&
        <Button size="lg" className="defaultButton" variant="outline-light"
        onClick={()=>{if(card!=="biology")setCard("biology");}}><Star/>&nbsp;&nbsp; Biology&nbsp;&nbsp; </Button>
        }  

        <br/>  <br/>

        {
          card==="software"&&<Button size="lg" className="chosenButton" variant="outline-light">
            <Star/>&nbsp;&nbsp; Software</Button>
         }

        {
          card!=="software"&&<Button size="lg" className="defaultButton" variant="outline-light"
          onClick={()=>{if(card!=="software")setCard("software");}}><Star/>&nbsp;&nbsp; Software</Button>
         }


        <br/>  <br/>
        {
          card==="design"&&<Button size="lg" className="chosenButton" variant="outline-light"
          ><Star/>&nbsp;&nbsp; Design&nbsp;&nbsp;&nbsp;</Button>
         }
        {
          card!=="design"&&<Button size="lg" className="defaultButton" variant="outline-light"
          onClick={()=>{if(card!=="design")setCard("design")}}><Star/>&nbsp;&nbsp; Design&nbsp;&nbsp;&nbsp;</Button>
         }

    </Col>
       <Col xs={6}>
        <Card border="light"  style={{ width: '40rem' ,padding:"20 20 20 20"}} className='card'> 
      <Card.Body>
     <NameCard name={card}/>
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

<br/><br/><br/>

      <Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Details</h1>
      </Col>
      </Row>
<br/><br/>

<div className="detailInfo">
      <Row>
      <Col md={{span:3,offset:2}}>
        <br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Zhang Shiyue</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p style={{fontWeight:"bold",fontSize:'18px'}}>
      Team Leader: Academic Group Leader 
      </p>
      <p>Participating HP </p>
      <p>Contact with collaboration and partnership</p>
      <p> Model determination and final construction</p>
     
      </Col>
      </Row>

      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
        <br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Zheng Yulong</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p style={{fontWeight:"bold",fontSize:'18px'}}>
      Team Leader: Coordination Leader 
      </p>
      <p> Preliminary Research  </p>
      <p> Wiki writing </p>
      <p>Data collection</p>
      <p>Model Validation</p>
     
      </Col>
      </Row>

      <br/> <br/>

      <Row>
      <Col md={{span:3,offset:2}}>
        <br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Zhang Zihan</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p style={{fontWeight:"bold",fontSize:'18px'}}>
        Team Leader: Software Leader
      </p>
      <p> Wiki construction and writing </p>
      <p> Tool environment configuration </p>
      <p>In charge of education and public engagement</p>
      
      </Col>
      </Row>

      <br/> <br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Li Xuechen</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>  Art design (Brochure, video, and poster design) </p>
      <p> Wiki design and writing </p>
      <p>Participating HP</p>
      
      </Col>
      </Row>

      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/><br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Li Shiyu</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>  Wiki writing</p>
      <p>  Participating HP </p>
      <p>  Participating in education and public engagement </p>
      <p> Financial management </p>
      <p>  Data feature extraction</p>
      
      </Col>
      </Row>

      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/><br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Zhou Shixuan</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>In charge of human practice (content planning) </p>
      <p>Contact with collaboration and partnership </p>
      <p> Data collection and feature extraction</p>
      <p> Code Programming </p>
      <p>Presentation</p>
      
      </Col>
      </Row>


      
      <br/><br/>

      <Row>
      <Col md={{span:3,offset:2}}>
      <br/>
      <h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Zhang Jiani</h3>
      </Col>

      <Col md={{span:4,offset:0}}>
      <p>Preliminary Research </p>
      <p>Wiki writing </p>
      <p>Model selection and optimization</p>
      
      </Col>
      </Row>

      <br/><br/>

<Row>
<Col md={{span:3,offset:2}}>
<br/>
<h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Yang Xin</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>Educational game design </p>
<p>Wiki construction Database </p>
<p>Management </p>
<p>Participating HP</p>

</Col>
</Row>

<br/><br/>

<Row>
<Col md={{span:3,offset:2}}>
<br/>
<h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Yuan Fengye</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>Wiki construction</p>
<p> Participating HP </p>
<p>Code Programming </p>
<p>Educational game design and construction</p>

</Col>
</Row>

<br/><br/>

<Row>
<Col md={{span:3,offset:2}}>
<br/>
<h3 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Chen Chen</h3>
</Col>

<Col md={{span:4,offset:0}}>
<p>Code Programming </p>
<p>Wiki construction and writing </p>
<p>Educational game design</p>

</Col>
</Row>
<br/><br/>
      </div>
        </div>
        
    )
}


export default Attributions;

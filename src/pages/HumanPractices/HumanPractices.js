import React, { useState }  from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarLg from '../CC/starlg';
import Slider from '@mui/material/Slider';
import Card from 'react-bootstrap/Card';
import '../CC/cc.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from '@mui/system';
import CheckboxIcon from '../CC/checkbox';

function HumanPractices ()  {
   const [value,setValue]=useState(3);
   const [ color,setColor]=useState(["card" ,"card" ,"cardhp" ,"card"]);
  const handleChange=(event,newValue)=>{
   
    let temp=["card" ,"card" ,"cardhp" ,"card"];
    for(let i =0;i<=3;i++){
      if(i===newValue-1) temp[i]="cardhp";
      else temp[i]="card";
  }
   setValue(newValue);
   setColor(temp);
  }

  const valuetext=(value)=>{
    if(value===1)  return "2022.3-5";
    else if(value===2) return "2022.5";
    else if(value===3) return "2022.5-7";
    else return "2022.6";
  }

  return (
    <div>
      <img src="https://static.igem.wiki/teams/4272/wiki/hp-img1.png" alt="hp-page-img1" 
      width={"1480px"}/>
      <br/><br/>
      <br/><br/>
     <Row>
      <Col md={{offset:1}}>
      <h1 style={{color:"#2e77e5" ,fontWeight:"bold"}}>Human Practices</h1>
      </Col>
      </Row>
     
<Row>

  <Col md={{span:5,offset:1}}><br/>
  Throughout the project, we constantly communication with the general public and biological researchers, providing guidance for us to improve our content and discover the social significance of our project. The advancement of our project is inseparable from human practices, and in the interaction, we also try to make more people understand what synthetic biology is and the concept of iGEM. We believe that what we are doing is not only simple software but also something beneficial to the future of human. Thank you very much to all the people who have helped us. Our human practice can be described in three main areas: Inspiration & Problems, Design & Improvement, and Meaning & Applications.
  </Col>

  <Col>
  <img src="https://static.igem.wiki/teams/4272/wiki/hp-img2.png" alt="hp-page-img2" 
      width="650px"/>
  </Col>
</Row>

<br/><br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h1 style={{color:"#2e77e5"}}> <StarLg/> &nbsp;Inspiration & Problems</h1>
</Col>

</Row>

<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<p>Because of the ubiquity of gene editing in synthetic biology research, we initially focused on this area with the hope that our project would improve existing problems from this perspective. In this regard, we chose various channels to determine our research topic and the problem we want to solve.</p>
</Col>

</Row>

<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#2e77e5",fontSize:"38px"}}>Photo</h2>
</Col>

</Row>

<div style={{textAlign:"center"}}>
<img src="https://static.igem.wiki/teams/4272/wiki/hp-img3.png" alt="hp-page-img3" 
      width="1250px"/>
</div>
<br/><br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#2e77e5",fontSize:"38px"}}>Timeline</h2>
</Col>
</Row>

<br/>

<Row>
  <Col md={{offset:1}}>
<Slider
   sx={{width:1150}}
    color="secondary"
    value={value}
    min={1}
    max={4} 
    step={1}
    // getAriaValueText={valuetext}
    valueLabelFormat={valuetext}
    onChange={handleChange}
    valueLabelDisplay="on"
    />
   </Col>
   </Row>

<br/>

<Container>
<CardGroup >
<Card border="light" style={{ width: '10rem'}} className={color[0]} >
     <Card.Body>
    <h5 style={{textAlign:"center"}}>Email exchange with Dr. Liu</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.3-5 </p>
    <p style={{color:"#adadad"}}> At this stage, we talked with our advisor, Dr. Liu, about our needs and what we wanted to do since he has some attainments in the field of gene editing.</p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Brainstorming</p>
    <p><CheckboxIcon/>&nbsp; Confirm the topic</p>
<br/>   <br/>
     </Card.Body>
   </Card>
<Card border="light" style={{ width: '10rem'}} className={color[1]}>
     <Card.Body>
     <h5 style={{textAlign:"center"}}>Software Testing</h5>
    <br/>   <p style={{color:"#adadad" ,textAlign:"center"}}>2022.5 </p>
    <p style={{color:"#adadad"}}>At this stage, we focus on collecting all kinds of information, acquiring all kinds of software design knowledge and their basic logic, and carrying out our own software design.</p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Literature Review</p>
    <p><CheckboxIcon/>&nbsp; Test different softwares</p>
    <p><CheckboxIcon/>&nbsp; Design our strategies</p>
<br/>   <br/>
     </Card.Body> 
     </Card>
     
     <Card border="light" style={{ width: '10rem'}} className={color[2]} >
     <Card.Body>
     <h5 style={{textAlign:"center"}}>Questionaire</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.5-7 </p>
    <p style={{color:"#adadad"}}>
 Understand the current level of awareness of gene editing and the level of knowledge of Anti-CRISPR protein among current biological researchers as well as the use of related software</p>
    <br/>
    <p><CheckboxIcon/>&nbsp; Questionnaire for insiders</p>
    <p><CheckboxIcon/>&nbsp; Background knowledge test</p>
    <p><CheckboxIcon/>&nbsp; Recognized</p>
<br/>   <br/>
     </Card.Body>
   </Card>
   
   <Card border="light" style={{ width: '10rem'}} className={color[3]} >
   <Card.Body>
     <h5 style={{textAlign:"center"}}>Interview</h5>
    <br/>   <p style={{color:"#adadad",textAlign:"center"}}>2022.6</p>
    <p style={{color:"#adadad"}}>
To gain insight into the specific views on gene editing and Acr proteins, we selected individual questionnaire completers for in-depth interviews. </p>
    <br/>  <br/>
    <p><CheckboxIcon/>&nbsp; In depth interview</p>
    <p><CheckboxIcon/>&nbsp; Insights</p>
    <p><CheckboxIcon/>&nbsp; Deepening direction</p>
<br/>   <br/>
     </Card.Body> 
   </Card>
</CardGroup>
</Container>

<br/>
<br/>
<Row>
  <Col md={{offset:1,span:10  }}>
<h2 style={{color:"#2e77e5",fontSize:"38px"}}>Difficulties & Solutions & Details</h2>
</Col>
</Row>

    </div>
  )
}

export default HumanPractices

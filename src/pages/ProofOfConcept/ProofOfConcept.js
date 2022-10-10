import React from 'react'
import './ProofOfConcept.css'
import Col from 'react-bootstrap/Col';


const ProofOfConcept = () => {
  return (
    <div>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof.png"style={{
                    marginLeft:"3%",
                    height: "100vh",
                    width: "98%",
                }} alt="proof-page-img1" />
      
      
      <h1 className='head1' style={{
            color:"#2e77e5",
         }}
        >Proof of concept</h1>
      <br/>
      

      <Col md={{offset:1}}>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof1.png" 
        style={{width:"38vw"}} alt="proof"/>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof2.png" 
        style={{width:"40vw"}} alt="proof"/>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof3.png"
        style={{width:"40vw"}}  alt="proof"/>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof4.png" 
        style={{width:"40vw"}} alt="proof"/>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof5.png" 
        style={{width:"40vw"}} alt="proof"/>
      <img src="https://static.igem.wiki/teams/4272/wiki/proof6.png" 
        style={{width:"40vw"}} alt="proof"/>
      </Col>
      <Col md={{span:8,offset:1}}>
       <p>As an important tool in synthetic biology research, gene editing with its safety issue in application is of great importance. Through human practice and preliminary research, we attached our concentration on how to improve the safety of gene editing and further develop tools relating to this topic. Eventually, the Anti-CRISPR protein caught our attention.</p>
      </Col>

      <Col md={{offset:1}}>
       <img src="https://static.igem.wiki/teams/4272/wiki/proof-data.png" 
         style={{width:"90%"}} alt="proof-data"/>
      </Col>

    
    
    
    </div>
  )
}

export default ProofOfConcept
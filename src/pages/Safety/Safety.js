import React from 'react'

import Col from 'react-bootstrap/Col';
const Safety = () => {
  return (
    <>
      <Col md={{offset:0}} style={{textAlign:"center",}}>
      <h1 className='head2' style={{
            color:"#2e77e5",
         }}
        >Safety</h1>
        </Col>
    <Col md={{offset:2,span:7}}>
    <p>We are doing software project that does not involve experiments with organisms or parts. We use public data to build a model to identify Anti-CRISPR Proteins which are candidate tools for synthetic biology, it is safe and secure.</p>
    </Col>
    </>
  )
}

export default Safety
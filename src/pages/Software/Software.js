import React from 'react'
import { Col } from 'react-bootstrap'
const Software = () => {
  return (
    <div>
                <h1 className='head1' style={{
          color:"#0072F9",
          marginTop:"2vw",
          marginBottom:"2vw",
          }}
          >Software</h1>

          
<Col md={{offset:1}}>
      <h2 className='head2' style={{
            color:"#0072F9",
            marginTop:"5vh",
            marginBottom:"3vh",
         }}
        >Procedural Testing 
        </h2>
      </Col>
      <Col md={{span:8,offset:1}}>
       <p>
        First step download genebank files
        <br/>choice 1. NCBI id example:
        <br/>NC_ 004086.1(in example.txt):python3 1_ get_ ncbi_ gb. py -i example.txt
        <br/>One NCBI number for each behavior
        <br/>choice 2. FASTA file example:
        <br/>NC_ 004086.1(in example.fasta):python3 1_ fasta_ to_ gb. py -i example.fasta
        <br/>FASTA files for the whole genome sequence of the species
        <br/>Any one that selects to run properly generates a genome under that directory_ Folder of GB where text files of (NCBI number). TXT or (FASTA file name). GB are deposited
        <br/>Steps two through four are performed sequentially
        <br/>python3 2_ get_ cds.py
        <br/>python3 3_ annotation_ hth.py
        <br/>python3 4_ directon.py
        </p>
        <br/>
        <p>
        Can be under this directory once the run is successful genome_ Feature files corresponding to names are found under feature / folder and need to be opened to determine if features are extracted (if not, there is no corresponding ACR protein in the species that might be entered or if the protein information is too missing)
        </p>
        <br/>
        <p>
        Then switch to under the model folder under the parent directory to make the fifth step prediction
        Step five perform the python 3 test py -i ../coding/genome_ Feature / (ncbiid or FASTA name). CSV the prediction results can be viewed in preture.csv under this directory.

        </p>
        <a href="/tongji-software/software">
        <img src="https://static.igem.wiki/teams/4272/wiki/proof-data.png" 
        style={{ }} alt="proof"/>  </a>
       </Col>
    </div>
  )
}

export default Software
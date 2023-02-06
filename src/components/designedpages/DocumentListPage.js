import { Container } from "@mui/system";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';

function CyberSecurityPolicyPage(){

    const [loadpdf, setLoadPdf] = useState(true);
    const [viewPDF, setViewPDF] = useState(false);
    const openPDF = () => setViewPDF(true);
    const [pdfdata, setPdfData] = useState(null);
    
    const [query,setQuery]=useState("");
    console.log(query);
   
    
    useEffect(() => {
        axios.get('http://localhost:8500/documents')
            .then((response) => {
                setPdfData(response.data);
                console.log("data",pdfdata);
                setLoadPdf(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])
    

    if (loadpdf) {
        return (
            <div>
                <Button variant='dark grey' onClick={openPDF}>viewPdf</Button>
            </div>
        )
    }
    return(
       
       <div>
            <Container><br/>
                <div class="empsearch">
                    <center>
                        <input type="text"  
                                placeholder="Search Employee Name[Format: abcdefg]" 
                                class="search text-center" 
                                onChange={(e)=> setQuery(e.target.value)}>
                        </input>
                    </center>
                </div>
            </Container><br/><br/>
            {
                
                pdfdata.filter((ele)=>ele.flowchartName.toLowerCase().includes(query)).map((ele)=>{
                    <li key={ele.flowchartId}></li>
                    console.log("ele:",ele.empName);
                    return(
                        <div class="emplist">
                            <Container>
                                 <div class="card shadow-sm bg-body">                                        
                                    <div class="card-body bg- text-dark bg-gradient">
                                        <div class="row">
                                                                                   
                                            <div class="col-sm-6">
                                                <h1 class="card-title fw-normal fw-bold">{ele.flowchartName}</h1>
                                                <h4 class="card-des">{ele.flowchartType}</h4>
                                               
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </Container>
                        </div>
                    )
                })
            }
        </div>
    )
}

        
        
    
        

export default CyberSecurityPolicyPage;


/**
 * <div class="cce">
            <iframe
                src={`data:application/pdf;base64,${pdfdata}#toolbar=1`} title="document" width='1300px' height='500rem'/>                                  
        </div>
 */
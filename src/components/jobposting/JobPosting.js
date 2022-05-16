import React, {useState} from 'react'
// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './JobPosting.css'
  
export default function JobPosting() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div class="all-container">
    <div className="pdf-container">
    <h1> <span style={{color: "white", fontSize: "3rem"}}> JOB </span><span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> POSTINGS </span></h1>
    <span style={{color: "white", paddingTop:"1rem", fontSize:'1.5rem', textAlign: "center"}} >Currently there are no job postings available. </span>
    {/* <center>
        <div style={{marginTop: "15px"}}>
          <Document file="../jobposting.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center> */}
    </div></div>
  );
};
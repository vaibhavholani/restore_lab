import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './JobPosting.css'
  
export default function JobPosting() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div class="no-posting-class">
        <h1 style={{color: "black", fontSize: "4rem"}}>Currently No Jobs available</h1>
    </div>
    // <div class="all-container">
    // <h1> <span style={{color: "white", fontSize: "3rem"}}> JOB </span><span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> POSTINGS </span></h1>
    // <div className="pdf-container">
    // <center>
    //   <h1 style={{color: "white"}}>Currently No Jobs available</h1>
    //     <div style={{marginTop: "15px"}}>
    //       <Document file="../jobposting.pdf" onLoadSuccess={onDocumentLoadSuccess}>
    //         {Array.from(
    //           new Array(numPages),
    //           (el,index) => (
    //             <Page 
    //               key={`page_${index+1}`}
    //               pageNumber={index+1}
    //             />
    //           )
    //         )}
    //       </Document>
    //     </div>
    //   </center>
    // </div>
    // </div>
  );
};
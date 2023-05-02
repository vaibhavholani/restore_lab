import React, {useState, useEffect} from 'react'
import { publications } from './publications_data';
import './public.css'

export default function Publications() {
    
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
    }, [])

    useEffect(() => {
        if (publications.length !== 0) {
            setLoad(false)
        }
    }, [publications])

    // const onLink = (link) => {window.open(link, '_blank').focus();}
    // const onDownload = (objectID) => {download_file_by_id(objectID);}

    return (

    
        <div class="publicationsContainer" >
        <div className="publicationsHeading" id="alumni">
            <h1>  <span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline">Publications</span></h1>
        </div>
        
 
  {
            (publications ? publications: []).map(publication => {
                return (
                    <div className='publicationsContain'>
                        <div className='publicationsHeader'><b>{publication.heading}</b></div>
                        
                        <div className='flexbox'>
                        <div className='flexbox1'>{publication.text}</div>
                       </div>
                    </div>

                )
            })

        
    }

    </div> 

    )
    }
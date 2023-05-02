import React, {useState, useEffect} from 'react'
import './global.css'
import RestoreGlobalConsortium from './RestoreGlobalConsortium'
import RestoreGlobalSouth from './RestoreGlobalSouth'
import RestoreInterdisciplinaryResearch from './RestoreInterdisciplinaryResearch'
import RestoreGlobalHealthInitiatives from './RestoreGlobalHealthInitiatives'
export default function RestoreGlobal() {


    return (

<div className='allcontainerglobal'>
    <div className='mainheaderglobal'>
    <h1 className='headeritem'>
        Restore <span className='otherpart'> Global </span>
        </h1>
    </div>
    <RestoreGlobalConsortium/>
    <RestoreGlobalSouth />
    <RestoreInterdisciplinaryResearch />
    <RestoreGlobalHealthInitiatives />

</div>
            )

    }

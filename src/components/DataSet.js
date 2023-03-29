import React from 'react';
import './style/DataSet.css';

export default function DataSet ({dataSetCount}) {
// seperate out ul/li into seperate component (map through props)
// read state of graphs and count up each time new one is added (replace # with int)
    
    const handleDataSetDelete = () => {
        {/*TODO: make data set delete*/}
        console.log(`clicked delete ${dataSetCount}`)
    }

    return (
        <>
        <div className='data-set'>
            <div className='data-set-title'>
                <h3>Data set {dataSetCount}:</h3>
                {/*TODO: make data set delete*/}
                <button className='data-set-delete' onClick={handleDataSetDelete}>X</button>
            </div>
            <div className='data-set-selections'>
                {/* TODO: make content come from selector*/}
            </div>
        </div>
        </>
    )
}
import React from 'react';
import './style/DataSet.css';

export default function DataSet ({dataSetCount, dataSetArr}) {
// seperate out ul/li into seperate component (map through props)
// read state of graphs and count up each time new one is added (replace # with int)
    
    const handleDataSetDelete = () => {
        {/*TODO: make data set delete*/}
        console.log(dataSetArr)
        console.log(`clicked delete ${dataSetCount}`)
        // console.log(dataSetArr)
        let targetedDataSet = dataSetArr.findIndex((obj)=>obj.dataSetCount === dataSetCount)
        console.log(targetedDataSet)
        dataSetArr.splice(targetedDataSet,1)
        for (let i = 0; i < dataSetArr.length; i++) {
            dataSetArr[i].dataSetCount = i + 1
        }
        console.log(dataSetArr)
        localStorage.setItem('localDataSetArr', JSON.stringify(dataSetArr))
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
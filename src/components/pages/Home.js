import React, {useState, useEffect} from 'react';
import './../style/Home.css';

// import components
import DataSet from './../DataSet'
import DataSetSelector from '../DataSetSelector';

export default function Home () {
    // state declarations
    const [dataSetCount, setDataSetCount] = useState(1)
    const [dataSetArrState, setDataSetArrState] = useState([])

    let localDataSetArr = JSON.parse(localStorage.getItem('localDataSetArr'))

    // useEffect
    useEffect(() => {
        if (localDataSetArr) {
            setDataSetArrState(localDataSetArr)
            setDataSetCount(localDataSetArr.length + 1)
        } else {
            localStorage.setItem('localDataSetArr',JSON.stringify([{key: 'dataset1', dataSetCount: 1}]))
        }
    },[])
    
    // functions
    const handleAddDataSet = () => {
        let dataSetArr = JSON.parse(localStorage.getItem('localDataSetArr'))
        console.log(dataSetArr)
        let newObj = {key: `dataset${dataSetCount}`, dataSetCount: dataSetCount}
        console.log(dataSetArr)
        dataSetArr.push(newObj)
        localStorage.setItem('localDataSetArr', JSON.stringify(dataSetArr))
        setDataSetCount(dataSetCount+1)
        setDataSetArrState(dataSetArr)
    }

    return (
        <div className='home-container'>
        <section className='data-sets'>
            <form>
                <label>
                    Name your Collection:
                    <input type="text" name="name"/>
                    <button>Render Graph(s)</button>
                </label>
            </form>
            <button onClick={handleAddDataSet}>Add Graph/Data Set</button>
            <form className='data-set-params-form'>
                {/* ISO 8601 - 20 characters */}
                <input type='text' name='start-time' id='start-time-input' placeholder='Time Start' maxLength="20"/>
                <label htmlFor='end-time'> | </label>
                <input type='text' name='end-time' id='end-time-input' placeholder='Time End' maxLength="20"/>
                <label htmlFor="real-time"> | Real Time: </label>
                <input type='checkbox' name='real-time' id='real-time-check' />
                <label htmlFor='delta-time'> | </label>
                <input type='text' name='delta' id='delta-time' placeholder='Delta'/>
            </form>
            {dataSetArrState.map((dataSet) =>
                <DataSet 
                    key={dataSet.key}
                    dataSetCount={dataSet.dataSetCount}
                    dataSetArr={dataSetArrState}
                />
            )}
        </section>
        <section className='data-set-selector'>
            <DataSetSelector
                dataSetArr={dataSetArrState}
            />
        </section>
        </div>
    )
}
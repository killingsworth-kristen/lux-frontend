import React, {useState} from 'react';
import './../style/Home.css';

// import components
import DataSet from './../DataSet'
import DataSetSelector from '../DataSetSelector';

export default function Home () {
    // state declarations
    const [dataSetCount, setDataSetCount] = useState(1)

    // global variables
    const dataSetArr = []

    // functions

    const handleAddDataSet = () => {
        let newDataSetCount = dataSetCount + 1;
        setDataSetCount(newDataSetCount)
    }

    const dataSetRender = () => {
        for (let i = 0; i < dataSetCount; i++) {
            dataSetArr.push({key: `dataset${i+1}`, dataSetCount: i+1})
        }
        console.log(dataSetArr)
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
                {/* what unit of time is going to be used? */}
                <input type='text' name='start-time' id='start-time-input' placeholder='Time Start' maxLength="10"/>
                <label htmlFor='end-time'> | </label>
                <input type='text' name='end-time' id='end-time-input' placeholder='Time End' maxLength="10"/>
                <label htmlFor="real-time"> | Real Time: </label>
                <input type='checkbox' name='real-time' id='real-time-check' />
                <label htmlFor='delta-time'> | </label>
                <input type='text' name='delta' id='delta-time' placeholder='Delta'/>
            </form>
            {dataSetRender()}
            {dataSetArr.map((dataSet)=>
                <DataSet 
                    key={dataSet.key}
                    dataSetCount={dataSet.dataSetCount}
                />
            )}
        </section>
        <section className='data-set-selector'>
            <DataSetSelector
                dataSetArr={dataSetArr}
            />
        </section>
        </div>
    )
}
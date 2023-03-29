import React from 'react';
import './../style/Home.css';

// import components
import DataSet from './../DataSet'
import DataSetSelector from '../DataSetSelector';

export default function Home () {
    return (
        <div className='home-container'>
        <section>
            <form>
                <label>
                    Name your Collection:
                    <input type="text" name="name"/>
                    <button>Render Graph(s)</button>
                </label>
            </form>
            <button>Add Graph/Data Set</button>
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
            <DataSet/>
            <DataSet/>
        </section>
        <section>
            <DataSetSelector/>
        </section>
        </div>
    )
}
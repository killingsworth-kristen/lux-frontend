import React from 'react';
import './style/DataSet.css';

export default function DataSet () {
// seperate out ul/li into seperate component (map through props)
// read state of graphs and count up each time new one is added (replace # with int)
    return (
        <>
        <div className='data-set'>
            <div className='data-set-title'>
                <h3>Data set #:</h3>
                <button className='data-set-delete'>X</button>
            </div>
            <div className='data-set-selections'>
                <ul className='data-set-ul'>
                    <li>
                        <div className='data-set-li'>
                            <p className='data-set-text'>◉ This is a selection</p>
                            <button className='data-set-close'>X</button>
                        </div>
                    </li>
                    <li>
                        <div className='data-set-li'>
                            <p className='data-set-text'>◉ This is a selection</p>
                            <button className='data-set-close'>X</button>
                        </div>
                    </li>
                    <li>
                        <div className='data-set-li'>
                            <p className='data-set-text'>◉ This is a selection</p>
                            <button className='data-set-close'>X</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
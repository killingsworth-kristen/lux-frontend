import React from 'react';
import './style/DataSet.css';

export default function DataSet ({dataSetCount}) {
// seperate out ul/li into seperate component (map through props)
// read state of graphs and count up each time new one is added (replace # with int)
    return (
        <>
        <div className='data-set'>
            <div className='data-set-title'>
                <h3>Data set {dataSetCount}:</h3>
                <button className='data-set-delete'>X</button>
            </div>
            <div className='data-set-selections'>
                {/* <ul className='data-set-ul'>
                    <li className='data-set-li'>
                        <div className='data-set-li-item'>
                            <div className='data-set-text-container'>
                                <p className='custom-li-marker'>◉ </p>
                                <p className='data-set-text'>This is a selection</p>
                            </div>
                            <button className='data-set-close'>X</button>
                        </div>
                    </li>
                    <li className='data-set-li'>
                        <div className='data-set-li-item'>
                            <div className='data-set-text-container'>
                                <p className='custom-li-marker'>◉ </p>
                                <p className='data-set-text'>Ad esse anim in excepteur laboris est fugiat nulla incididunt Lorem nostrud fugiat officia. Anim duis veniam irure consequat.</p>
                            </div>
                            <button className='data-set-close'>X</button>
                        </div>
                    </li>
                    <li className='data-set-li'>
                        <div className='data-set-li-item'>
                            <div className='data-set-text-container'>
                                <p className='custom-li-marker'>◉ </p>
                                <p className='data-set-text'>This is a selection</p>
                            </div>
                            <button className='data-set-close'>X</button>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
        </>
    )
}
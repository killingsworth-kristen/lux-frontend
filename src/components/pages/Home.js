import React from 'react';
import './../style/Home.css';

// import components
import DataSet from './../DataSet'

export default function Home () {
    return (
        <>
        <aside>
            <form>
                <label>
                    Name your Collection:
                    <input type="text" name="name"/>
                    <button>Render Graph(s)</button>
                </label>
            </form>
            <button>Add Graph/Data Set</button>
            <DataSet/>
            <DataSet/>
        </aside>
        </>
    )
}
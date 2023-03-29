import React, {useState} from 'react'
import './style/DataSetSelector.css'


export default function DataSetSelector () {
    const [displayItems, setDisplayItems] = useState('10 items')
    const [source, setSource] = useState(`1`)
    const options = [
        {
            key: 1,
            label: '10 items',
            value: '10 items'
        },
        {
            key: 2,
            label: '15 items',
            value: '15 items'
        },
        {
            key: 3,
            label: '20 items',
            value: '20 items'
        },
        {
            key: 4,
            label: '25 items',
            value: '25 items'
        },
    ]

    const listArr = []
    const makeListArr = () => {
        const displayNum = displayItems.split(' ')[0]
        for (let i = 0; i < displayNum; i++) {
            listArr.push({key: `${source}-${i}`, element: `Source ${source} - list item ${i+1}`})
        }
    }

    const handleDisplayItems = (e) => {
        console.log(`${e.target.value} selected for display`)
        setDisplayItems(e.target.value)
    }

    const handleSourceChange = (e) => {
        const sourceNum = e.target.textContent.split(' ')[1]
        console.log(sourceNum)
        setSource(sourceNum)
        console.log('source changed')
    }

    return (
        <div className="data-set-selector-container">
            <h2 className='data-set-selector-title'>Select Data to Graph:</h2>
            <div className='data-selector-source-tabs-container'>
                <h3 className={source === `1` ? 'selected data-selector-source-tabs' : 'data-selector-source-tabs'} id='source-tab-1' onClick={handleSourceChange}>Source 1</h3>
                <h3 className={source === `2` ? 'selected data-selector-source-tabs' : 'data-selector-source-tabs'} id='source-tab-2' onClick={handleSourceChange}>Source 2</h3>
                <h3 className={source === `3` ? 'selected data-selector-source-tabs' : 'data-selector-source-tabs'} id='source-tab-3' onClick={handleSourceChange}>Source 3</h3>
            </div>
            <form className='display-num-items-form'>
                <label htmlFor='display-num-items'>Display Number of Items: </label>
                <select name='display-num-items' onChange={handleDisplayItems} value={displayItems}>
                    {options.map((option)=>
                        <option key={option.key} value={option.value}>{option.label}</option>
                    )}
                </select>
            </form>
            <div className='data-selector-source-list-container'>
                <ul id='source-1-list'>
                    {makeListArr()}
                    {listArr.map((li)=><li key={li.key}>{li.element}</li>)}
                </ul>
            </div>
        </div>
    )
}
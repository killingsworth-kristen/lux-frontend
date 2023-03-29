import React, {useState} from 'react'
import './style/DataSetSelector.css'


export default function DataSetSelector (dataSetArr) {
    // state declarations
    const [displayItems, setDisplayItems] = useState('25 items')
    const [source, setSource] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [dataSetOption, setDataSetOption] = useState(1)

    // global variables
    const displayOptions = [
        {
            key: 1,
            label: '25 items',
            value: '25 items'
        },
        {
            key: 2,
            label: '50 items',
            value: '50 items'
        },
        {
            key: 3,
            label: '75 items',
            value: '75 items'
        },
        {
            key: 4,
            label: '100 items',
            value: '100 items'
        },
    ]
    let dataSetOptions = []
    for (let i=0; i<dataSetArr.dataSetArr.length; i++) {
        dataSetOptions.push(
            {
                key: `dataSetOption${dataSetArr.dataSetArr[i].dataSetCount}`,
                label: dataSetArr.dataSetArr[i].dataSetCount,
                value: dataSetArr.dataSetArr[i].dataSetCount,
            }
        )
    }

    const listArr = []


    // functions

    // source change function
    const handleSourceChange = (e) => {
        const sourceNum = e.target.textContent.split(' ')[1]
        console.log(sourceNum)
        setSource(parseInt(sourceNum))
        console.log('source changed')
    }

    // display number of items functions
    const makeListArr = () => {
        console.log(`makeListArr called`)
        const displayNum = displayItems.split(' ')[0]
        for (let i = 0; i < displayNum; i++) {
                listArr.push({key: `${source}-${i}`, element: `Source ${source} - list item ${(currentPage*parseInt(displayNum)-parseInt(displayNum))+1+i}`})
        }
    }

    const handleDisplayItems = (e) => {
        console.log(`${e.target.value} selected for display`)
        setDisplayItems(e.target.value)
    }

    // add data selector to data set
    const handleDataSetSelection = (e) => {
        setDataSetOption(e.target.value)
    }

    const handleAddSelector = () => {
        // TODO: 
    }

    // pagination functions
    const handlePageBack = () => {
        let newPage = currentPage - 1
        if (newPage === 0) {
            newPage = 5
            setCurrentPage(newPage)
            return;
        }
        setCurrentPage(newPage)
    }

    const handlePageForawrd = () => {
        let newPage = currentPage + 1
        if (newPage === 6) {
            newPage = 1
            setCurrentPage(newPage)
            return;
        }
        setCurrentPage(newPage)
    }

    const handleSpecificPageSelect = (e) => {
        const newPage = e.target.textContent
        setCurrentPage(parseInt(newPage))
    }

    return (
        <div className="data-set-selector-container">
            <h2 className='data-set-selector-title'>Select Data to Graph:</h2>
            <div className='data-selector-source-tabs-container'>
                <h3 className={source === 1 ? 'selected data-selector-source-tabs' : 'data-selector-source-tabs'} id='source-tab-1' onClick={handleSourceChange}>Source 1</h3>
                <h3 className={source === 2 ? 'selected data-selector-source-tabs' : 'data-selector-source-tabs'} id='source-tab-2' onClick={handleSourceChange}>Source 2</h3>
                <h3 className={source === 3 ? 'selected data-selector-source-tabs' : 'data-selector-source-tabs'} id='source-tab-3' onClick={handleSourceChange}>Source 3</h3>
            </div>
            <form className='display-num-items-form'>
                <label htmlFor='display-num-items'>Display Number of Items: </label>
                <select name='display-num-items' onChange={handleDisplayItems} value={displayItems}>
                    {displayOptions.map((option)=>
                        <option key={option.key} value={option.value}>{option.label}</option>
                    )}
                </select>
            </form>
            <div className='data-selector-source-list-container'>
                <ul id='source-1-ul'>
                    {makeListArr()}
                    {listArr.map((li)=>
                        <div key={`${li.key}-div`} className='list-item-div' >
                            <li key={li.key} className='list-item'>{li.element}</li>
                            <button className='list-item-button' onClick={handleAddSelector}>Add</button>
                            <form className='add-to-data-set-selection-form'>
                                <label htmlFor='add-to-data-set-selection'> to </label>
                                <select name='add-to-data-set-selection' onChange={handleDataSetSelection}>
                                    {dataSetOptions.map((option)=>
                                        <option key={option.key} value={option.value}>{option.label}</option>
                                    )}
                                </select>
                            </form>
                        </div>
                    )}
                </ul>
            </div>
            <div className='page-select-div'>
                        <button className='back-page-btn pagination-btn' onClick={handlePageBack}>&lt;</button>
                        <p className={currentPage === 1 ? 'selected page-select' : 'page-select'} onClick={handleSpecificPageSelect}>1</p>
                        <p className={currentPage === 2 ? 'selected page-select' : 'page-select'} onClick={handleSpecificPageSelect}>2</p>
                        <p className={currentPage === 3 ? 'selected page-select' : 'page-select'} onClick={handleSpecificPageSelect}>3</p>
                        <p className={currentPage === 4 ? 'selected page-select' : 'page-select'} onClick={handleSpecificPageSelect}>4</p>
                        <p className={currentPage === 5 ? 'selected page-select' : 'page-select'} onClick={handleSpecificPageSelect}>5</p>
                        <button className='forward-page-btn pagination-btn' onClick={handlePageForawrd}>&gt;</button>
                </div>
        </div>
    )
}
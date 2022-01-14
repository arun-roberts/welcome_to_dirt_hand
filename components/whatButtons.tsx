import type { What } from '../lib/types'

const WhatButtons = ({ setCounter, what }: {setCounter: (count: number) => void, what: What}) => {
    return (
        <ul className='what-buttons'>
            {
                what.map((record, i) => (
                    <li key={'r' + i} className='what-buttons__button'>
                        <button onClick={() => setCounter(i)}>{record.title}</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default WhatButtons
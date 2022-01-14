import type { What } from '../lib/types'

const WhatButtons = ({ setCounter, counter, what }: {setCounter: (count: number) => void, counter: number | any, what: What}) => {
    return (
        <div className='what__buttons'>
            {counter > 0 && <button className='what__buttons--prev' onClick={() => setCounter(counter - 1)}>{what[counter - 1].title}</button>}
            {counter < what.length - 1 && <button className='what__buttons--next' onClick={() => setCounter(counter + 1)}>{what[counter + 1].title}</button>}
        </div>
    )
}

export default WhatButtons
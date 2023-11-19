import React, { useEffect, useState } from 'react'
import eventBus from '../tools/EventBus'


export default function Router() {
    const [page, setPage] = useState('Check the menu')
    useEffect(() => {
        //only one time
        eventBus.subscribe('goto', (page) => {
            setPage(page)
        })
    }, [])
    return (
        <div className='container'>{page}</div>
    )
}

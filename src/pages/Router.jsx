import React, { useEffect, useState } from 'react'
import eventBus from '../tools/EventBus'
import Landing from './landing/Landing'


export default function Router() {
    const [page, setPage] = useState(Landing)
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

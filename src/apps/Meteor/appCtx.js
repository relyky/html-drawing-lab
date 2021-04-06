import React, { useState, useEffect, useRef } from 'react'
//import clsx from 'clsx'
import styles from './meteor.module.css'

const meteorStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: 'yellow',
    transition: 'transform 2s'
}

const moveStyle = {
    transform: 'translate(835px,35px)'
}

export default function MeteorStage() {
    const [meteorList, setMeteorList] = useState([])
    const [sn, setSn] = useState(1)

    function deQueueMeteor() {
        setMeteorList(queue => {
            const [shifted, ...dequeue] = queue
            return dequeue
        })  
    }

    function fire() {
        setSn(sn => sn+1)
        setMeteorList(queue => [...queue, <Meteor key={sn} sn={sn} />])
        setTimeout(deQueueMeteor, 2100)
    }

    return (
        <div className={styles.stage}>
            <h2>Meteor:{sn} ({meteorList.length})</h2>
            <button onClick={fire}>fire</button>

            {meteorList.map(E => E)}

        </div>
    )
}

//------------------

function Meteor({sn}) {
    const [f_move, setMoveFlag] = useState(false)
    const [f_moved, setMoved] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setMoveFlag(true)
        }, 100);
    }, [])

    useEffect(() => {
        if (f_move) {
            setTimeout(() => {
                setMoved(true)
            }, 2000)
        }
    }, [f_move])

    return (
        <React.Fragment>
            {!f_moved && <div style={Object.assign({}, meteorStyle, f_move && moveStyle)}>{sn}</div>}
        </React.Fragment>
    )
}

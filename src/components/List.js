import React from 'react'

export default function List(props){
    
    const elements = props.data.map(items => {
        return(
            <div className='list-container'>
                <div className='ind-list'>
                    <p>{items}</p>
                    <i class="fa-solid fa-trash-can" onClick={()=>props.remove(items)}></i>
                </div>
            </div>
        )
    })

    return(
        props.data.length===0?
        <p className='list-info'>Add some task to your ToDo list</p>
        :
        <div>
            {elements}
        </div>
    )
}

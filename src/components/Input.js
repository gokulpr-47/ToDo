import React from 'react'

export default function Input(props){
    function clicked(event){
        props.value(document.getElementById('input-todo').value)
        document.getElementById('input-todo').value = "";
        event.preventDefault();
    }
    return(
        <div>
            <form action="javascript:void(0)">
                <input className='input-todo' id="input-todo" type="text" />
                <button className='add-todo' onClick={()=>clicked()} type="submit">+</button>
            </form>
        </div>
    )
}
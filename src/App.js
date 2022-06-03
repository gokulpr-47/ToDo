import React from 'react'
import Input from './components/Input.js'
import List from './components/List.js'

export default function App(){
    const [items, setItems] = React.useState(()=>JSON.parse(localStorage.getItem('items'))||[])

    React.useEffect(() => {
        localStorage.setItem('items',JSON.stringify(items))
    },[items])

    function value(inputValue){
        if(inputValue.length!==0)
            setItems(prevState=>[...prevState,inputValue]);
    }

    function remove(item){
        setItems(prevState=> prevState.filter(items=>items!==item))
    }

    console.log(items)

    return(
        <div class="container">
            <div class='contents'>
                <h1>ToDo</h1>
                <Input
                    value={value}
                />
                <List
                    data={items}
                    remove={remove}
                />
            </div>
        </div>
    )
}
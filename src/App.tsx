import React, {ChangeEvent, useState} from 'react';

function App() {

    const [likes, setLikes] = useState(5)

    const [value, setValue] = useState('Input text')

    const increment = () => setLikes(state => state + 1)
    const decrement = () => setLikes(state => state - 1)

    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className="App">
            <h1>{likes}</h1>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
            <div>
                <input type="text" value={value} onChange={onInputHandler}/>
            </div>
        </div>
    )
}

export default App;
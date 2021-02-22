import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {joke_url_name, joke_url_number} from '../api'

const Home = () => {
    const [inputName, setInputName] = useState('')
    const [inputLastName, setInputLastName] = useState('')
    const [inputNumber, setInputNumber] = useState('')
    const [jokeList, setJokeList] = useState([])
    const [randomType, setRandomType] = useState('name')

    useEffect(() => {
        const load = async () => {
           const result =  await axios.get(joke_url_number(''))

           setJokeList([result.data.value])
        }
        load()
    }, [])

    const getJokeByName = async () => {

        const result =  await axios.get(joke_url_name(inputName, inputLastName))
        setJokeList([result.data.value])
        setInputName('')
        setInputLastName('')
        console.log(jokeList)
        console.log(result.data.value.joke)
    }

    const getMultipleJoke = async () => {

        const result =  await axios.get(joke_url_number(inputNumber))
        setJokeList(result.data.value)
        setInputNumber(1)
        console.log(jokeList)
        console.log(result.data.value.joke)
    }
    return (
        <div className="container">
            {jokeList.length > 0 ? jokeList.map(item => <p>{item.joke}</p>): ''}
            <select name="cars" id="cars" onChange={e => setRandomType(e.target.value)} value={randomType}>
                <option value="name">Name</option>
                <option value="number">Random Number</option>
            </select>
            {randomType === 'name' ? 
            <div className="input-box">
                <label htmlFor="input-name">Name</label>
                <input name='input-name' type="text" onChange={e => setInputName(e.target.value)} value={inputName}/>
                <label htmlFor="input-last-name">last</label>
                <input name='input-last-name' type="text" onChange={e => setInputLastName(e.target.value)} value={inputLastName}/>
                <button onClick={getJokeByName}>submit</button>
            </div>
            :
            <div className="input-box">
                <label htmlFor="input-name">Name</label>
                <input name='input-number' type="number" onChange={e => setInputNumber(e.target.value)} value={inputNumber}/>
            <button onClick={getMultipleJoke}>submit</button>
            </div>
            }

        </div>
    )
}

export default Home;
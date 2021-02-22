import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
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
        <Container>
            <JokeContainer>
            {jokeList.length > 0 ? jokeList.map(item => <Joke>{item.joke}</Joke>): ''}
            </JokeContainer>
            <InputContainer>
                <select name="cars" id="cars" onChange={e => setRandomType(e.target.value)} value={randomType}>
                    <option value="name">Name</option>
                    <option value="number">Random Number</option>
                </select>
                {randomType === 'name' ? 
                <InputBox>
                    <label htmlFor="input-name">name</label>
                    <input name='input-name' type="text" placeholder="John" onChange={e => setInputName(e.target.value)} value={inputName}/>
                    <label htmlFor="input-last-name">last name</label>
                    <input name='input-last-name' type="text" placeholder='Joe' onChange={e => setInputLastName(e.target.value)} value={inputLastName}/>
                    <button onClick={getJokeByName}>submit</button>
                </InputBox>
                :
                <div className="input-box">
                    <label htmlFor="input-name">Input number</label>
                    <input name='input-number' type="number" onChange={e => setInputNumber(e.target.value)} value={inputNumber}/>
                <button onClick={getMultipleJoke}>submit</button>
                </div>
                }
            </InputContainer>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(90deg,#EFEEF1, #F2FFDC);
`

const JokeContainer = styled.div`
    margin: 2rem;
    padding: 2rem;
`

const InputContainer = styled.div`
    display:flex;
`

const Joke = styled.p`
    display:flex;
    justify-content: center;
    font-size: 1.2rem;
    text-align:center;
`
const InputBox = styled.div`
    background-color: #fff;
    padding: .5rem;
`
export default Home;
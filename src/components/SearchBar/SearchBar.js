import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card'
import './SearchBar.scss'

const SearchBar = (props) => {
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const changeHandler = (e) => {
        setName(e.target.value)
    }

    const clickHandler = (e) => {
        setName('')
        let filter = []
        if (name === '' || name === ' ') {
            alert('Enter some value')
        } else {
            data.map((dt) => {
                if (dt.name.toLowerCase().startsWith(name.toLowerCase())) {
                    filter.push(dt)
                } else if (dt.email.toLowerCase().startsWith(name.toLowerCase())) {
                    filter.push(dt)
                } else if (dt.website.toLowerCase().startsWith(name.toLowerCase())) {
                    filter.push(dt)
                }
                return filter
            })
        }
        setFilterData(filter)
    }

    return (
        <div className='body'>
            <input type='text'
                placeholder='Write here...'
                className='searchBox'
                value={name}
                onChange={(e) => changeHandler(e)}
                aria-label='searchBox'
                data-testid='search-box' />
            <span className='searchBtn' onClick={clickHandler} data-testid='search-button'>Search</span>
            <div className='searchCard' data-testid='card'>
                <span></span>
                {
                    filterData.length > 0 ?
                        filterData.map((d1) => <Card data={d1} key={d1.id} />)
                        : data.length > 0 ? data.map((d1) => <Card data={d1} key={d1.id} />) : null
                }
            </div>

        </div>
    )
}

export default SearchBar
import React from 'react'
import styles from './Search.module.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Search = () => {
    const [term,setTerm] = useState('')
    const navigate = useNavigate();
    const {searchTerm} =  useParams()
    const search = async()=>
        {
            term ? navigate(`/search/${term}`) : navigate('/')
        }
  return (
    <div className={styles.container}>
      <input type='text' placeholder = 'Search Boss Burger!' onKeyUp={e=>e.key ==='Enter' && search()} defaultValue={searchTerm} onChange={(e)=> setTerm(e.target.value)} />
      <button className={styles.btn } onClick={search}>Search</button>
    </div>
  )
}

export default Search

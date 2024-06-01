import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Search.module.css'

const Search = ({ searchRoute = '/search/', defaultRoute = '/menu', margin }) => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const { searchTerm } = useParams()

  const search = () => {
    term ? navigate(searchRoute + term) : navigate(defaultRoute)
  }

  useEffect(() => {
    setTerm(searchTerm ?? '')
  }, [searchTerm])

  return (
    <div className={styles.container} style={{ margin }}>
      <input
        type="text"
        placeholder="Search Boss Burger!"
        onKeyUp={e => e.key === 'Enter' && search()}
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button className={styles.btn} onClick={search} style={{ marginTop: 0 }}>Search</button>
    </div>
  )
}

export default Search

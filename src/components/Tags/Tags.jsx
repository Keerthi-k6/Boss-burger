import React from 'react'
import styles from './Tags.module.css'
import { Link } from 'react-router-dom'
const Tags = ({tags,forFoodPage,color}) => {
  return (
    <div className={styles.container}
    style={{justifyContent: forFoodPage ? 'start' : 'center'}}
    >
        {
            tags.map((tag)=>(
                <Link to = {`/tag/${tag.name}`} key={tag.name} style={{backgroundColor: color}}>{tag.name} {!forFoodPage && `(${tag.count})`}</Link>
            ))
        }
    </div>
  )
}

export default Tags

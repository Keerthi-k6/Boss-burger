import React from 'react'
import styles from './Tags.module.css'
import { Link } from 'react-router-dom'
const Tags = ({tags,forFoodPage}) => {
  return (
    <div className={styles.container}
    style={{justifyContent: forFoodPage ? 'start' : 'center'}}
    >
        {
            tags.map((tag)=>(
                <Link to = {`/tag/${tag.name}`} key={tag.name}>{tag.name} {!forFoodPage && `(${tag.count})`}</Link>
            ))
        }
    </div>
  )
}

export default Tags

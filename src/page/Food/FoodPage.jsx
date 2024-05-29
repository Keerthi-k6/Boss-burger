import React, { useEffect, useState } from 'react'
import styles from './FoodPage.module.css'
import { useParams } from 'react-router-dom'
import { getById } from '../../services/foodService'
import StarRating from '../../components/starRating/StarRating'
import Tags from '../../components/Tags/Tags'
const FoodPage = () => {
    const [food,setfood] = useState({})
    const {id} = useParams()
    useEffect(()=>
    {
        getById(id).then(food=> setfood(food))
    },[id])
  return (
    <>
      {
        food && (
            <section className={styles['food-wrapper']} >
            <div className={`${styles['food-container']} innerwidth paddings flexStart`} >
              {/* leftside */}
              <div className={styles['food-image']} >
                <img src={food.imageUrl} alt={food.name} width={400}/>
              </div>
              {/* rightside */}
              <div className={styles['food-desc']}>
                <div className={styles['food-title']+' flexStart' } style={{justifyContent: 'space-between'}}>
                <h2>{food.name}</h2>
                <span className= {`${styles['fav']} ${food.favorite? '':styles['not']}`}>
                ❤
                </span>
                </div>
                <div className={styles['rating']}>
                    <StarRating rating={food.stars} />
                </div>
                <div className={styles['tags']}>
                    {
                        food.tags && <Tags tags ={food.tags.map(tag=>({name: tag}))} forFoodPage={true} color={'var(--card-color)'}/>
                    }
                </div>
                <div className={styles['food-p']}>
                    <div className={styles['card-content']}>
                  <strong>Cook Time: {food.cookTime} min</strong>
                  <p className={styles['price']}>₹{food.price}</p>
                  </div>
                  <p>{food.des}</p>
                </div>
                <button className={styles['food-btn']+ ' button'}>Add to Cart</button>
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}

export default FoodPage

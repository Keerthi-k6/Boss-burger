import React, { useEffect, useState } from 'react'
import styles from './FoodPage.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { getById } from '../../services/foodService'
import StarRating from '../../components/starRating/StarRating'
import Tags from '../../components/Tags/Tags'
import Title from '../../components/Title/Title'
import { useCart } from '../../hooks/useCart'
import NotFound from '../../components/NotFound/NotFound'
const FoodPage = () => {
    const [food,setfood] = useState({})
    const {id} = useParams()
    const {addToCart} = useCart()
    const navigate = useNavigate()
    const handleAddToCart = ()=>{
        addToCart(food)
        navigate('/cart')
    }
    useEffect(()=>
    {
        getById(id).then(food=> setfood(food))
        console.log(food.name)
    },[id])
  return (
    <>
      {
        !food ? (<NotFound message={'Food not found !'} linkRoute={'/'} linkText={'Back to HomePage'}/>) : (
            <section className={styles['food-wrapper']} >
            <div className={`${styles['food-container']} innerwidth paddings flexStart`} >
              {/* leftside */}
              <div className={styles['food-image']} >
                <img src={food.imageUrl} alt={food.name} width={400}/>
              </div>
              {/* rightside */}
              <div className={styles['food-desc']}>
                <div className={styles['food-title']+' flexStart' } style={{justifyContent: 'space-between'}}>
                <Title Title={food.name} color={'var(--black)'} fontSize={'2rem'}/>
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
                <button className={styles['food-btn']+ ' button'} onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}

export default FoodPage

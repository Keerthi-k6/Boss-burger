import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './FoodsAdmin.module.css'
import Title from '../../components/Title/Title'
import { deleteById, getAll, search } from '../../services/foodService'
import NotFound from '../../components/NotFound/NotFound'
import Search from '../../components/Search/Search'
import {toast} from 'react-toastify'
export default function FoodsAdmin() {
  const [foods, setFoods] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    loadFoods()
  }, [searchTerm])

  const loadFoods = async () => {
    const foods = searchTerm ? await search(searchTerm) : await getAll()
    setFoods(foods)
  }

  const FoodsNotFound = () => {
    if (foods && foods.length > 0) return null
    return searchTerm ? (<NotFound linkText={'show All'} linkRoute={'/admin/foods'} />) : <NotFound linkText={'Back to Dashboard'} linkRoute={'/dashboard'} />
  }
   const deleteFood = async food =>
    {
        const confirmed = window.confirm(`Are you sure you want to delete ${food.name} ?`)
        if(!confirmed) return
        await deleteById(food.id)
        toast.success(`${food.name} deleted successfully`)
        setFoods(foods.filter(f => f.id !== food.id))
    }
  return (
    <div className={styles.container + ' innerwidth paddings flexColCenter'}>
        <Title Title='Manage Food' color='var(--black)' fontSize='2rem' />
      <div className={styles.list}>
        <Search searchRoute={'/admin/foods/'} defaultRoute={'/admin/foods'} />
        <Link to='/admin/addFood' className={styles.add_food + ' button'}>Add food +</Link>
        <FoodsNotFound />
        {
            foods && foods.map(food => (
                <div key={food.id} className={styles.list_item}>
                    <img src={food.imageUrl} alt={food.name} className={styles.image} width={100}/>
                    <Link to={`/food/${food.id}`} className={styles.name}>{food.name}</Link>
                    <p className={styles.price}>₹{food.price}</p>
                    <div className={styles.actions}>
                        <button className={styles['btn']} style={{backgroundColor: 'rgb(16, 215, 109)'}}>
                        <Link to={`/admin/editFood/${food.id}`} >Edit</Link>
                        </button>
                        <button  className={styles['btn']} style={{backgroundColor: 'red'}}>
                        <Link onClick={() => deleteFood(food)}>Delete</Link>
                        </button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

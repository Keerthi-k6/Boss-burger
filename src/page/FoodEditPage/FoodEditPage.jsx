import React, { useEffect, useState } from 'react'
import styles from './FoodEditPage.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { add, getById } from '../../services/foodService'
import Title from '../../components/Title/Title'
import InputContainer from '../../components/InputContainer/InputContainer'
import Input from '../../components/input/Input'
import { uploadImage } from '../../services/uploadService'
import { update } from '../../services/foodService'
import { toast } from 'react-toastify'
const FoodEditPage = () => {
    const {foodId} = useParams()
    const [imageUrl, setImageUrl] = useState()
    const navigate = useNavigate()
    const isEditMode = !!foodId
    const {
        handleSubmit,
        register,
        formState: {errors},
        reset
    } = useForm()
    useEffect(()=>
    {
        if(!isEditMode) return;
         getById(foodId).then(food => {
            if(!food) return;
            reset(food)
            setImageUrl(food.imageUrl)
         })
    },[foodId])
    const submit =async (foodData) => {
       const food = {...foodData, imageUrl}
       if(isEditMode) 
        {
            await update(food)
            toast.success(`Food "${ food.name}" Updated successfully`)
            navigate('/admin/foods')
            return 
        }
        const newFood = await add(food);
        toast.success(`Food "${ newFood.name}" added successfully`)
        navigate(`/admin/foods`,{replace:true})

        
    }
    const upload = async(e) => {
        setImageUrl(null)
        const imageUrl = await uploadImage(e)
        setImageUrl(imageUrl)
    }
  return (
    <div className={styles['container'] + ' innerwidth paddings flexColCenter'}>
        <Title Title={isEditMode ? 'Edit Food' : 'Add Food'} color="var(--black)" fontSize="2rem" />
        <div className={styles['content'] + ' innerwidth paddings flexColCenter'}>
            <form onSubmit={handleSubmit(submit)} noValidate className={styles['form'] + ' flexColCenter'}>
                    <InputContainer label="Select an Image">
                             <input type="file" onChange={upload}  accept='image/jpeg' className='paddings'/>
                    </InputContainer>
                    {
                        imageUrl && <a href={imageUrl} target="_blank" className={styles['image-link']}>
                            <img src={imageUrl} alt="Uploaded" className={styles['image']}  width={300}/>
                        </a>
                    }
                    <Input type={"text"} label="Name" {...register('name', {required: true , minLength: 5})} error={errors.name} />
                    <Input type={"number"} label="Price" {...register('price', {required: true})} error={errors.price} />
                    <Input type={"text"} label="Tags" {...register('tags', {required: true})} error={errors.price} />
                    <Input type={"text"} label="Description" {...register('des', {required: true , minLength: 10})} error={errors.des} />
                    <Input type={"text"} label="Cook Time" {...register('cookTime', {required: true})} error={errors.des} />

                    <button className={styles['btn']}type='submit'>{isEditMode ? 'Update' : 'Add'}</button>

            </form>

        </div>
    </div>
  )
}

export default FoodEditPage

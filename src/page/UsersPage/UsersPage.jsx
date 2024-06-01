import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAll, toggleBlock } from '../../services/userService'
import styles from './UsersPage.module.css'
import Title from '../../components/Title/Title'
import { useAuth } from '../../hooks/useAuth'
import Search from '../../components/Search/Search'
const UsersPage = () => {
    const [users, setUsers] = useState([])
    const { searchTerm } = useParams()
    const auth = useAuth()

    useEffect(() => {
        loadUsers()
    }, [searchTerm])

    const loadUsers = async () => {
        const users = await getAll(searchTerm)
        setUsers(users)
        console.log(users)
    }

    const handleToggleBlock = async (userId) => {
            const isBlocked =await toggleBlock(userId)
            setUsers(oldUsers=>
                oldUsers.map(user=>user.id===userId?{...user,isBlocked}:user)
            )
    }
    const truncateText = (text, maxLength) => {
        if (!text) return '' 
        if (text.length <= maxLength) return text
        return text.slice(0, maxLength) + '...'
    }

    return (
        <div className={styles.container + ' innerwidth paddings flexCenter'} >
                <Title Title='Manage Users' color='var(--black)' fontSize='2rem' />
            <div className={styles.list}>
                <Search searchRoute={'/admin/users/'} defaultRoute={'/admin/users'}  placeholder='Search Boss Burger Users! '/>
                <div className={styles.list_items+' innerwidth paddings'}>
                    <strong>Name</strong>
                    <strong>Email</strong>
                    <strong>Address</strong>
                    <strong>Admin</strong>
                    <strong>Actions</strong>
                </div>
                {
                    users && users.map(user => (
                        <div className={styles.list_item + ' innerwidth paddings'} key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{truncateText(user.address, 10)}</p>
                            <p>{user.isAdmin ? '✅' : '❌'}</p>
                            <p className={styles.actions}>
                                <button className={styles.btn}><Link to={`/admin/editUser/${user.id}`}>Edit</Link></button>
                                {
                                    auth.user.id !== user.id &&(
                                    <button className={styles.btn} style={{ backgroundColor: user.isBlocked ? 'red' : '' }}>
                                    <Link onClick={() => handleToggleBlock(user.id)}>{user.isBlocked ? 'Unblock' : 'Block'}</Link>
                                    </button>
                                )}
                            </p>
                        </div>
                    ))
                }
            
            </div>
        </div>
    )
}

export default UsersPage

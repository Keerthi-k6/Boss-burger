import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './Dashboard.module.css';
import { FaShoppingBag } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const allItems = [
    {
       id: 1,
       title: 'Orders',
       url: '/orders',
       icon: <FaShoppingBag />,
    },
    {
        id: 2,
        title: 'Profile',
        url: '/profile',
        icon: <FaRegUserCircle />,
    },
    {
        id: 3,
        title: 'Users',
        url: '/admin/users',
        forAdmin: true,
        icon: <FaUsers />,
    },
    {
        id: 4,
        title: 'Food',
        url: '/admin/foods',
        forAdmin: true,
        icon: <IoFastFoodOutline />,
    }
];

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className={styles.container}>
            <div className={styles.menu + ' paddings flexCenter innerwidth'}>
                {
                    allItems.filter(item => user.isAdmin || !item.forAdmin)
                    .map(item => (
                        <div key={item.id} className={styles.item}>
                            <Link to={item.url} style={{ color: 'var(--yellow)', textDecoration: 'none', backgroundColor: 'var(--black)' }}>
                                {item.icon}
                                <p>{item.title}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;

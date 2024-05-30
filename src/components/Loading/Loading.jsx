import React from 'react';
import styles from './Loading.module.css';
import { useLoading } from '../../hooks/useLoading';
import logo from '../../assets/logo.jpeg';

const Loading = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className={styles.spinnerContainer} style={{position: 'fixed'}}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loading;

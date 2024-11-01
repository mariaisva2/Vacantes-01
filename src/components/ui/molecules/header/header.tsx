import React from 'react';
import Myh1 from '@/components/ui/atoms/h1/h1'; 
import styles from './style.module.scss'; 

const MyHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Myh1>Panel de Administración</Myh1>
    </header>
  );
};

export default MyHeader;

import React, { ReactNode } from 'react';
import styles from './style.module.scss';

interface MySelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  className?: string;
  children: ReactNode;
}

const MySelect: React.FC<MySelectProps> = ({ id, name, value, onChange, className, children }) => {
  return (
    <select 
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`${styles.mySelect} ${className || ''}`}
    >
      {children}
    </select>
  );
};

export default MySelect;

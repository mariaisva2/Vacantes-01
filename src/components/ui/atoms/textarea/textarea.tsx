import React from 'react';
import styles from './style.module.scss';

interface MyTextareaProps {
  id?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string; 
}

const MyTextarea: React.FC<MyTextareaProps> = ({ id, name, placeholder, value, onChange, className }) => {
  return (
    <textarea 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className={`${styles.myTextarea} ${className || ''}`} 
    />
  );
};

export default MyTextarea;

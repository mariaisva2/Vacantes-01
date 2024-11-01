import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  className?: string; 
}

const Myh1: React.FC<MyComponentProps> = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

export default Myh1;

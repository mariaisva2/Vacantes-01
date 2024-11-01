import React, { ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
  className?: string; 
}

const MyH3: React.FC<MyComponentProps> = ({ children, className }) => {
  return <h3 className={className}>{children}</h3>;
};

export default MyH3;

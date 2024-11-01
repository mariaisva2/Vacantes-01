import React, { ReactNode } from 'react';
import styles from './InfoCard.module.scss';

interface InfoCardProps {
  children: ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ children, className }) => {
  return <div className={`${styles.infoCard} ${className}`}>{children}</div>;
};

export default InfoCard;

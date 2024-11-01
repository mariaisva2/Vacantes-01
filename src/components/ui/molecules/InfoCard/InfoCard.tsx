import React from 'react';
import Myh1 from '../../atoms/h1/h1';
import MyH3 from '../../atoms/h3/h3';
import CardActions from '../../molecules/CardActions/CardActions';
import { ICompany } from "@/models/compani.models";
import { IVacants } from "@/models/vacantes.models ";
import styles from './InfoCard.module.scss';

interface InfoCardProps {
  data: ICompany | IVacants;
  onEdit: (id: string) => void;  
  onDelete: (id: string) => void; 
}

const InfoCard: React.FC<InfoCardProps> = ({ data, onEdit, onDelete }) => {
  const isVacant = 'title' in data;

  const title = isVacant ? data.title : data.name;
  const subtitle1 = isVacant ? data.company.name : data.location;
  const subtitle2 = isVacant ? data.company.location : `Contacto: ${data.contact}`;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Myh1 className={styles.title}>{title}</Myh1>
        <MyH3 className={styles.subtitle}>{subtitle1}</MyH3>
        <MyH3 className={styles.subtitle}>{subtitle2}</MyH3>
      </div>
      <CardActions 
        onEdit={() => onEdit(data.id)} 
        onDelete={() => onDelete(data.id)} 
      />
    </div>
  );
};

export default InfoCard;

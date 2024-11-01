import React from 'react';
import { PiTrashBold } from 'react-icons/pi';
import { MdOutlineEdit } from "react-icons/md";
import Button from '../../atoms/button/button';
import styles from './CardActions.module.scss';

interface CardActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function CardActions({ onEdit, onDelete }: CardActionsProps) {
  return (
    <div className={styles.actions}>
      <Button className={styles.button} onClick={onEdit}>
        <MdOutlineEdit size={20} className={styles.editIcon} />
        <span className={styles.srOnly}>Editar</span>
      </Button>
      <Button className={styles.button} onClick={onDelete}>
        <PiTrashBold size={20} className={styles.deleteIcon} />
        <span className={styles.srOnly}>Eliminar</span>
      </Button>
    </div>
  );
}
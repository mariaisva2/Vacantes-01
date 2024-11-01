
'use client';
import React, { useState } from 'react';
import Myh1 from '@/components/ui/atoms/h1/h1';
import AddButton from '@/components/ui/molecules/AddButton/AddButton';
import ModalForm from '@/components/ui/molecules/ModalForm/ModalForm';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  activeTab: 'vacantes' | 'companias';
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeTab }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <header className={styles.hero}>
      <div className={styles.letra}>
        <Myh1>{activeTab === 'vacantes' ? 'Vacantes' : 'Compañías'}</Myh1>
      </div>
      <div className={styles.actionButtons}>
        <AddButton activeTab={activeTab} onClick={handleButtonClick} />
      </div>
      <ModalForm isOpen={showForm} onClose={closeModal} activeTab={activeTab} />
    </header>
  );
};

export default HeroSection;

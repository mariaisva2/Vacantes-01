
import React from 'react';
import { CirclePlus } from "lucide-react";
import Button from '@/components/ui/atoms/button/button';

interface AddButtonProps {
  activeTab: 'vacantes' | 'companias';
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ activeTab, onClick }) => {
  const getActiveButtonColor = () => {
    return activeTab === 'vacantes' ? '#A855F7' : '#EC4899';
  };

  return (
    <Button
      variant="agregar"
      style={{ backgroundColor: getActiveButtonColor() }}
      onClick={onClick}
    >
      <CirclePlus size={16} />
      {activeTab === 'vacantes' ? 'Agregar Vacante' : 'Agregar Compañía'}
    </Button>
  );
};

export default AddButton;

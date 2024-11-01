
import React from 'react';
import Modal from '@/components/ui/atoms/modal/modal';
import AddProductForm from '@/components/ui/oirganismo/from/from';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'vacantes' | 'companias';
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, activeTab }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <AddProductForm
      activeTab={activeTab}
      onClose={onClose} 
    />
  </Modal>
  );
};

export default ModalForm;

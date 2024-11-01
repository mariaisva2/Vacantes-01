
import React from 'react';
import Label from '@/components/ui/atoms/label/label';
import Input from '@/components/ui/atoms/input/input';
import Textarea from '@/components/ui/atoms/textarea/textarea';
import Select from '@/components/ui/atoms/select/select';
import './group.scss'; 


interface FormGroupProps {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: Array<{ value: string, label: string }>;
  className?: string;
  name:string;
}

const FormGroup: React.FC<FormGroupProps> = ({ id, label, type, value, onChange, placeholder, options, className }) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      {type === 'text' && (
        <Input id={id} name={id} type="text" placeholder={placeholder} value={value} onChange={onChange} className='input' />
      )}
      {type === 'textarea' && (
        <Textarea id={id} name={id} placeholder={placeholder} value={value} onChange={onChange} />
      )}
      
      {type === 'select' && (
        <Select id={id} name={id} value={value} onChange={onChange}>
          {options?.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default FormGroup;

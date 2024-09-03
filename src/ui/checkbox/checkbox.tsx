import { ChangeEvent } from 'react';

type CheckboxProps = {
  checked?: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, handleChange }) => {
  return <input type="checkbox" checked={checked} onChange={(e) => handleChange(e)} />;
};

export default Checkbox;

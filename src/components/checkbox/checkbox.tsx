type CheckboxProps = {
  checked?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked = false }) => {
  return <input type="checkbox" checked={checked} />;
};

export default Checkbox;

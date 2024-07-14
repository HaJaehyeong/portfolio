type HeaderTextProps = {
  text: string;
  isSelected: boolean;
  isHeader?: boolean;
};

const HeaderText: React.FC<HeaderTextProps> = ({ text, isSelected, isHeader = false }) => {
  return <div>{'_' + text}</div>;
};

export default HeaderText;

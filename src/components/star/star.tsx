import { RiStarFill, RiStarLine } from '@remixicon/react';

type StarProps = {
  size?: number;
  fill?: boolean;
};

const Star: React.FC<StarProps> = ({ size = 18, fill = false }) => {
  return fill ? (
    <RiStarFill color="var(--secondary-gray)" size={size} />
  ) : (
    <RiStarLine color="var(--secondary-gray)" size={size} />
  );
};

export default Star;

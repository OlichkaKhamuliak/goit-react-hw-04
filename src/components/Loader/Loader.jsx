import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({ className }) => {
  return (
    <div className={className}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#ffb732"
        strokeWidth="5"
        left="50%"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

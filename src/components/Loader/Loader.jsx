import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#7D7495"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{
          justifyContent: 'center',
        }}
        wrapperClass=""
      />
    </div>
  );
};

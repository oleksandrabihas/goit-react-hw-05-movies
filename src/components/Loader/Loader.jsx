import { Circles } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Circles
          height="80"
          width="80"
          color="#8e26bb82"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          wrapperClass=""
          visible={true}
        />

    );
};

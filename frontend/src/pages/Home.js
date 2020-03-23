import React, { Suspense } from 'react';
import { fetchDataSuspense } from '../API/suspenseAPI';

import Spinner from '../spinner/Spinner';
import Box from '../components/Box';

import { H1, DivParent } from './style/Home';

const resource = fetchDataSuspense();
const Home = () => {
  const datas = resource.data.read();
  return (
    <>
      <H1>TODO MERN-STACK</H1>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <DivParent>
          {datas.map(item => (
            <Box
              key={item.id}
              image={item.image}
              name={item.title}
              title={item.title}
              description={item.desc}
            />
          ))}
        </DivParent>
      </Suspense>
    </>
  );
};

export default Home;

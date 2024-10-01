import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { HomePage } from 'components/pages/HomePage';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h1>Loading Page...</h1>}></Suspense>
    </div>
  );
};

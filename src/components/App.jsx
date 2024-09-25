import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './Shared/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './Shared/SharedLayout';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

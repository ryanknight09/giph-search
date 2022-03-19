import { FC } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home/home';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<div>404 not found!</div>} />
    </Routes>
  );
};

export default AppRoutes;

import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout.jsx';


const LazyHome = lazy(() => import('../pages/Home'));
const LazyCatalog = lazy(() => import('../pages/Catalog'));
const LazyFavorites = lazy(() => import('../pages/Favorites.jsx'))

const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<LazyHome />} />
        <Route path="catalog" element={<LazyCatalog />} />
        <Route path="favorites" element={<LazyFavorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
);

export default App
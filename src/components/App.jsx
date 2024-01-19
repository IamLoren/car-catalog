import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


const LazyHome = lazy(() => import('../pages/Home'));
const LazyCatalog = lazy(() => import('../pages/Catalog'));
const LazyFavorites = lazy(() => import('../pages/Favorites.jsx'))

const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/catalog" element={<LazyCatalog />} />
        <Route path="/favorites" element={<LazyFavorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
);

export default App
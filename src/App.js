import { Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';

export function App() {
  return (
    <>
      <NormalizeStyles />
        <Routes>
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="/" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}
import { Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/detalhes/:id" element={<Details />} />
      <Route path="/" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
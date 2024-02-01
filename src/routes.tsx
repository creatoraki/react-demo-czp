import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
// 导入其他页面组件...

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
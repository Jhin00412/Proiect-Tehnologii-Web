import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ProprietatiPage from './pages/ProprietatiPage.jsx';
import ProprietateDetaliuPage from './pages/ProprietateDetaliuPage.jsx';
import DesprePage from './pages/DesprePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<ProprietatiPage />} />
                <Route path="/proprietati/:id" element={<ProprietateDetaliuPage />} />
                <Route path="/despre" element={<DesprePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

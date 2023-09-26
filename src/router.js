import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Create from './pages/Create';

// npx create-react-app 7-jsx
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'watch',
                element: <Watch />,
            },
        ],
    },
    {
        path: '/create',
        element: <Create />,
    },
]);

export default router;

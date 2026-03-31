import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Wishlist } from './pages/Wishlist';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';
import { OrderSuccess } from './pages/OrderSuccess';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      // Main Pages
      { index: true, Component: Home },
      { path: 'category/:slug', Component: Category },
      { path: 'product/:slug', Component: ProductDetail },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'profile', Component: Profile },
      { path: 'wishlist', Component: Wishlist },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogDetail },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },

      // Supporting Pages
      { path: 'search', Component: Search },
      { path: 'order-success', Component: OrderSuccess },
      { path: 'forgot-password', Component: ForgotPassword },
      { path: 'reset-password', Component: ResetPassword },

      // 404
      { path: '*', Component: NotFound },
    ],
  },
]);

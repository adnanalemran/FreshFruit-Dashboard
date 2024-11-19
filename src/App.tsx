import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

import Chart from './pages/Chart';
import Greetings from './pages/Dashboard/ECommerce';

import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import ProductList from './pages/Product/ProductList';
import AddProduct from './pages/Product/AddProduct';
import OrderList from './pages/Order-list/OrderList';
import DeleteProductList from './pages/Product/DeleteProductList';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Greetings Dashboard | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Greetings />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/product/list"
          element={
            <>
              <PageTitle title="Product list  | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <ProductList />
            </>
          }
        />
        <Route
          path="/product/add"
          element={
            <>
              <PageTitle title="Product list  | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <AddProduct />
            </>
          }
        /> <Route
          path="/product/DeleteProductList"
          element={
            <>
              <PageTitle title="Product list  | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <DeleteProductList />
            </>
          }
        />
        <Route
          path="/order-list"
          element={
            <>
              <PageTitle title="Product list  | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <OrderList />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | FreshFruit - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

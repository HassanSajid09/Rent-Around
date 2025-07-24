import AuthProvider from "./Context/AuthContext";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditProfile from "./Components/Profile/EditProfile";
import { useState } from "react";
import App from "./App";
import Home from "./Components/Layout/Home";
import Categories from "./Components/Pages/Categories";
import Promotion from "./Components/Pages/Promotion";
import Wishlist from "./Components/Pages/Wishlist";
import Cart from "./Components/Cart/Cart";
import Profile from "./Components/Profile/Profile";
import MyListing from "./Components/Pages/MyListing";
import AddToCart from "./Components/Cart/AddToCart";
import Dashboard from "./Components/Pages/Dashboard";
import SignInPage from "./Components/Layout/SignInPage";

export const IndexApp = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {},
    },
  });
  const [showSignIn, setShowSignIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <App />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/Categories",
      element: (
        <>
          <Categories />
        </>
      ),
    },
    {
      path: "/Wishlist",
      element: (
        <>
          <Wishlist />
        </>
      ),
    },
    {
      path: "/Promotion",
      element: (
        <>
          <Promotion />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Cart />
        </>
      ),
    },
    {
      path: `/product/:title`,
      element: (
        <>
          <AddToCart />
        </>
      ),
    },
    {
      path: "/profile",
      element: <ProtectedRoute />,
      children: [{ path: "/profile", element: <Profile /> }],
    },
    {
      path: "/sign-in",
      element: (
        <SignInPage showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      ),
    },
    {
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "my-listing",
      element: <MyListing />,
    },
  ]);
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
};

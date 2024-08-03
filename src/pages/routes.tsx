import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PrimaryLayout from "../layouts/primary-layout";
import About from "./about";
import CharactersListingPage from "./characters-listing";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <PrimaryLayout>
          <Outlet />
        </PrimaryLayout>
      }
      errorElement={<p>TODO Add a 404 error page.</p>}
    >
      <Route index path="/" element={<CharactersListingPage />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

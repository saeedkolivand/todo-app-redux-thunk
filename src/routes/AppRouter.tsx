import { HomeRoutes } from "pages/home/home.route";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "ui-components/loading/Loading";
import NotFound from "ui-components/notFound/NotFound";
import { Helmet } from "react-helmet";
import { AppRouterTypes } from "./appRouter.types";

export const appRoutes: AppRouterTypes[] = [
  ...HomeRoutes,
  {
    title: "404",
    element: <NotFound />,
    exact: true,
  },
];

const AppRouter: React.FC = () => (
  <Suspense fallback={<Loading loading />}>
    <BrowserRouter>
      <Routes>
        {appRoutes.map((item) => (
          <Route
            path={`${item.path || ""}/${item.exact && "*"}`}
            key={`route-${item.title}`}
            element={
              <>
                <Helmet>
                  <title>{item.title}</title>
                </Helmet>
                {item.element}
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRouter;

import React from "react";
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = React.lazy(
  () =>
    import(
      /* webpackPreload: true */
      /* webpackChunkName: "preload" */
      "./App"
    )
);
const root = document.getElementById('root');
if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <React.Suspense fallback="...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </React.StrictMode>
  )


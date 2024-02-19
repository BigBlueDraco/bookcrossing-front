import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { NavigationPages } from "./utils/navigationPages.enum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route
            path={`${NavigationPages["book-list"]}`}
            element={<div>{`${NavigationPages["book-list"]}`}</div>}
          />
          <Route
            path={`${NavigationPages["feed"]}`}
            element={<div>{`${NavigationPages["feed"]}`}</div>}
          />
          <Route
            path={`${NavigationPages["profile"]}`}
            element={<div>{`${NavigationPages["profile"]}`}</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

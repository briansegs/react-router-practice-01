import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, Blogs, Contact, NoPage } from "./pages";

const pages = [
  { path: "blogs", element: <Blogs /> },
  { path: "contact", element: <Contact /> },
  { path: "*", element: <NoPage /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

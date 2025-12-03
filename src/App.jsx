import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inicio from "./pages/Inicio/Inicio";
import Sobre from "./pages/Sobre/Sobre";
import Casos from "./pages/Casos/Casos";
import Recomendaciones from "./pages/Recomendaciones/Recomendaciones";
import Como from "./pages/Como/Como";
import Blog from "./pages/Blog/Blog";
import Recursos from "./pages/Recursos/Recursos";
import Contactos from "./pages/Contactos/Contactos";
import Post from "./pages/Post/Post";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="casos" element={<Casos />} />
          <Route path="recomendaciones" element={<Recomendaciones />} />
          <Route path="como" element={<Como />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<Post />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="contactos" element={<Contactos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

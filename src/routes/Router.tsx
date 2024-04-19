import { createBrowserRouter } from "react-router-dom";
import NavBarOs from "../components/NavBar/Navbar";

import Home from "../pages/home/Home";
import SobreNos from "../pages/sobreNos/SobreNos";
import Contato from "../pages/contato/Contato";

import Aparelho from "../pages/aparelho/Aparelho";
import Cirurgias from "../pages/cirurgias/Cirurgias";
import Clareamento from "../pages/clareamento/Clareamento";
import Implante from "../pages/implante/Implante";
import Lentes from "../pages/lentes/Lentes";
import Profilaxia from "../pages/profilaxia/Profilaxia";
import Protese from "../pages/protese/Protese";
import Restauracao from "../pages/restauracao/Restauracao";
import Tratamento from "../pages/tratamento/Tratamento";
import NotFound from "../pages/notFound/NotFound";

export const Router = createBrowserRouter([
    {
        element: <NavBarOs />,
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element: <SobreNos />,
                path: "/sobrenos"
            },
            {
                element: <Contato />,
                path: "/contato"
            },

            {
                element: <Aparelho />,
                path: "/servicos/aparelho"
            },
            {
                element: <Cirurgias />,
                path: "/servicos/cirurgias"
            },
            {
                element: <Clareamento />,
                path: "/servicos/clareamento" 
            },
            {
                element: <Implante />,
                path: "/servicos/implante"
            },
            {
                element: <Lentes />,
                path: "/servicos/lentes"
            },
            {
                element: <Profilaxia />,
                path: "/servicos/profilaxia"
            },
            {
                element: <Protese />,
                path: "/servicos/protese"
            },
            {
                element: <Restauracao />,
                path: "/servicos/restauracao"
            },
            {
                element: <Tratamento />,
                path: "/servicos/tratamento"
            },
            {
                element: <NotFound />,
                path: "*"
            }
        ]
    } 
])
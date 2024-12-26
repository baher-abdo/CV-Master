import FormContextProvider from "./components/context/FormContext";
import FormDetails from "./components/FormDetails/FormDetails";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumePage from "./components/ResumePage/ResumePage";
import PurpleGrace from "./components/Templates/PurpleGrace";
import AzureElegance from "./components/Templates/AzureElegance";
import StandardProfessional from "./components/Templates/StandardProfessional";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "form", element: <FormDetails /> },
      {
        path: "resume-page", element: <ResumePage />, children: [
          {path:"purple-grace",element:<PurpleGrace/>},
          {path:"azure-elegance",element:<AzureElegance/>},
          {path:"standard-professional",element:<StandardProfessional/>}
        
      ] },
    ],
  },
]);

function App() {

  return (
      <FormContextProvider>
      <RouterProvider router={router}></RouterProvider>
      </FormContextProvider>
  );
}

export default App;

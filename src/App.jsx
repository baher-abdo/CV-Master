import FormContextProvider from "./components/context/FormContext"
import FormDetails from "./components/FormDetails/FormDetails"
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumePage from "./components/ResumePage/ResumePage";
let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "form", element: <FormDetails /> },
      { path: "resume-page", element: <ResumePage /> },
    ],
  },
]);


function App() {

  return (
    <FormContextProvider>
          <RouterProvider router={router}></RouterProvider>
    </FormContextProvider>
  )
}

export default App

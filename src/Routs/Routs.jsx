import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Homepage/HomePage";
import BookPage from "../Pages/BookPage/BookPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";


 export const router = createBrowserRouter([{




path:"/",
element: <MainLayout/>,
children: [
  {
   index: true,
   element: <HomePage/>
   
  },
  {
    path : "/books",
    element: <BookPage/>
  },
  {
    path: "/booksDetails/:bookId",
    element: <BookDetails/>,
    loader: () => fetch('/public/booksData.json')
  }
],
errorElement: <ErrorPage/>


},







]);

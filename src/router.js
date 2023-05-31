import { RouterProvider,createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from './pages/moviePage';
import SeriesPage from "./pages/seriesPage";
import CategoryPage from "./pages/categoryPage";
import LatestPage from "./pages/latestPage";
import KidsPage from "./pages/kidsPage";
import SingleMovie from "./pages/singleMovie";
import Search from "./pages/search";
import Genres from "./pages/genres";

const router = createBrowserRouter ([
  {
    path : "/",
    element :<HomePage/>,
  },
  {
    path : "/movie",
    element :<MoviePage/>,
  },
  {
    path : "/movie/:id",
    element :<SingleMovie/>,
  },
  {
    path : "/search",
    element :<Search/>,
  },
  {
    path : "/genres",
    element :<Genres/>,
  },
  {
    path : "/series",
    element :<SeriesPage/>,
  },
  {
    path : "/category",
    element :<CategoryPage/>,
  },
  {
    path : "/latest",
    element :<LatestPage/>,
  },
  {
    path : "/kids",
    element :<KidsPage/>,
  },
]);

export default function Router(){
  return(
    <RouterProvider router={router}/>

  )
}
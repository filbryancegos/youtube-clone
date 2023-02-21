import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AppProvider } from './context/Context'
import { Feed, Navbar, Sidebar, VideoDetail, ChannelDetail, SearchFeed  } from './components'
import ErrorPage from './pages/ErrorPage';
import { useYouTubeContext } from './context/Context'

export default function App() {

  const Layout = () => {
    return (
      <AppProvider>
        <Overlay />
        <div className="app">
          <Navbar />
            <MainWrap>
              <Outlet />
            </MainWrap>
          <Sidebar />
        </div>
      </AppProvider>
    );
  };

  const MainWrap = ({children}) => {
    const { state } = useYouTubeContext();
    return (
      <div className="main__wrap">
          {children}
      </div>
    )
  }

  const Overlay = () => {
    const { state } = useYouTubeContext();
    return (
        <div id='drawer' style={{
          visibility: state.isSideBar ? 'visible' : 'hidden',
          opacity: state.isSideBar ? '1' : '0'
        }}></div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/video/:id",
          element: <VideoDetail />,
        },
        {
          path: "/channel/:id",
          element: <ChannelDetail />,
        },
        {
          path: "/search/:searchTerm",
          element: <SearchFeed />,
        },
      ],
    }
  ]);
  return <RouterProvider router={router} />
}


import { Home } from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Users } from "./pages/users/Users";
import { Products } from "./pages/products/Products";
import { NavBar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Container, ContentContainer, Main, MenuContainer } from "./styles/global";
import { Menu } from "./components/menu/Menu";
import { Login } from "./pages/login/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/default";

function App() {
  const Layout = () => {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <NavBar />

          <Container>

            <MenuContainer>
              <Menu />
            </MenuContainer>

            <ContentContainer>
              <Outlet />
            </ContentContainer>

          </Container>
          <Footer />
        </Main>

      </ThemeProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);



  return (
    <RouterProvider router={router} />
  );
}

export default App;

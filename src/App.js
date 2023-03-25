import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import SignInPage from "pages/SignInPage";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPages from "./pages/SignUpPages";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPages></SignUpPages>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

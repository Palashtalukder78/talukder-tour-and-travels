import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import MyPackage from './components/MyPackage/MyPackage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddPackage from './components/AddPackage/AddPackage';
import Register from './components/Register/Register';
import ManagePackages from './components/ManagePackages/ManagePackages';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/my-package">
            <MyPackage></MyPackage>
          </PrivateRoute>
          <PrivateRoute path="/add-package">
            <AddPackage></AddPackage>
          </PrivateRoute>
          <PrivateRoute path="/register/:id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/manage-packages">
            <ManagePackages></ManagePackages>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

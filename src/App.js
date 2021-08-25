import "./App.css";
import Users from "./users";
import CreateUser from "./createuser";
import EditUser from "./edituser";
import ListUsers from "./listUsers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserProvider } from "./userContext";




function App() {
  return (
    <Router>
      <div id="wrapper">
        
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="Header">
          <Link to="/" className="h3 mb-2 heading">Dashboard.</Link></div>
      
      
      <div className="create-userbtn">
        <Link
          to="/create-user"
          className="create btn"
        >
           Create User
        </Link>
        <Link
          to="/list-user"
          className=" list btn"
        >
           List Users
        </Link>
        

        </div>
        
            <div className="container-fluid">
              <Switch>
                

                <UserProvider>
                  <Route path="/list-user" component={ListUsers} exact={true}/>
                  <Route path="/" component={Users} exact={true} />
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact={true}
                  />
                  <Route
                    path="/user/edit/:id"
                    component={EditUser}
                    exact={true}
                  />
                  
                </UserProvider>
                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

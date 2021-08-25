import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

function ListUsers() {
  const userContext = useContext(UserContext);

  let handleDelete = (index) => { 

    let confirm = window.confirm("Do you want to delete for sure??");
    if(confirm){
      userContext.userList.splice(index-1,1);
      userContext.setUserList([...userContext.userList])
    }

  }

  return (
    <>
      <div className="listusers">
      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Users Database</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userContext.userList.map((obj,index) => {
                  return (
                    <tr>
                      <td>{index+1}</td>
                      <td>{obj.userName}</td>
                      <td>{obj.position}</td>
                      <td>
                        <Link to={`/user/edit/${index+1}`}
                          className="btn btn-primary"
                        >
                          Edit
                        </Link>
                        <button onClick={() =>{handleDelete(index+1)}} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ListUsers;

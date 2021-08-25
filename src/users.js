import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

function Users() {
  const userContext = useContext(UserContext);

  let handleDelete = (index) => {
    let confirm = window.confirm("Do you want to delete for sure??");
    if (confirm) {
      userContext.userList.splice(index - 1, 1);
      userContext.setUserList([...userContext.userList]);
    }
  };

  return (
    <>
      

      {userContext.userList.map((obj, index) => {
        return (
          
          <div className="user-container">
            <img className="avatar" src={obj.avatar}/> 
            <h4>Username: {obj.userName}</h4>
            <h4>Position: {obj.position}</h4>
            <div className="buttons">
              <Link
                to={`/user/edit/${index + 1}`}
                className="btn btn-primary edit"
              >
                Edit
              </Link>
              <button
                onClick={() => {
                  handleDelete(index + 1);
                }}
                className="btn btn-danger delete"
              >
                Delete
              </button>
            </div>
          </div>
          
        );
      })}
    </>
  );
}

export default Users;

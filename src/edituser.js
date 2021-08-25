import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from './userContext';

function EditUser(props) {
    const [userName, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [avatar, setAvatar] = useState("");
  

  const userContext = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
console.log(props);
    let UserData = userContext.userList[props.match.params.id-1];
     setUserName(UserData.userName);
     setPosition(UserData.position)
     setAvatar(UserData.avatar)
     
},[props,userContext])

  

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData={userName, position, avatar};
    userContext.userList[props.match.params.id-1] = userData
    userContext.setUserList([...userContext.userList])
    history.push("/user")
   
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4 useredit">
        <h1 className="h3 mb-0 text-gray-800">Edit User Details</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Avatar URL</label>
              <input
                type="text"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary mt-3 "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditUser

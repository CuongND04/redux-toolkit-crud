import React, { useEffect, useState } from "react";
import { readAllUsers } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [isPopup, setPopup] = useState(false);
  useEffect(() => {
    dispatch(readAllUsers());
  }, []);
  const viewDetailHandler = (id) => {
    setPopup(true);
    setSelectedId(id);
  };
  const { users, loading, error, searchData } = useSelector(
    (state) => state.user
  ); // lay user slice
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Danh sách Users</h2>
      {isPopup && <CustomModal id={selectedId} setPopup={setPopup} />}
      {users &&
        users.map((user) => (
          <div key={user.id} className="card my-2">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {user.email}
              </h6>
              <p className="card-text">
                {user.age} - {user.gender}
              </p>
              <a
                href="#"
                className="btn btn-success me-2"
                onClick={() => viewDetailHandler(user.id)}
              >
                View
              </a>
              <Link to={`/edit/${user.id}`} className="btn btn-warning me-2">
                Edit
              </Link>
              <a href="#" className="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        ))}
    </>
  );
}

export default Read;

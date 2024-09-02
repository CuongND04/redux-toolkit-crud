import React, { useEffect, useState } from "react";
import { readAllUsers } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";

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
          <div class="card my-2">
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                {user.email}
              </h6>
              <p class="card-text">
                {user.age} - {user.gender}
              </p>
              <a
                href="#"
                class="btn btn-success me-2"
                onClick={() => viewDetailHandler(user.id)}
              >
                View
              </a>
              <a href="#" class="btn btn-warning me-2">
                Edit
              </a>
              <a href="#" class="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        ))}
    </>
  );
}

export default Read;

import React, { useEffect } from "react";
import { readAllUsers } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Read() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readAllUsers());
  }, []);
  const { users, loading, error, searchData } = useSelector(
    (state) => state.user
  ); // lay user slice
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Danh sách Users</h2>
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
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
    </>
  );
}

export default Read;

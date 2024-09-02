import React, { useEffect, useState } from "react";
import { deleteUser, readAllUsers } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [isPopup, setPopup] = useState(false);
  const [genderRadio, setGenderRadio] = useState();
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
      <h2>Danh sách Users - {users.length}</h2>
      <input
        type="radio"
        className="form-check-input"
        name="gender"
        value=""
        id="all"
        onChange={(e) => setGenderRadio(e.target.value)}
      />
      <label className="form-check-label" for="all">
        All
      </label>{" "}
      &nbsp;
      <input
        type="radio"
        className="form-check-input"
        name="gender"
        value="male"
        id="male"
        onChange={(e) => setGenderRadio(e.target.value)}
      />
      <label className="form-check-label" for="male">
        Male
      </label>{" "}
      &nbsp;
      <input
        type="radio"
        className="form-check-input"
        name="gender"
        id="female"
        value="female"
        onChange={(e) => setGenderRadio(e.target.value)}
      />
      <label className="form-check-label" for="female">
        Female
      </label>
      {isPopup && <CustomModal id={selectedId} setPopup={setPopup} />}
      {users &&
        users
          .filter((user) => {
            if (!searchData) {
              return user;
            } else {
              return user.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((user) => {
            if (!genderRadio) {
              return user;
            } else {
              return user.gender === genderRadio;
            }
          })
          .map((user) => (
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
                <button
                  onClick={() => {
                    dispatch(deleteUser(user.id));
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
    </>
  );
}

export default Read;

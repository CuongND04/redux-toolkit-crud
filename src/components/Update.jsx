import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userSlice";

const Update = () => {
  const [updateData, setUpdateData] = useState();
  const { id } = useParams();
  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id === id);
      setUpdateData(user); // y nghia la tim user theo id va load lai de hien thi du lieu cu len form
    }
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    console.log(updateData);
    navigate("/");
  };

  const inputChangeHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              value={updateData && updateData.name}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={updateData && updateData.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Age:
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Age"
              name="age"
              value={updateData && updateData.age}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="gender"
              value="male"
              checked={updateData && updateData.gender === "male"}
              onChange={inputChangeHandler}
            />
            <label className="form-check-label" htmlFor="radio1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              name="gender"
              value="female"
              checked={updateData && updateData.gender === "female"}
              onChange={inputChangeHandler}
            />

            <label className="form-check-label" htmlFor="radio2">
              Female
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;

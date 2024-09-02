import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userSlice";
function Create() {
  const [user,setUser] = useState({})
  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // dispatch action createUser and transfer data
    dispatch(createUser(user));
    // navigate("/read");
  };
  return (
    <div className="container">
      <h1>Thêm thành viên mới</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          name="name"
          value = {user.name}
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
          value = {user.email}
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
          value = {user.age}
          onChange={inputChangeHandler}
        />
      </div>
      <label htmlFor="gender" className="form-label me-4">
          Gender:     
        </label>
      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="radio1"
          name="gender"
          value="male"
          checked = {user.gender === 'male'}
          onChange={inputChangeHandler}
        />
        <label className="form-check-label" htmlFor="radio1">
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="radio2"
          name="gender"
          value="female"
          checked = {user.gender === 'female'}
          onChange={inputChangeHandler}
        />

        <label className="form-check-label" htmlFor="radio2">
          Female
        </label>
      </div>
      <br/>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
}

export default Create;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../features/userSlice";
const Nav = () => {
  const [searchData, setSearchData] = useState();
  const dispatch = useDispatch();
  // component này sẽ render mỗi khi searchData thay đổi
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Redux Toolkit CRUD call API
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                All Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Add User
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

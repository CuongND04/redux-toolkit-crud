import React from "react";

function Create() {
  return (
    <div className="container">
      <h1>Thêm thành viên mới</h1>
      <form className="w-50 mx-auto">
      <div className="mb-3 mt-3">
        <label for="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          name="name"
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label for="pwd" className="form-label">
          Age:
        </label>
        <input
          type="text"
          className="form-control"
          id="age"
          placeholder="Enter Age"
          name="age"
        />
      </div>
      <label for="gender" className="form-label me-4">
          Gender:     
        </label>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          class="form-check-input"
          id="radio1"
          name="gender"
          value="male"
        />
        <label class="form-check-label" for="radio1">
          Male
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          class="form-check-input"
          id="radio2"
          name="gender"
          value="female"
        />

        <label class="form-check-label" for="radio2">
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

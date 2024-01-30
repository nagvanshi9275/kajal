import React from "react";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 d-flex flex-column align-items-center">
          <input type="email" className="form-control mb-3 custom-input h-sm-180" />
          <input type="email" className="form-control mb-3 custom-input h-30" />

          <button
            type="button"
            className="btn btn-primary mb-3 w-100 w-lg-auto h-30"
            style={{ maxWidth: "500px" }}
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-dark mb-3 w-60 w-lg-100 h-30"
          >
            <span className="me-2">Signup with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-google" viewBox="0 0 16 16">
              {/* Google icon SVG paths */}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
















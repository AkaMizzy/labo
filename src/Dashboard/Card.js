import React from "react";

function Card({ title, value, percentage, icon, iconColor, direction }) {
  return (
    <div className="col-12 col-sm-6 col-xl-4 mb-4">
      <div className="card border-0 shadow-sm">
        <div className="card-body d-flex align-items-center">
          <div
            className={`icon-shape icon-shape-${iconColor} rounded me-4`}
            style={{ fontSize: "1.5rem" }}
          >
            <i className={`fas ${icon}`}></i>
          </div>
          <div>
            <h6 className="text-gray-700 mb-1">{title}</h6>
            <h3 className="fw-bold mb-0">{value}</h3>
            <small className={`text-${direction}`}>
              <i
                className={`fas fa-arrow-${
                  direction === "success" ? "up" : "down"
                } me-1`}
              ></i>
              {percentage} Depuis le mois dernier
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

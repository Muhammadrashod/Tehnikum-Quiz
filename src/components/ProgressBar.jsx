import React from "react";

export const Progressbar = () => {
    return (
        <div className="indicator">
        <div className="indicator__text">
          <span className="indicator__description">
            Скидка за прохождение опроса:
          </span>
          <span className="indicator__value">15%</span>
        </div>
        <div className="indicator__progressbar">
          <div className="indicator__unit indicator__unit-1 _active"></div>
          <div className="indicator__unit indicator__unit-2"></div>
          <div className="indicator__unit indicator__unit-3"></div>
          <div className="indicator__unit indicator__unit-4"></div>
        </div>
      </div>
    )
}
import React from "react";

const Icon = ({ colors }) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 24 24"
      style={{ marginLeft: "10px" }}
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20.1818 12C20.1818 16.5187 16.5187 20.1818 12 20.1818C7.48131 20.1818 3.81818 16.5187 3.81818 12C3.81818 7.48131 7.48131 3.81818 12 3.81818C16.5187 3.81818 20.1818 7.48131 20.1818 12Z"
        fill={colors["success"]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 13.2322L15.7929 7.93934L17.2071 9.35355L10.5 16.0607L6.79289 12.3536L8.20711 10.9393L10.5 13.2322Z"
        fill={colors["success"]}
      />
    </svg>
  );
};

Icon.WarningIcon = ({ colors }) => {
  return (
    <svg
      width="45"
      height="45"
      style={{ marginLeft: "10px" }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z"
        fill={colors["warning"]}
      />
    </svg>
  );
};

Icon.ErrorIcon = ({ colors }) => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    style={{ marginLeft: "10px" }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM12 10.59L14.59 8L16 9.41L13.41 12L16 14.59L14.59 16L12 13.41L9.41 16L8 14.59L10.59 12L8 9.41L9.41 8L12 10.59Z"
      fill={colors["error"]}
    />
  </svg>
);

Icon.InfoIcon = ({ colors }) => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: "10px" }}
  >
    <path
      d="M12 2C6.48077 2 2 6.48077 2 12C2 17.5192 6.48077 22 12 22C17.5192 22 22 17.5192 22 12C22 6.48077 17.5192 2 12 2ZM14.0096 17H10.9904V12.9952H9.99039V10.9904H13.0096L13 15H14.0096V17ZM13.0096 9.01923H10.9904V7H13.0096V9.01923Z"
      fill={colors["info"]}
    />
  </svg>
);
export { Icon };

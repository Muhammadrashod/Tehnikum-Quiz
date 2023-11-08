import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const LinkButton = ({ path, ...props }) => {
  return (
    <Link to={path}>
      <Button {...props} />
    </Link>
  );
};

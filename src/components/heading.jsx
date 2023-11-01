import React from "react";

export const Heading = ({ text, headingType }) => {
  const renderHeading = () => {
    switch (headingType) {
      case 'h1':
        return <h1>{text}</h1>;
      case 'h2':
        return <h2>{text}</h2>;
      case 'h3':
        return <h3>{text}</h3>;

      default:
        return <h1>{text}</h1>;
    }
  };

  return (
    renderHeading()
  );
};

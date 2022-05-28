import React from "react";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const {
    children,
    loading = false,
    hasError = false,
    errorMessage,
    errorRetryFunction,
    className = "",
    style,
    onClick,
  } = props;

  return (
    <div
      className={`container-wrapper ${className}`}
      onClick={onClick}
      style={style}
    >
      <Loading loading={loading} />

      <Error
        callbackFunction={errorRetryFunction}
        hasError={hasError}
        errorMessage={errorMessage}
      />

      <div className="">{children}</div>
    </div>
  );
};

export default Container;
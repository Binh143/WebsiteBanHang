import LoadingSpinner from "component/loading";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyleButton = styled.button`
  cursor: ${(props) => (props.isLoading ? "wait" : "pointer")};
  padding: 0 20px;
  width: 100%;
  height: ${(props) => props.height || "66px"};
  line-height: 1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
/**
 *@requires
 * @param {string} type type of button ex: "button"| "submit"
 * @returns
 */
const Button = ({
  children,
  type = "button",
  onClick = () => {},
  ...props
}) => {
  const { isLoading } = props;
  const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <StyleButton type={type} onClick={onclick} {...props}>
      {child}
    </StyleButton>
  );
};
Button.prototype = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;

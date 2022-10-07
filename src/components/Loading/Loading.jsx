import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  text-align: center;
  font-family: "Roboto";
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

const LoadingBall = styled.div`
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
  animation-delay: ${({ animationDelay }) => animationDelay};
  &::after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #c7c7c7;
    margin: -4px 0 0 -4px;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
`;

const loadingRoot = document.getElementById("loading-root");
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingDot: "" };
  }

  componentDidMount() {
    this.loading = setInterval(() => {
      const { loadingDot } = this.state;
      if (loadingDot === "...") {
        this.setState({ loadingDot: "" });
        return false;
      }
      this.setState({ loadingDot: `${loadingDot}.` });
      return false;
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.loading);
  }

  onOuterClickHandler = (e) => {
    e.stopPropagation();
  };

  render() {
    const { loadingDot } = this.state;
    const loadingBallStateTable = [
      {
        key: 1,
        animationDelay: "-0.036s",
        position: { top: "63px", left: "63px" },
      },
      {
        key: 2,
        animationDelay: "-0.072s",
        position: { top: "68px", left: "56px" },
      },
      {
        key: 3,
        animationDelay: "-0.108s",
        position: { top: "71px", left: "48px" },
      },
      {
        key: 4,
        animationDelay: "-0.144s",
        position: { top: "72px", left: "40px" },
      },
      {
        key: 5,
        animationDelay: "-0.18s",
        position: { top: "71px", left: "32px" },
      },
      {
        key: 6,
        animationDelay: "-0.216s",
        position: { top: "68px", left: "24px" },
      },
      {
        key: 7,
        animationDelay: "-0.252s",
        position: { top: "63px", left: "17px" },
      },
      {
        key: 8,
        animationDelay: "-0.288s",
        position: { top: "56px", left: "12px" },
      },
    ];
    return ReactDOM.createPortal(
      <Outer onClick={this.onOuterClickHandler}>
        <Container>
          <Wrapper>
            {loadingBallStateTable.map((loadingBall) => {
              const { key, animationDelay, position } = loadingBall;
              return (
                <LoadingBall
                  key={key}
                  animationDelay={animationDelay}
                  top={position.top}
                  left={position.left}
                />
              );
            })}
          </Wrapper>
          <div style={{ color: "#fff" }}>
            Loading
            {loadingDot}
          </div>
        </Container>
      </Outer>,
      loadingRoot
    );
  }
}

LoadingBall.propTypes = {
  animation: PropTypes.string,
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
};

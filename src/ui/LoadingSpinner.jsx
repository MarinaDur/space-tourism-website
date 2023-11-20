import { SyncLoader } from "react-spinners";
import { styled } from "styled-components";

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* opacity: 0.9; */
`;

const LoadingSpinner = () => {
  return (
    <LoadingOverlay>
      <SyncLoader color="#3be2f5" size={30} />
    </LoadingOverlay>
  );
};

export default LoadingSpinner;

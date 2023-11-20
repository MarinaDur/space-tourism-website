import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import NavMenuSmall from "./NavMenuSmall";

const StyledAppLayout = styled.div`
  min-height: 100vh;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <NavMenuSmall />
        <Outlet />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;

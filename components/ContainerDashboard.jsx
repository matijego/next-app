import NavBar from "./NavBar";

const ContainerDashboard = (props) => (
    <>
    <NavBar />
    <div>
        {props.children}
    </div>
    </>
);

export { ContainerDashboard };
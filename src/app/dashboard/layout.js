import Sidebar from "./Sidebar";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashBoardLayout;

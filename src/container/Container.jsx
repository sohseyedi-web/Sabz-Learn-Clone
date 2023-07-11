import Navbar from "./navbar/Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Container;

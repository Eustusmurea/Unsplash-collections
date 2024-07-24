const Navbar = () => {
  return (
    <div className="flex flex-row bg-transparent">
      <div className="logo">
        <img src="src/assets/react.svg" alt="logo" />
      </div>
      <nav className="flex flex-row font-bold ">
        <div>
          <h1>Home</h1>
        </div>
        <h1>Collections</h1>
      </nav>
    </div>
  );
};

export default Navbar;

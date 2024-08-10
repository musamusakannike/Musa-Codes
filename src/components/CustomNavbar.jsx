
const CustomNavbar = () => {
  return (
    <nav className='d-flex justify-content-center align-items-center rounded-pill py-1 py-md-2 px-2 px-md-3 my-3 top-0 start-50 translate-middle-x bg-purple fixed-top overflow-x-auto animate__animated animate__slideInDown'>
      <a href="#" className="nav-link text-decoration-none text-light mx-2">Home</a>
      <a href="#projects" className="nav-link text-decoration-none text-light mx-2">Projects</a>
      <a href="#contact" className="nav-link text-decoration-none text-light mx-2">Contact</a>
    </nav>
  );
};

export default CustomNavbar;

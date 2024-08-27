const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News App</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" onClick={() => setCategory("technology")} aria-current="page" href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={() => setCategory("business")} aria-current="page" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={() => setCategory("health")} aria-current="page" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={() => setCategory("sports")} aria-current="page" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={() => setCategory("entertainment")} aria-current="page" href="#">Entertainment</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
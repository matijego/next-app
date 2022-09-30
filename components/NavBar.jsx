import Link from 'next/link';

export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 bg-dark">
      <Link href="/"><a className="navbar-brand text-light">R&M App</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link href="/personajes"><a className="nav-link text-light">Personajes</a></Link>
          </li>
        </ul>
      </div>
    </nav>    
    </>
  )
}
 export { NavBar }
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link href="/dashboard"><a className="navbar-brand">Next.js</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link href="/dashboard/menuone"><a className="nav-link">Menú 1</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/dashboard/menutwo"><a className="nav-link">Menú 2</a></Link>
          </li>
        </ul>
      </div>
    </nav>    
    </>
  )
}
 export { NavBar }
import Link from "next/link";

function Pagination(){
    return(
        <div>
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><Link href="/personajes/1"><a className="page-link">1</a></Link></li>
                <li className="page-item"><Link href="/personajes/2"><a className="page-link">2</a></Link></li>
                <li className="page-item"><Link href="/personajes/3"><a className="page-link">3</a></Link></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>

        </div>
    )
}

export {Pagination};
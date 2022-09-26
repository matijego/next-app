import Link from 'next/link'
import LottieTable from './TableLoader';

const Home = () => (
    <>
    <div className="text-center">
        <h1 className="m-4">Home</h1>
       <Link href="/login"><button className="btn btn-danger mt-4">Cerrar sesión</button></Link>
    </div>

    <LottieTable />
    </>
);

export { Home };
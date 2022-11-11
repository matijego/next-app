import Link from 'next/link';

function Index(){

    return (
    <>
        <div className='text-center'>
            <h1 className="mt-4">Login Page</h1>
            <Link href="/dashboard"><button className='btn btn-outline-success mt-4'>Ingresar</button></Link>
        </div>
    </>
    );
}

export default Index;
import { ContainerDashboard } from "../../components/ContainerDashboard";
import { MenuOne } from "../../components/Menu1";
import { Characters } from "../../components/Characters"
function Index({data}){

    return (
    <>
    <ContainerDashboard>
        <MenuOne />
        <Characters data={data} />
    </ContainerDashboard>
    </>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }

export default Index;
import { useRouter } from 'next/router'
import { Characters } from '../../components/Characters'
import { Pagination } from '../../components/Pagination'

const CharacterPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return(
        <>
            <Characters page={pid} />
            <Pagination />
        </>
    )
}

export default CharacterPage;
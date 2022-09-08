import { ContainerVideoSearch } from './styles';
import CardVideoSearch from '../CardVideoSearch';


const ContainerVideosSearch = () => {
 
  return (
  <ContainerVideoSearch>
    <ul>
      <li>
        <CardVideoSearch />
      </li>
    </ul>
    {/* <span>Pesquise por um marcador existente</span> */}
  </ContainerVideoSearch>
  )
  
  };

export default ContainerVideosSearch;

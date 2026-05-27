import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SearchBarCss from './SearchBar.module.css'
function SearchBar(){


    return(
        <div className={SearchBarCss.container}>
              <input type="Buscar" placeholder="Buscar producto"  />
            <FontAwesomeIcon className={SearchBarCss.searchIcon} icon={faMagnifyingGlass} />
        </div>
          

    )
}

export default SearchBar;
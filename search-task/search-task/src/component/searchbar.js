import React, {useState} from 'react'
import { user } from './data';


const searchBar = () => {}
const [searchInput, setSearchInput] = useState("");
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
      user.filter((user) => {
      return user.firstName.match(searchInput);
  });
  }

  <div>
<input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
{/* <table>
  <tr>
    <th>Country</th>
    <th>Continent</th>
   
  </tr>
{user.map((country, index) => {


  <tr>
    <td>{user.firstName}</td>
    
   
  </tr>
})}
</table> */}

</div>
export default searchBar;
import useState from 'react'

const Location=()=>{
    const[value,setValue]=useState();
    setValue(value.locationName);
}
<h1>{Location}</h1>

export default Location;
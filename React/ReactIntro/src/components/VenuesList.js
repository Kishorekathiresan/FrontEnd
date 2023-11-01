import './VenuesList.css';
let max=10;
function VenuesList(){
    let venuecount=15;
    return(
        <div className='VenuesList'>
        <center><b>Count of Venues</b>{venuecount}<br></br><b>Max count</b>{max}<br></br><b>List of Venues</b><br></br>
        <ol>
            <li>DY Patil Stadium</li>
            <li>Chepauk , Chennai</li>
            <li>Chinnasway Stadium, B'lore</li>
            <li>Feroze Shah Kotla, New Delhi</li>
            <li>Wankhede, Mumbai</li>
            <li>Dharmasala, Himachal Pradesh</li>
        </ol>
        </center>
        </div>

    )
}
export default VenuesList;
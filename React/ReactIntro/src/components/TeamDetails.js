import { Component } from "react";

class TeamDetails extends Component {

    teamName = "Delhi Capitals";
    baseLocation="Delhi"
    teamCaptain="YTA";

    render() {
        return (
            <div>
                <center>
                    <form>
                        <label>Team name</label><input type="text" value={this.teamName} /><br></br>
                        <label>Base Location</label>
                        <select size="1" name="base_location" value={this.baseLocation}>
                            <option value="MI">Mumbai</option>
                            <option value="CSK">Chennai</option>
                            <option value="RCB">Bangalore</option>
                            <option value="KKR">Kolkata</option>
                            <option value="RR">Rajasthan</option>
                            <option value="SRH">Hyderabad</option>
                        </select><br></br>
                        <label>Team captain</label><input type="text" value={this.teamCaptain}/>
                    </form>
                </center>
            </div>)
    }
}
export default TeamDetails;
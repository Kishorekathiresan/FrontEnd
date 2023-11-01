import { Component } from "react";

class TeamDetails extends Component {

    teamName = "Delhi Capitals";
    baseLocation="Delhi";
    teamCaptain="YTA";

    componentDidMount(){
        console.log("TeamDetails component mounted....");
    }

    componentDidUpdate(){
        console.log("TeamDetails components has updated....");
    }
    componentWillUnmount(){
        console.log("TeamDetails components is unmounting....");
    }

    render() {
        return (
            <div>
                <center>
                    <form>
                        <label>Team name</label><input type="text" defaultValue={this.teamName} /><br></br>
                        <label>Base Location</label>
                        <select size="1" name="base_location" defaultValue={this.baseLocation}>
                            <option value="MI">Mumbai</option>
                            <option value="CSK">Chennai</option>
                            <option value="RCB">Bangalore</option>
                            <option value="KKR">Kolkata</option>
                            <option value="RR">Rajasthan</option>
                            <option value="SRH">Hyderabad</option>
                        </select><br></br>
                        <label>Team captain</label><input type="text" defaultValue={this.teamCaptain}/>
                    </form>
                </center>
            </div>)
    }
}
export default TeamDetails;
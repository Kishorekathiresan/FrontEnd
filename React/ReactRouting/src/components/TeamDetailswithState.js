import { Component } from "react";

class TeamDetailswithState extends Component {
    constructor(props){
        super(props);
        this.state={teamName:"Delhi Capitals",baseLocation:"Delhi",teamCaptain:"YTA"};
    }
   

    render() {
        return (
            <div>
                <center>
                    <form>
                        <label>Team name</label><input type="text" defaultValue={this.state.teamName} /><br></br>
                        <label>Base Location</label>
                        <select size="1" name="base_location" defaultValue={this.state.baseLocation}>
                            <option value="MI">Mumbai</option>
                            <option value="CSK">Chennai</option>
                            <option value="RCB">Bangalore</option>
                            <option value="KKR">Kolkata</option>
                            <option value="RR">Rajasthan</option>
                            <option value="SRH">Hyderabad</option>
                        </select><br></br>
                        <label>Team captain</label><input type="text" defaultValue={this.state.teamCaptain}/>
                    </form>
                </center>
            </div>)
    }
}
export default TeamDetailswithState;
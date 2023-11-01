import { Component } from 'react';
import './TeamList.css';
class TeamList extends Component {
    teamsCount=11;
    getTeamsCount(){
        return this.teamsCount;
    }
    setTeamsCount(tcount){
        this.teamsCount=tcount;
    }
    render() {
        return (
            <div className='TeamList'>
                <center>
                    <b>Count of teams</b>{this.getTeamsCount()}<br></br>
                    <b>List of teams in IPL 2023</b><br></br>
                    <ul>
                        <li>CSK</li><li>RCB</li><li>MI</li><li>KKR</li><li>DC</li><li>SRH</li><li>PKBS</li>
                        <li>RR</li><li>GT</li><li>LSG</li>
                    </ul>
                </center>
            </div>
        )
    }
}
export default TeamList;
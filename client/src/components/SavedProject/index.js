import React, {Component} from 'react';
import "./style.css";
import API from "../../utils/API"

class SavedProject extends Component {
  componentDidMount = id => {
    // let id = this.state.id;
    API.getProject({
      idprojects: id
    });
  };

  viewProjects = owner => {
    API.getProjects({
      ownerid: owner
    })
    // .then((projData) => {
    //   res.render(projData)})
  };

  deleteProject = id => {
    // let id = this.id;
    API.getProjects({
      idprojects: id
    })
    // .then((projData) => {
    //   res.render(projData)})
  };
  
  render () {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 left-column padding-0">
          <div className="card project-card">
            <div className="card-header"><h5 id="username">User Name:</h5>
              </div>
                <div className="card-body">
                  <h2 className="card-title" id="project-title">Project Title:</h2>
                  <h4 className="card-text" id="residential-address">Residential Address:</h4>
                  <h4 className="card-text" id="city">City:</h4>
                  <h4 className="card-text" id="state">State:</h4>
                  <h4 className="card-text" id="zip">Zip:</h4>
                  <h4 className="card-text" id="repair-cateogry">Repair Category:</h4>
                  <h4 className="card-text" id="repair-timeline">Repair Timeline:</h4>
                    {/* <button type="button" className="btn project-button hvr-glow" id="invite-party">Invite a party</button> */}
                    <button type="button" className="btn project-button hvr-glow" id="edit-project">Edit this project</button>
                    <button type="button" className="btn project-button hvr-glow" id="delete-project" onClick={this.deleteProject}>Delete this project</button>
                </div>
                <div className="card-footer text-muted">
                  <h6 id="submitted-on">Project Submitted: 2 days ago</h6>
                </div>
            </div>

        </div>

        <div className="col-6 padding-0 right-column">
          <img src="/images/residential-neighborhood.png" alt="Neighborhood"/>
        </div>
      </div>             
    </div>
  );
}
}

export default SavedProject;
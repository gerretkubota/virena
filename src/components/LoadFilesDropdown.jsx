import React, { Component } from 'react';

export default class LoadFilesDropdown extends Component {

  render() {
    const { userProjects, setTree, setCurrentProject, deleteProject, uid } = this.props
    return (
      <div className="menu">
        {userProjects.map((project, i) => (
        <div>
          <div onClick={()=> {
            setTree(project.treeData)
            setCurrentProject(project);
          }}>{project.projectName}
            <button onClick={() => {
              deleteProject(project.projectName, uid)
            }}>Delete{i}</button>
          </div>
        </div>
        ))}
      </div>
    )
  }
}

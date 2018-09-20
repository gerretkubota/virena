import React, {Component} from 'react';
import ViewContainer from './ViewContainer.jsx';
import TreeContainer from './TreeContainer.jsx';
import PanelContainer from './PanelContainer.jsx';

export default class AppContainer extends Component {
  render() {
    return (
      <div className='main'>
        <ViewContainer />
        <TreeContainer />
        <PanelContainer />
      </div>
    )
  }
}

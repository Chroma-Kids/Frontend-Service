import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';

import { DragDropContext } from 'react-dnd';

import ToolbarDashboard from '../../components/toolbar/ToolbarDashboard'
import DashboardTeachersNotAssigned from './DashboardTeachersNotAssigned'
import DashboardClassrooms from './DashboardClassrooms'

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { enableRecordingTrajectory: false }
  }

  toggleMenu(){
    this.setState({
      enableRecordingTrajectory: !this.state.enableRecordingTrajectory
    });
  }

  render() {

    const { enableRecordingTrajectory } = this.state;

    return (
      <div key="homeView">

        <ToolbarDashboard
          button={this.toggleMenu.bind(this)}
          buttonText={(this.state.enableRecordingTrajectory ? "Recording..." : "Testing")}
          title={"Dashboard"} />

        <DashboardTeachersNotAssigned
          {...this.props}
        />
        <DashboardClassrooms
          {...this.props}
          enableRecordingTrajectory={enableRecordingTrajectory}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Dashboard);

import React from 'react';
import Toolbar from '../../components/toolbar/Toolbar'

import { ShiftsListContainer } from '../../redux/containers/shifts/index'

class Config extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div key="configView">

        <Toolbar
          title={"Config"} />


        <ShiftsListContainer />

      </div>
    );
  }
}

export default Config;

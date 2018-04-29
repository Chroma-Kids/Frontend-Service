import React from 'react';
import Toolbar from '../../components/toolbar/Toolbar'

import { ShiftTypesListContainer } from '../../redux/containers/shifttypes/index'

class Config extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div key="configView">

        <Toolbar
          title={"Config"} />


        <ShiftTypesListContainer />

      </div>
    );
  }
}

export default Config;

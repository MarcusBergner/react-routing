import React, { Component } from "react";
const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    };
    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }
    /**
     * use this.props spread trick here to pass any props we might
     * need to this Component and i'll set it to null if C is not set yet!
     */
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};
export default asyncComponent;

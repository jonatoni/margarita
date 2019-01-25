// @flow

import * as React from 'react';

type Props = {|
  +children: React.Node,
|};

type State = {|
  count: number,
  increment: () => void,
|};

const defaultState = {
  count: 0,
  increment: () => {},
};

const { Provider: ContextProvider, Consumer } = React.createContext<State>({
  ...defaultState,
});

class Provider extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      count: 1,
      increment: this.increment,
    };
  }

  componentDidUpdate() {
    console.warn(this.state.count); // eslint-disable-line no-console
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export default {
  Provider,
  Consumer,
};

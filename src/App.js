import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import MessageBuilder from './containers/MessageBuilder/MessageBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MessageBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

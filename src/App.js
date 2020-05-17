import React from 'react';
import './App.css'
import Root, { NodeDetails } from './resources/node-details'
import Network from './components/vis-net/network';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.graphRef = React.createRef();
    this.state = {
      height: 500
    }
  }
  componentDidMount() {
    this.setState({
      width: this.getWidth()
    }, this.initCustomGraph)
  }

  getWidth() {
    return this.graphRef.current.parentElement.offsetWidth;
  }
  getHeight() {
    return this.graphRef.current.parentElement.offsetHeight;
  }
  getNodeSize() {
    let aspectRatio = this.state.width / this.state.height;
    aspectRatio = aspectRatio > 1 ? aspectRatio : this.state.height / this.state.width;
    return aspectRatio * 1000;
  }
  initCustomGraph() {
    this.setState({
      currentGraph: this.getNewCustomGraph(Root)
    })
  }
  onClickNode(nodeId) {
    this.setState({
      currentGraph: this.getNewCustomGraph(NodeDetails[nodeId])
    })
  }
  getNewCustomGraph(data) {
    return <Network data={data}
      width={this.state.width}
      height={this.state.height} nodeSize={this.getNodeSize()} onClickNode={this.onClickNode.bind(this)} />
  }
  render() {
    this.node = React.createRef();
    return (
      <div id="app" className="App container mt-2" >
        <div className="col-sm-12" ref={this.graphRef}>
          {this.state.currentGraph}
        </div>
      </div>
    );
  }
}
export default App;

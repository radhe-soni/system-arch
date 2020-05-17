import React from 'react'
import { Graph } from "react-d3-graph";
import GraphConfig from '../resources/graph-config.json'


class ReactD3Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                ...GraphConfig,
                width: props.width,
                height: props.height,
                node: {...GraphConfig.node, size:props.nodeSize}
            }
        }
    }
    // graph event callbacks
onClickGraph = function () {
    window.alert(`Clicked the graph background`);
};

onClickNode = function (nodeId) {
    window.alert(`Clicked node ${nodeId}`);
    this.props.onClickNode(nodeId);
};

onDoubleClickNode = function (nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
};

onRightClickNode = function (event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
};

onMouseOverNode = function (nodeId) {
    //window.alert(`Mouse over node ${nodeId}`);
};

onMouseOutNode = function (nodeId) {
    // window.alert(`Mouse out node ${nodeId}`);
};

onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

onRightClickLink = function (event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};

onMouseOverLink = function (source, target) {
    //window.alert(`Mouse over in link between ${source} and ${target}`);
};

onMouseOutLink = function (source, target) {
    // window.alert(`Mouse out link between ${source} and ${target}`);
};

onNodePositionChange = function (nodeId, x, y) {
    window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};
    render() {
        return <Graph
            id={this.props.id ? this.props.id : "graph-id"}
            data={this.props.data}
            config={this.state.config}
            onClickNode={this.onClickNode.bind(this)}
            onDoubleClickNode={this.onDoubleClickNode.bind(this)}
            onRightClickNode={this.onRightClickNode.bind(this)}
            onClickGraph={this.onClickGraph.bind(this)}
            onClickLink={this.onClickLink.bind(this)}
            onRightClickLink={this.onRightClickLink.bind(this)}
            onMouseOverNode={this.onMouseOverNode.bind(this)}
            onMouseOutNode={this.onMouseOutNode.bind(this)}
            onMouseOverLink={this.onMouseOverLink.bind(this)}
            onMouseOutLink={this.onMouseOutLink.bind(this)}
            onNodePositionChange={this.onNodePositionChange.bind(this)}

        />
    }
}
export default CustomGraph
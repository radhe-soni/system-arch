import React from 'react'
import * as Vis from 'vis-network/standalone/'
import GraphConfig from '../../resources/graph-config.json'

export default class Network extends React.Component {

    constructor(props) {
        super(props);
        this.netRef = React.createRef();
        this.optionsRef = React.createRef();
    }
    componentDidMount() {
        let { nodes, edges } = this.props.data;
        nodes = nodes.map(node => {
            node = {...node, ...GraphConfig.node};
            return node;
        })
        nodes = new Vis.DataSet(nodes);
        edges = new Vis.DataSet(edges);
        let data = {
            nodes: nodes,
            edges: edges
        };
        var network = new Vis.Network(this.netRef.current, data, this.getOptions());
    }
    getOptions() {
        return {
            nodes: {
                shape: 'dot',
                scaling: {
                    min: 10,
                    max: 30
                },
                font: {
                    size: 12,
                    face: 'Tahoma'
                }
            },
            edges: {
                color: { inherit: true },
                width: 0.15,
                smooth: {
                    type: 'continuous'
                }
            },
            interaction: {
                hideEdgesOnDrag: true,
                tooltipDelay: 200
            },
            configure: {
                filter: function (option, path) {
                    if (option === 'inherit') { return true; }
                    if (option === 'type' && path.indexOf("smooth") !== -1) { return true; }
                    if (option === 'roundness') { return true; }
                    if (option === 'hideEdgesOnDrag') { return true; }
                    if (option === 'hideNodesOnDrag') { return true; }
                    return false;
                },
                container: this.optionsRef.current,
                showButton: false
            },
            physics: false
        };
    }
    render() {

        return (
            <div>
                <div ref={this.optionsRef}></div>
                <div ref={this.netRef}></div>
            </div>
        );
    }
}
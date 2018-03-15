import React, { Component } from "react";
import AliasInput from "./AliasInput";

class SourcePush extends Component {
    constructor() {
        super();

        this.state = {
            alias: "",
            forcePush: false,
            OtherOrg: false
        };

        this.handleForcePushChange = this.handleForcePushChange.bind(this);
        this.handleOtherOrgChange = this.handleOtherOrgChange.bind(this);
        this.changeAlias = this.changeAlias.bind(this);
        this.handlePushSource = this.handlePushSource.bind(this);
    }

    changeAlias(alias) {
        this.setState({alias: alias});
    }

    handleOtherOrgChange(event) {
        this.setState({OtherOrg: !this.state.OtherOrg});
    }

    handleForcePushChange(event) {
        this.setState({forcePush: !this.state.forcePush});
    }

    handlePushSource() {
        this.props.pushChanges(this.state.forcePush, this.state.OtherOrg, this.state.alias);
    }

    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className="card-title">Retrieve Source</h3>
                    <ul className="mt-2 pl-0">
                        <li className="todo-list-item">
                            <div className="form-check">
                                <input type="checkbox" defaultChecked={this.state.forcePush} 
                                    onChange={this.handleForcePushChange}/>
                                <label>Is it a force push?</label>
                            </div>
                        </li>
                        <li className="todo-list-item">
                            <div className="form-check">
                                <input type="checkbox" defaultChecked={this.state.OtherOrg} 
                                    onChange={this.handleOtherOrgChange}/>
                                <label>Push to a non-default org?</label>
                            </div>
                        </li>
                        {this.state.OtherOrg? <AliasInput alias={this.state.alias} changeAlias={this.changeAlias}/>: null}
                    </ul>
                    <button type="button" className="btn btn-primary" 
					    onClick={this.handlePushSource}>Push Changes</button>
                </div>
            </div>
        );
    }
    
}

export default SourcePush;
import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log("this:", this);
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
         //(значение записи сверху) если в предыдущих пропсах статус был такой, который не равен статусу в текущих пропсах
        {
        this.setState({
            status: this.props.status
            });
        }
    }



    render() {
        return (
            <div>
                {!this.state.editMode &&
                // если не эдитмод, тогда покажи спан
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-----"}</span>
                </div>
                }
                {this.state.editMode &&
                // если эдитмоде, тогда покажи инпут
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode }
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
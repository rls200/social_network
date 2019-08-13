import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activeEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	disabledEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return <>
			{!this.state.editMode &&
				<div>
					<span onDoubleClick={this.activeEditMode}>{!this.props.status ? 'no status' : this.props.status}</span>
				</div>
			}
			{this.state.editMode &&
				<div>
					<input autoFocus={true} onChange={this.onStatusChange} value={this.state.status} onBlur={this.disabledEditMode} type="text"/>
				</div>
			}
		</>
	}
}

export default ProfileStatus;
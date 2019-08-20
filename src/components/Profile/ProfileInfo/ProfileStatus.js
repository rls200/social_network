import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	const activeEditMode = () => {
		setEditMode(true);
	}
	const disabledEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	}
	const onStatusChange = (e) => {
		setStatus(e.target.value);
	}
	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);
	return <>
		{!editMode &&
		<div>
			<span onDoubleClick={activeEditMode}>{!props.status ? 'no status' : props.status}</span>
		</div>
		}
		{editMode &&
		<div>
			<input autoFocus={true} onChange={onStatusChange} value={status} onBlur={disabledEditMode} type="text"/>
		</div>
		}
	</>
}

export default ProfileStatus;
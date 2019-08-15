import React from 'react';
import FormsControlsCss from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
	let checkTextarea = meta.touched && meta.error;
	return <>
		<div className={FormsControlsCss.formControls + ' ' + (checkTextarea ? FormsControlsCss.error : '')}>
			<textarea {...input} placeholder={props.placeholder} />
		</div>
		{checkTextarea && <span className={FormsControlsCss.warning}>{meta.error}</span>}
	</>
}

export const Input = ({input, meta, ...props}) => {
	let checkTextarea = meta.touched && meta.error;
	return <>
		<div className={FormsControlsCss.formControls + ' ' + (checkTextarea ? FormsControlsCss.error : '')}>
			<input {...input} placeholder={props.placeholder} />
		</div>
		{checkTextarea && <span className={FormsControlsCss.warning}>{meta.error}</span>}
	</>
}
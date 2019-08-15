export const required = value => {
	return value ? undefined : 'required';
}

export const maxLengthCreator = valLength => value => {
	return value && value.length > valLength ? `Maximum allowable length ${valLength}` : undefined;
}
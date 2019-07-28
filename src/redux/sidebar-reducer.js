const initializationState = {
	navbarLinks: [
		{id: 1, link: '/profile', textLink: 'Profile'},
		{id: 2, link: '/dialogs', textLink: 'Message'},
		{id: 3, link: '/news', textLink: 'News'},
		{id: 4, link: '/music', textLink: 'Music'},
		{id: 5, link: '/settings', textLink: 'Settings'},
		{id: 6, link: '/users', textLink: 'Users'}
	],
	friends: [
		{id: 1, link: '/', name: 'Andrey', avatar: 'https://las-venturas.lt/forumas/uploads/profile/photo-thumb-14971.png'},
		{id: 2, link: '/', name: 'Sasha', avatar: 'https://forum.truckersmp.com/uploads/profile/photo-thumb-4360.png'},
		{id: 3, link: '/', name: 'Sveta', avatar: 'https://cdn2.scratch.mit.edu/get_image/gallery/3445165_170x100.png'}
	]
};

const sidebarReducer = (state = initializationState, action) => {

	return state;
}

export default sidebarReducer;
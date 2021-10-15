import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/AdrianGonz97/modroll-web-app.git',
		user: {
			name: 'Adrian',
			email: 'cokakoala.dev@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

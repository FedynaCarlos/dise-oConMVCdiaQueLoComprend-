const controller = {
	index: (req, res) => {
		return res.render('index');
	},
	about: (req, res) => {
		return res.render('about');
	},
	register: (req, res) => {
		return res.send('Registro');
	},
	login: (req, res) => {
		return res.send('Login');
	}
};

module.exports = controller;

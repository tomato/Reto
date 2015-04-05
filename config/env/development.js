'use strict';

module.exports = {
	db: {
		uri: 'mongodb://localhost/reto',
		options: {
			user: '',
			pass: ''
		}
	},
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'dev',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			//stream: 'access.log'
		}
	},
	app: {
		title: 'Reto - creating those redirects'
	},
	
	google: {
		clientID: '1032672583512-eel2dbh5r3b0lp3gbkl9n8i94fh75mel.apps.googleusercontent.com' || 'APP_ID',
		clientSecret: 'LLVX4DuzK06VDuEfaCNOJBE2' || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},

	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};

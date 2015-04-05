'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	pages = require('../../app/controllers/pages.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/pages')
		.get(pages.crawl)

	// Finish by binding the article middleware
	//app.param('articleId', articles.articleByID);
};

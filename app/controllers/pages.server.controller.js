'use strict';

/**
 * Module dependencies.
 */
var Crawler = require('simplecrawler'),
	errorHandler = require('./errors.server.controller'),
	_ = require('lodash');

exports.crawl = function(req, res) {
    var pages = []
    
    var crawler = Crawler.crawl("https://diaryofascrummaster.wordpress.com/", function(queueItem){
        console.log("Completed fetching resource:",queueItem.url);
        pages.push(queueItem);
    });
    crawler.on("complete",function(){
        res.json(pages);
    });
};

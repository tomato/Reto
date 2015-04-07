'use strict';

/**
 * Module dependencies.
 */
var Crawler = require('simplecrawler'),
	errorHandler = require('./errors.server.controller'),
	_ = require('lodash');

module.exports = function(io, socket) {
    io.emit('connected');
    
    socket.on('crawl', function(url){
        
        var crawler = Crawler.crawl(url,function(queueItem){
            console.log("Completed fetching resource:",queueItem.url);
            io.emit('pageFound', queueItem);
        });
        
        crawler.addFetchCondition(function(parsedURL) {
            return !parsedURL.path.match(/\.(pdf|jpg|png|gif|css|js|svg|eot|woff|ttf|map)(\??.*)$/i);
        });
   
        crawler.on("complete",function(){
            io.emit('complete');
        });
        
        
    });
};

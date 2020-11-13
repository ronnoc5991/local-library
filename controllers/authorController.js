var Author = require('../models/author');
var Book = require('../models/book');
var async = require('async');

//Displays list of authors
exports.author_list = (req, res) => {
    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_authors) {
            if (err) { return next(err) }
            res.render('author_list', { title: 'Author List', author_list: list_authors });
        });
};

//display detail page for a specific author
exports.author_detail = (req, res, next) => {
    async.parallel({
        author: function(callback) {
            Author.findById(req.params.id)
                .exec(callback)
        },
        authors_books: function(callback) {
            Book.find({ 'author': req.params.id }, 'title summary')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err) }
        if (results.author==null) {
            var err = new Error('Author not found');
            err.status = 404;
            return next(err);
        }
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.authors_books });
    }
    )
};

//display author create for on GET
exports.author_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create Get');
};

//handle author create on POST
exports.author_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create POST');
};

//display author delete form on GET
exports.author_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

//display author delete form on POST
exports.author_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete POST')
};

//Display author update form on GET
exports.author_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update GET');
};

//Handle Author update on POST
exports.author_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED:: Author update POST');
};
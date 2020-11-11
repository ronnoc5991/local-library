var Author = require('../models/author');

//Displays list of authors
exports.author_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Author List');
};

//display detail page for a specific author
exports.author_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id)
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
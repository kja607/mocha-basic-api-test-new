const Books = require("../models/books.model.js");

// Get all Books from the json.
exports.findAll = (req, res) => {
    Books.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            });
        else res.send(data);
    });
};
// Get book by id
exports.findOne = (req, res) => {
    Books.findById(req.params.bookId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found book with id ${req.params.bookId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving book with id " + req.params.bookId
                });
            }
        } else res.send(data);
    });
};
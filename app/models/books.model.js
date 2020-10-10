const path = require('path');
const fs = require('fs');

const Books = {};

Books.getAll = result => {
    fs.readFile(path.join(__dirname, '../data/books.data.json'), 'utf-8', (err, data) => {
        if (err) throw err
        const jsonData = JSON.parse(data);
        if (jsonData.length) {
            result(null, jsonData);
        } else {
            const errorMsg = {};
            errorMsg.kind = "not_found";
            result(errorMsg);
        }
    })
};

Books.findById = (booksID, result) => {
    fs.readFile(path.join(__dirname, '../data/books.data.json'), 'utf-8', (err, data) => {
        if (err) throw err
        const jsonData = JSON.parse(data);
        const res = jsonData.filter((item) => {
            if (item.id == booksID) {
                return item;
            }
        });
        if (res.length) {
            result(null, res);
        } else {
            const errorMsg = {};
            errorMsg.kind = "not_found";
            result(errorMsg);
        }
        
    })
};

module.exports = Books;
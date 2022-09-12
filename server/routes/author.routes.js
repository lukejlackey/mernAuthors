const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/authors/all", AuthorController.findAllAuthors);
    app.get("/authors/:id", AuthorController.findOneAuthor);
    app.put("/authors/edit/:id", AuthorController.updateExistingAuthor);
    app.post("/authors/new", AuthorController.createNewAuthor);
    app.delete("/authors/delete/:id", AuthorController.deleteAuthor);
};
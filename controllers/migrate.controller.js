const mysql = require("mysql");
const countriesHelpers = require("./helpers/countries.helpers");
const dbConfig = require("./db.config");

const countriesModel = require("../models/countries.model");
const projectsModel = require("../models/projects.model");
const locationsModel = require("../models/locations.model");
const storiesModel = require("../models/stories.model");
const membersModel = require("../models/members.model");
const lensesModel = require("../models/lenses.model");
const articlesModel = require("../models/articles.model");
const library_links = require("../models/library_links.model");
const library_books = require("../models/library_books.model");
const library_researches = require("../models/library_researches.model");

const migrateHelpers = require("./helpers/migrate.helpers");

// init mysql connection
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = () => {
  // create database
  migrateHelpers.createDB(connection, "rin");

  // use database
  migrateHelpers.useDB(connection, "rin");

  // create countreis table
  migrateHelpers.createTable(connection, countriesModel);

  // create locations table
  migrateHelpers.createTable(connection, locationsModel);

  // create projects table
  migrateHelpers.createTable(connection, projectsModel);

  // create stories table
  migrateHelpers.createTable(connection, storiesModel);

  // create stories table
  migrateHelpers.createTable(connection, membersModel);

  // create lenses table
  migrateHelpers.createTable(connection, lensesModel);

  // create articles table
  migrateHelpers.createTable(connection, articlesModel);

  // create library links table
  migrateHelpers.createTable(connection, library_links);

  // create library books table
  migrateHelpers.createTable(connection, library_books);

  // create library researches table
  migrateHelpers.createTable(connection, library_researches);

  // fetch countries and insert them  into countries table
  countriesHelpers.checkIfCountriesExists(connection, res => {
    if (res === false) {
      countriesHelpers.addCountries(connection);
    }
  });
};

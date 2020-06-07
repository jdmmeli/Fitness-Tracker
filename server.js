const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "workout";
const collections = ["sessions"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});
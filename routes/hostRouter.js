const path = require('path');

const express = require('express');
const hostRouter = express.Router();


const rootDir = require("../utils/pathUtil");
hostRouter.get("/host/sgpa-calculator", (req,res) => {
  res.render('sgpa-calculator',{pageTitle: 'calculator'});
});
hostRouter.get("/host/calendar", (req,res) => {
  res.render('calendar',{pageTitle: 'calendar'});
});
hostRouter.get("/cricket", (req,res) => {
  res.render('cricket',{pageTitle: 'cricket'});
});


hostRouter.get("/host/syllabus", (req,res,next) => {
  res.render('addHome',{pageTitle: 'Add Home to airbnb'});
});
hostRouter.get("/form", (req,res,next) => {
  res.render('form',{pageTitle: 'form'});
});
hostRouter.get("/sports", (req,res,next) => {
  res.render('sports',{pageTitle: 'form'});
});
hostRouter.get("/sarang", (req,res,next) => {
  res.render('sarang',{pageTitle: 'form'});
});
hostRouter.get("/logo", (req,res,next) => {
  res.render('logo',{pageTitle: 'logo'});
});

const registeredHomes = [];
hostRouter.post("/host/add-home", (req,res,next) => {
  registeredHomes.push(req.body)
  res.render('homeAddresh',{pageTitle: 'Home Added Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
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
hostRouter.get("/badminton", (req,res) => {
  res.render('badminton',{pageTitle: 'badminton'});
});
hostRouter.get("/volleyball", (req,res) => {
  res.render('volleyball',{pageTitle: 'volleyball'});
});
hostRouter.get("/chess", (req,res) => {
  res.render('chess',{pageTitle: 'chess'});
});
hostRouter.get("/tug-of-war", (req,res) => {
  res.render('tug-of-war',{pageTitle: 'tug-of-war'});
});
hostRouter.get("/carrom", (req,res) => {
  res.render('carrom',{pageTitle: 'carrom'});
});
hostRouter.get("/kabbadi", (req,res) => {
  res.render('kabbadi',{pageTitle: 'kabbadi'});
});
hostRouter.get("/pubg", (req,res) => {
  res.render('pubg',{pageTitle: 'pubg'});
});
hostRouter.get("/free-fire", (req,res) => {
  res.render('free-fire',{pageTitle: 'free-fire'});
});
hostRouter.get("/long-jump", (req,res) => {
  res.render('long-jump',{pageTitle: 'long-jump'});
});
hostRouter.get("/high-jump", (req,res) => {
  res.render('high-jump',{pageTitle: 'high-jump'});
});
hostRouter.get("/dancing", (req,res) => {
  res.render('dancing',{pageTitle: 'dancing'});
});
hostRouter.get("/singing", (req,res) => {
  res.render('singing',{pageTitle: 'singing'});
});
hostRouter.get("/shayari", (req,res) => {
  res.render('shayari',{pageTitle: 'shayari'});
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
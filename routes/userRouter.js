const path = require('path');
const express = require('express');
const userRouter = express.Router();

const { registeredHomes } = require('./hostRouter');

userRouter.get("/home", (req,res,next) =>{
  res.render("home", {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
});
userRouter.get("/syllabus-semester", (req,res,next) => {
  res.render('homeAddresh',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-civil", (req,res,next) => {
  res.render('homeAddresh-2',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-mechanical", (req,res,next) => {
  res.render('homeAddresh-3',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-electrical", (req,res,next) => {
  res.render('homeAddresh-4',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-ece", (req,res,next) => {
  res.render('homeAddresh-5',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-eee", (req,res,next) => {
  res.render('homeAddresh-6',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-info", (req,res,next) => {
  res.render('homeAddresh-7',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-mining", (req,res,next) => {
  res.render('homeAddresh-8',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-chemical", (req,res,next) => {
  res.render('homeAddresh-9',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-biomedical", (req,res,next) => {
  res.render('homeAddresh-10',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-food", (req,res,next) => {
  res.render('homeAddresh-11',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-areonautical", (req,res,next) => {
  res.render('homeAddresh-12',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-robitic", (req,res,next) => {
  res.render('homeAddresh-13',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-fire", (req,res,next) => {
  res.render('homeAddresh-14',{pageTitle: 'syllabus'});
});
userRouter.get("/syllabus-mechatronics", (req,res,next) => {
  res.render('homeAddresh-15',{pageTitle: 'syllabus'});
});

userRouter.get("/subject", (req,res,next) => {
  res.render('syllabus',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-2", (req,res,next) => {
  res.render('syllabus-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-3", (req,res,next) => {
  res.render('syllabus-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-4", (req,res,next) => {
  res.render('syllabus-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-5", (req,res,next) => {
  res.render('syllabus-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-6", (req,res,next) => {
  res.render('syllabus-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-7", (req,res,next) => {
  res.render('syllabus-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-8", (req,res,next) => {
  res.render('syllabus-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil", (req,res,next) => {
  res.render('syllabus-civil',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-2", (req,res,next) => {
  res.render('syllabus-civil-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-3", (req,res,next) => {
  res.render('syllabus-civil-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-4", (req,res,next) => {
  res.render('syllabus-civil-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-5", (req,res,next) => {
  res.render('syllabus-civil-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-6", (req,res,next) => {
  res.render('syllabus-civil-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-7", (req,res,next) => {
  res.render('syllabus-civil-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-civil-8", (req,res,next) => {
  res.render('syllabus-civil-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical", (req,res,next) => {
  res.render('syllabus-mechanical',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-2", (req,res,next) => {
  res.render('syllabus-mechanical-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-3", (req,res,next) => {
  res.render('syllabus-mechanical-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-4", (req,res,next) => {
  res.render('syllabus-mechanical-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-5", (req,res,next) => {
  res.render('syllabus-mechanical-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-6", (req,res,next) => {
  res.render('syllabus-mechanical-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-7", (req,res,next) => {
  res.render('syllabus-mechanical-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechanical-8", (req,res,next) => {
  res.render('syllabus-mechanical-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical", (req,res,next) => {
  res.render('syllabus-electrical',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-2", (req,res,next) => {
  res.render('syllabus-electrical-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-3", (req,res,next) => {
  res.render('syllabus-electrical-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-4", (req,res,next) => {
  res.render('syllabus-electrical-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-5", (req,res,next) => {
  res.render('syllabus-electrical-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-6", (req,res,next) => {
  res.render('syllabus-electrical-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-7", (req,res,next) => {
  res.render('syllabus-electrical-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-electrical-8", (req,res,next) => {
  res.render('syllabus-electrical-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece", (req,res,next) => {
  res.render('syllabus-ece',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-2", (req,res,next) => {
  res.render('syllabus-ece-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-3", (req,res,next) => {
  res.render('syllabus-ece-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-4", (req,res,next) => {
  res.render('syllabus-ece-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-5", (req,res,next) => {
  res.render('syllabus-ece-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-6", (req,res,next) => {
  res.render('syllabus-ece-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-7", (req,res,next) => {
  res.render('syllabus-ece-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-ece-8", (req,res,next) => {
  res.render('syllabus-ece-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee", (req,res,next) => {
  res.render('syllabus-eee',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-2", (req,res,next) => {
  res.render('syllabus-eee-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-3", (req,res,next) => {
  res.render('syllabus-eee-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-4", (req,res,next) => {
  res.render('syllabus-eee-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-5", (req,res,next) => {
  res.render('syllabus-eee-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-6", (req,res,next) => {
  res.render('syllabus-eee-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-7", (req,res,next) => {
  res.render('syllabus-eee-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-eee-8", (req,res,next) => {
  res.render('syllabus-eee-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info", (req,res,next) => {
  res.render('syllabus-info',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-2", (req,res,next) => {
  res.render('syllabus-info-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-3", (req,res,next) => {
  res.render('syllabus-info-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-4", (req,res,next) => {
  res.render('syllabus-info-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-5", (req,res,next) => {
  res.render('syllabus-info-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-6", (req,res,next) => {
  res.render('syllabus-info-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-7", (req,res,next) => {
  res.render('syllabus-info-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-info-8", (req,res,next) => {
  res.render('syllabus-info-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining", (req,res,next) => {
  res.render('syllabus-mining',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-2", (req,res,next) => {
  res.render('syllabus-mining-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-3", (req,res,next) => {
  res.render('syllabus-mining-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-4", (req,res,next) => {
  res.render('syllabus-mining-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-5", (req,res,next) => {
  res.render('syllabus-mining-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-6", (req,res,next) => {
  res.render('syllabus-mining-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-7", (req,res,next) => {
  res.render('syllabus-mining-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mining-8", (req,res,next) => {
  res.render('syllabus-mining-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical", (req,res,next) => {
  res.render('syllabus-chemical',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-2", (req,res,next) => {
  res.render('syllabus-chemical-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-3", (req,res,next) => {
  res.render('syllabus-chemical-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-4", (req,res,next) => {
  res.render('syllabus-chemical-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-5", (req,res,next) => {
  res.render('syllabus-chemical-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-6", (req,res,next) => {
  res.render('syllabus-chemical-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-7", (req,res,next) => {
  res.render('syllabus-chemical-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-chemical-8", (req,res,next) => {
  res.render('syllabus-chemical-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical", (req,res,next) => {
  res.render('syllabus-biomedical',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-2", (req,res,next) => {
  res.render('syllabus-biomedical-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-3", (req,res,next) => {
  res.render('syllabus-biomedical-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-4", (req,res,next) => {
  res.render('syllabus-biomedical-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-5", (req,res,next) => {
  res.render('syllabus-biomedical-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-6", (req,res,next) => {
  res.render('syllabus-biomedical-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-7", (req,res,next) => {
  res.render('syllabus-biomedical-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-biomedical-8", (req,res,next) => {
  res.render('syllabus-biomedical-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food", (req,res,next) => {
  res.render('syllabus-food',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-2", (req,res,next) => {
  res.render('syllabus-food-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-3", (req,res,next) => {
  res.render('syllabus-food-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-4", (req,res,next) => {
  res.render('syllabus-food-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-5", (req,res,next) => {
  res.render('syllabus-food-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-6", (req,res,next) => {
  res.render('syllabus-food-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-7", (req,res,next) => {
  res.render('syllabus-food-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-food-8", (req,res,next) => {
  res.render('syllabus-food-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical", (req,res,next) => {
  res.render('syllabus-areonautical',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-2", (req,res,next) => {
  res.render('syllabus-areonautical-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-3", (req,res,next) => {
  res.render('syllabus-areonautical-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-4", (req,res,next) => {
  res.render('syllabus-areonautical-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-5", (req,res,next) => {
  res.render('syllabus-areonautical-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-6", (req,res,next) => {
  res.render('syllabus-areonautical-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-7", (req,res,next) => {
  res.render('syllabus-areonautical-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-areonautical-8", (req,res,next) => {
  res.render('syllabus-areonautical-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic", (req,res,next) => {
  res.render('syllabus-robitic',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic-2", (req,res,next) => {
  res.render('syllabus-robitic-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic-3", (req,res,next) => {
  res.render('syllabus-robitic-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic-4", (req,res,next) => {
  res.render('syllabus-robitic-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic-5", (req,res,next) => {
  res.render('syllabus-robitic-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic-6", (req,res,next) => {
  res.render('syllabus-robitic-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-robitic-7", (req,res,next) => {
  res.render('syllabus-robitic-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subjectv-robitic-8", (req,res,next) => {
  res.render('syllabus-robitic-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire", (req,res,next) => {
  res.render('syllabus-fire',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-2", (req,res,next) => {
  res.render('syllabus-fire-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-3", (req,res,next) => {
  res.render('syllabus-fire-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-4", (req,res,next) => {
  res.render('syllabus-fire-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-5", (req,res,next) => {
  res.render('syllabus-fire-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-6", (req,res,next) => {
  res.render('syllabus-fire-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-7", (req,res,next) => {
  res.render('syllabus-fire-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-fire-8", (req,res,next) => {
  res.render('syllabus-fire-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics", (req,res,next) => {
  res.render('syllabus-mechatronics',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-2", (req,res,next) => {
  res.render('syllabus-mechatronics-2',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-3", (req,res,next) => {
  res.render('syllabus-mechatronics-3',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-4", (req,res,next) => {
  res.render('syllabus-mechatronics-4',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-5", (req,res,next) => {
  res.render('syllabus-mechatronics-5',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-6", (req,res,next) => {
  res.render('syllabus-mechatronics-6',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-7", (req,res,next) => {
  res.render('syllabus-mechatronics-7',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-mechatronics-8", (req,res,next) => {
  res.render('syllabus-mechatronics-8',{pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-1", (req,res,next) => {
  res.render("cse-topic", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-2", (req,res,next) => {
  res.render("cse-topic-2", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-3", (req,res,next) => {
  res.render("cse-topic-3", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-4", (req,res,next) => {
  res.render("cse-topic-4", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-5", (req,res,next) => {
  res.render("cse-topic-5", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-6", (req,res,next) => {
  res.render("cse-topic-6", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-7", (req,res,next) => {
  res.render("cse-topic-7", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-8", (req,res,next) => {
  res.render("cse-topic-8", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-9", (req,res,next) => {
  res.render("cse-topic-9", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-10", (req,res,next) => {
  res.render("cse-topic-10", {pageTitle: 'syllabus'});
});
userRouter.get("/subject-cse-sem2-1", (req,res,next) => {
  res.render("cse-topic-sem2", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-2", (req,res,next) => {
  res.render("cse-topic-sem2-2", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-3", (req,res,next) => {
  res.render("cse-topic-sem2-3", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-4", (req,res,next) => {
  res.render("cse-topic-sem2-4", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-5", (req,res,next) => {
  res.render("cse-topic-sem2-5", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-6", (req,res,next) => {
  res.render("cse-topic-sem2-6", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-7", (req,res,next) => {
  res.render("cse-topic-sem2-7", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-8", (req,res,next) => {
  res.render("cse-topic-sem2-8", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-9", (req,res,next) => {
  res.render("cse-topic-sem2-9", {pageTitle: 'syllabus'})
});
userRouter.get("/subject-cse-sem2-10", (req,res,next) => {
  res.render("cse-topic-sem2-10", {pageTitle: 'syllabus'})
});

module.exports = userRouter;

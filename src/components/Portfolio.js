//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Budget Vault",
    languages: "react, jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/budgetVault.png",
    description: "Allows you to enter, track and see a visual graph your budget.",
    repo: "https://github.com/mckeags7/BudgetVault",
    live: "https://budget-vault.herokuapp.com/",
  },
  {
    id: 1,
    title: "TechBlog Posts",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/techBlogPosts.png",
    description: "Allows you to edit and post blogs and comment on them. You can also leave comments on the blogs of others.",
    repo: "https://github.com/mckeags7/tech-blog-posts",
    live: "https://tech-blog-posts-heroku.herokuapp.com/",
  },
  {
    id: 2,
    title: "Recipe Repo - A group-written, recipe sharing application by Zach Steuer, Mamona Masood, Reggie Tenkorang, and Sean Mckeag",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize",
    image: "/img/recipeRepo.png",
    description: "Allows users to quickly create a profile and post recipes to their online recipe book, as well as view and comment on recipes for themselves or other friends!",
    live: "https://damp-crag-63651.herokuapp.com/",
    repo: "https://github.com/mckeags7/Recipe-Repo-",
  },
    {
    id: 3,
    title: "Husky-Hangout - A group-written, events networking application for UCONN students by Zach Steuer, James Mahoney, Shelley Soucie, Nasser Nasser, and Sean Mckeag",
    languages: "MERN, GraphQL, html, css, js,",
    packages: "Express.js, Node.js, Generate Unique IDs",
    image: "/img/Huskyhangout.png",
    description: "An application inteded for incoming and new students to UCONN to help them find the best places to meet new friends on campus.",
    repo: "https://github.com/mckeags7/husky-hangout",
    live: "https://husky-hangout.herokuapp.com/",
  },
  {
    id: 4,
    title: "Verbal Diary - A Note Taking Application",
    languages: "html, css, js,",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/verbalDiaryApp.png",
    description: "My first application launched with Heroku. Write whatever notes you like and use it to keep track of tasks. You can save your notes for later or delete them altogether.",
    repo: "https://github.com/mckeags7/VerbalDiaryApp",
    live: "https://verbal-diary-heroku.herokuapp.com/",
  },
  {
    id: 5,
    title: "Workday Scheduler",
    languages: "html, css, js",
    image: "/img/workdayScheduler.png",
    packages: "none",
    description: "A basic work scheduler to help keep track of your daily tasks.",
    repo: "https://github.com/mckeags7/WorkdayScheduler",
    live: "https://mckeags7.github.io/WorkdayScheduler/",
  },
  {
    id: 6,
    title: "Weather Dashboard Application",
    languages: "html, css, js",
    packages: "none",
    image: "/img/WeatherDashboardApp.png",
    description: "A very basic app that allows you to see the weather for a searched or saved city.",
    repo: "https://github.com/mckeags7/weatherapp",
    live: "https://mckeags7.github.io/weatherapp/",
  },
  {
    id: 7,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/myportfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/mckeags7/SeanMPortfolio",
    live: "https://mckeags7.github.io/SeanMPortfolio/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-small">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;

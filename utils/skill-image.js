import aws from '../app/assets/svg/skills/aws.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import css from '../app/assets/svg/skills/css.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import excel from '../app/assets/svg/skills/excel.svg';
import expressjs from '../app/assets/svg/skills/expressjs.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flask from '../app/assets/svg/skills/flask.svg';
import git from '../app/assets/svg/skills/git.svg';
import github from '../app/assets/svg/skills/github.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import jenkins from '../app/assets/svg/skills/jenkins.svg';
import jira from '../app/assets/svg/skills/jira.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import neondb from '../app/assets/svg/skills/neondb.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nodeJS from '../app/assets/svg/skills/nodejs.svg'
import numpy from '../app/assets/svg/skills/numpy.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import powerbi from '../app/assets/svg/skills/powerbi.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import tableau from '../app/assets/svg/skills/tableau.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'flask':
      return flask;
    case 'express js':
      return expressjs
    case 'jira':
      return jira;
    case 'javascript':
      return javascript;
    case 'jenkins':
      return jenkins;
    case 'next js':
      return nextJS;
    case 'power bi':
      return powerbi;
    case 'tableau':
      return tableau;
    case 'neon db':
      return neondb;
    case 'github':
      return github;
    case 'react js':
      return react;
    case 'typescript':
      return typescript;
    case 'node js':
      return nodeJS;
    case 'excel':
      return excel;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind css':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'prisma':
      return prisma;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'selenium':
      return selenium;
    case 'figma':
      return figma;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case 'sql':
      return mysql;
    default:
      return null;
  }
}

import canva from '/public/svg/skills/canva.svg';
import excel from '/public/svg/skills/excel.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nodeJS from '/public/svg/skills/nodejs.svg'
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import vitejs from '/public/svg/skills/vitejs.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'excel':
      return excel;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'nodejs':
      return nodeJS;
    case 'vitejs':
      return vitejs;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'figma':
      return figma;
    case 'ionic':
      return ionic;
    case 'canva':
      return canva;
    default:
      break;
  }
}

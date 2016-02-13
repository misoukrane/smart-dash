import angular from 'angular';
import About from './about/about';
import HackerNews from './hackerNews/hackerNews';
import Home from './home/home';
import Todo from './todo/todo';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Todo.name,
  HackerNews.name,
]);

export default componentModule;

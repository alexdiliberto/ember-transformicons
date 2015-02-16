import Ember from 'ember';

export var run = Ember.run;

export var arrayContains = (str, arr) => arr.indexOf(str) > -1;

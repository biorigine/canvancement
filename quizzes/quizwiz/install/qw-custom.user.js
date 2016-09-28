// ==UserScript==
// @name        QuizWiz
// @namespace   https://github.com/jamesjonesmath/canvancement
// @description Regrading and speed enhancements for Canvas quizzes
// @include     https://*.instructure.com/courses/*/gradebook/speed_grader?*
// @include     https://*.instructure.com/courses/*/quizzes/*/history?*
// @noframes
// @version     3
// @grant       none
// ==/UserScript==
requirejs([ 'https://gitcdn.link/repo/jamesjonesmath/canvancement/master/quizzes/quizwiz/src/qw-engine.js' ], function(QuizWiz) {
  'use strict';

  var config = {
    // Regrading methods may be 'disabled', 'enabled', or 'autorun'
    'methods' : {
      'unanswered' : 'disabled',
      'full_points' : 'disabled',
      'ma_allnone' : 'disabled',
      'ma_correct' : 'disabled',
      'ma_difference' : 'disabled',
      'fill_in_blanks' : 'disabled',
      'dropdowns' : 'disabled'
    },
    // Speed enhancements may be true or false
    'autoExpandComments' : false,
    'duplicateQuestionHeader' : false,
    'showButtonCounts' : true,
    'nextAfterUpdate' : false,
    'nextAfterComment' : false,
    'nextAfterRubric' : false,
    'nextRubricExpanded' : false
  };

  QuizWiz(config);
});

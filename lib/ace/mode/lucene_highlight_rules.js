define(function(require, exports) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var LuceneHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token : "constant.character.negation",
                regex : "[\\-]"
            }, {
                token : "constant.character.plus",
                regex : "[\\+]"
            }, {
                token : "constant.character.interro",
                regex : "[\\?]"
            }, {
                token : "constant.character.asterisk",
                regex : "[\\*]"
            }, {
                token: 'constant.character.proximity',
                regex: '~[0-9]+\\b'
            }, {
                token: 'keyword.operator.and',
                regex: '\\bAND\\b'
            }, {
                token: 'keyword.operator.or',
                regex: '\\bOR\\b'
            }, {
                token: 'keyword.operator.not',
                regex: '\\bNOT\\b'
            }, {
                token: 'keyword.operator.near',
                regex: '\\bNEAR/[0-9]+f?\\b'
            }, {
                token : "paren.lparen",
                regex : "[\\(]"
            }, {
                token : "paren.rparen",
                regex : "[\\)]"
            }, {
                token : "keyword.author",
                regex : "\\bauthor:"
            }, {
                token : "keyword.location",
                regex : "\\b(?:continent|location|country|state|county|city):"
            }, {
                token : "keyword.raw",
                regex : '\\braw:'
            }, {
                token : "keyword.site",
                regex : "\\bsite:"
            }, {
                token : "keyword.title",
                regex : "\\btitle:"
            }, {
                token : "keyword.url",
                regex : "\\burl:"
            }, {
                token : "string",           // " string
                regex : '".*?(?:"|$)'
            }, {
                token : "text",
                regex : "\\s+"
            }
        ]
    };
};

oop.inherits(LuceneHighlightRules, TextHighlightRules);

exports.LuceneHighlightRules = LuceneHighlightRules;
});

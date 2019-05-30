/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RuleList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LayoutRule.
 * @public
 */

goog.module('LayoutRule.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('ClayActionsDropdown.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ClayIcon.incrementaldom', 'render');


/**
 * @param {{
 *  dropdownExpandedIndex: (null|number|undefined),
 *  rules: !Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>,
 *  rulesCardOptions: (?),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  _handleDropdownClicked: *,
 *  _handleRuleCardClicked: *
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {null|number|undefined} */
  var dropdownExpandedIndex = soy.asserts.assertType(opt_data.dropdownExpandedIndex == null || goog.isNumber(opt_data.dropdownExpandedIndex), 'dropdownExpandedIndex', opt_data.dropdownExpandedIndex, 'null|number|undefined');
  /** @type {!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>} */
  var rules = soy.asserts.assertType(goog.isArray(opt_data.rules), 'rules', opt_data.rules, '!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {?} */
  var rulesCardOptions = opt_data.rulesCardOptions;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {*} */
  var _handleDropdownClicked = opt_data._handleDropdownClicked;
  /** @type {*} */
  var _handleRuleCardClicked = opt_data._handleRuleCardClicked;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-builder-rule-builder-container');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('h1');
        incrementalDom.attr('class', 'form-builder-section-title text-default');
    incrementalDom.elementOpenEnd();
      /** @desc  */
      var MSG_EXTERNAL_3368967445947154698 = Liferay.Language.get('rule-builder');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3368967445947154698));
    incrementalDom.elementClose('h1');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'liferay-ddm-form-rule-rules-list-container');
    incrementalDom.elementOpenEnd();
      $rule_list(opt_data, null, opt_ijData);
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  dropdownExpandedIndex: (null|number|undefined),
 *  rules: !Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>,
 *  rulesCardOptions: (?),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  _handleDropdownClicked: *,
 *  _handleRuleCardClicked: *
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'LayoutRule.render';
}


/**
 * @param {{
 *  rules: !Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (?)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  _handleDropdownClicked: *,
 *  _handleRuleCardClicked: *,
 *  dropdownExpandedIndex: (null|number|undefined),
 *  rulesCardOptions: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $rule_list(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (?)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>} */
  var rules = soy.asserts.assertType(goog.isArray(opt_data.rules), 'rules', opt_data.rules, '!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (?)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {*} */
  var _handleDropdownClicked = opt_data._handleDropdownClicked;
  /** @type {*} */
  var _handleRuleCardClicked = opt_data._handleRuleCardClicked;
  /** @type {null|number|undefined} */
  var dropdownExpandedIndex = soy.asserts.assertType(opt_data.dropdownExpandedIndex == null || goog.isNumber(opt_data.dropdownExpandedIndex), 'dropdownExpandedIndex', opt_data.dropdownExpandedIndex, 'null|number|undefined');
  /** @type {?} */
  var rulesCardOptions = opt_data.rulesCardOptions;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-rule-list-container form-builder-rule-list');
  incrementalDom.elementOpenEnd();
    if ((rules.length) > 0) {
      incrementalDom.elementOpenStart('ul');
          incrementalDom.attr('class', 'ddm-form-body-content form-builder-rule-builder-rules-list tabular-list-group');
      incrementalDom.elementOpenEnd();
        var rule3757List = rules;
        var rule3757ListLen = rule3757List.length;
        for (var rule3757Index = 0; rule3757Index < rule3757ListLen; rule3757Index++) {
            var rule3757Data = rule3757List[rule3757Index];
            incrementalDom.elementOpenStart('li');
                incrementalDom.attr('class', 'list-group-item');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'clamp-horizontal list-group-item-content');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('p');
                    incrementalDom.attr('class', 'form-builder-rule-builder-rule-description text-default');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('b');
                    /** @desc  */
                    var MSG_EXTERNAL_5099375131746050090 = Liferay.Language.get('if');
                    incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_5099375131746050090));
                    incrementalDom.text(' ');
                  incrementalDom.elementClose('b');
                  var condition3713List = rule3757Data.conditions;
                  var condition3713ListLen = condition3713List.length;
                  for (var condition3713Index = 0; condition3713Index < condition3713ListLen; condition3713Index++) {
                      var condition3713Data = condition3713List[condition3713Index];
                      $condition({operandType: condition3713Data.operands[0].type, operandValue: condition3713Data.operands[0].value}, null, opt_ijData);
                      incrementalDom.elementOpenStart('b');
                          incrementalDom.attr('class', 'text-lowercase');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpen('em');
                          incrementalDom.text(' ');
                          soyIdom.print(strings[condition3713Data.operator]);
                          incrementalDom.text(' ');
                        incrementalDom.elementClose('em');
                      incrementalDom.elementClose('b');
                      if (condition3713Data.operands[1]) {
                        $condition({operandLabel: condition3713Data.operands[1].label, operandType: condition3713Data.operands[1].type, operandValue: condition3713Data.operands[1].value}, null, opt_ijData);
                      }
                      if (!(condition3713Index == condition3713ListLen - 1)) {
                        incrementalDom.elementOpen('br');
                        incrementalDom.elementClose('br');
                        incrementalDom.elementOpen('b');
                          incrementalDom.text(' ');
                          if (rule3757Data.logicalOperator == 'and') {
                            /** @desc  */
                            var MSG_EXTERNAL_3929281485914893910 = Liferay.Language.get('and');
                            incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3929281485914893910));
                          } else {
                            /** @desc  */
                            var MSG_EXTERNAL_6627551976444260400 = Liferay.Language.get('or');
                            incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6627551976444260400));
                          }
                          incrementalDom.text(' ');
                        incrementalDom.elementClose('b');
                      }
                    }
                  incrementalDom.elementOpen('br');
                  incrementalDom.elementClose('br');
                  var action3734List = rule3757Data.actions;
                  var action3734ListLen = action3734List.length;
                  for (var action3734Index = 0; action3734Index < action3734ListLen; action3734Index++) {
                      var action3734Data = action3734List[action3734Index];
                      $action({action: action3734Data.action, dataProviderName: action3734Data.dataProviderName, inputLabel: action3734Data.inputLabel, expression: action3734Data.expression, label: action3734Data.label, logicalOperator: rule3757Data.logicalOperator, outputLabel: action3734Data.outputLabel}, null, opt_ijData);
                      if (!(action3734Index == action3734ListLen - 1)) {
                        incrementalDom.text(', ');
                        incrementalDom.elementOpen('br');
                        incrementalDom.elementClose('br');
                        incrementalDom.elementOpen('b');
                          incrementalDom.text(' ');
                          /** @desc  */
                          var MSG_EXTERNAL_3929281485914893910$$1 = Liferay.Language.get('and');
                          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3929281485914893910$$1));
                          incrementalDom.text(' ');
                        incrementalDom.elementClose('b');
                      }
                    }
                incrementalDom.elementClose('p');
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'list-group-item-field');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'card-col-field');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'dropdown dropdown-action');
                  incrementalDom.elementOpenEnd();
                    var ruleIndex__soy3737 = rule3757Index;
                    var isExpanded__soy3739 = dropdownExpandedIndex == ruleIndex__soy3737;
                    incrementalDom.elementOpenStart('div');
                        incrementalDom.attr('class', 'ddm-rule-list-settings');
                        incrementalDom.attr('data-card-id', ruleIndex__soy3737);
                    incrementalDom.elementOpenEnd();
                      $templateAlias1({items: rulesCardOptions, expanded: isExpanded__soy3739, events: {itemClicked: _handleRuleCardClicked}, spritemap: spritemap}, null, opt_ijData);
                      incrementalDom.elementOpenStart('button');
                          incrementalDom.attr('class', 'component-action cursor-pointer dropdown-toggle');
                          incrementalDom.attr('data-onclick', _handleDropdownClicked);
                          incrementalDom.attr('data-rule-index', ruleIndex__soy3737);
                      incrementalDom.elementOpenEnd();
                        $templateAlias2({spritemap: spritemap, symbol: 'ellipsis-v'}, null, opt_ijData);
                      incrementalDom.elementClose('button');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('li');
          }
      incrementalDom.elementClose('ul');
    } else {
      var msg_19957__soy19958 = '';
      /** @desc  */
      var MSG_EXTERNAL_669100315437640172 = Liferay.Language.get('there-are-no-rules-yet-click-on-plus-icon-below-to-add-the-first');
      msg_19957__soy19958 += MSG_EXTERNAL_669100315437640172;
      $empty_list({message: '' + msg_19957__soy19958}, null, opt_ijData);
    }
  incrementalDom.elementClose('div');
}
exports.rule_list = $rule_list;
/**
 * @typedef {{
 *  rules: !Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: (?), expression: (?), inputLabel: (?), label: (!goog.soy.data.SanitizedContent|string), outputLabel: (?), target: (!goog.soy.data.SanitizedContent|string)}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (?)}>, operator: (!goog.soy.data.SanitizedContent|string)}>, logicalOperator: (!goog.soy.data.SanitizedContent|string)}>,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  _handleDropdownClicked: *,
 *  _handleRuleCardClicked: *,
 *  dropdownExpandedIndex: (null|number|undefined),
 *  rulesCardOptions: (?)
 * }}
 */
$rule_list.Params;
if (goog.DEBUG) {
  $rule_list.soyTemplateName = 'LayoutRule.rule_list';
}


/**
 * @param {{
 *  message: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $empty_list(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var message = soy.asserts.assertType(opt_data.message == null || (goog.isString(opt_data.message) || opt_data.message instanceof goog.soy.data.SanitizedContent), 'message', opt_data.message, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'main-content-body');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'sheet taglib-empty-result-message');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'taglib-empty-result-message-header');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('div');
      if (message) {
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'sheet-text text-center text-muted');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('p');
              incrementalDom.attr('class', 'text-default');
          incrementalDom.elementOpenEnd();
            soyIdom.print(message);
          incrementalDom.elementClose('p');
        incrementalDom.elementClose('div');
      }
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.empty_list = $empty_list;
/**
 * @typedef {{
 *  message: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$empty_list.Params;
if (goog.DEBUG) {
  $empty_list.soyTemplateName = 'LayoutRule.empty_list';
}


/**
 * @param {{
 *  content: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $label(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var content = soy.asserts.assertType(opt_data.content == null || (goog.isString(opt_data.content) || opt_data.content instanceof goog.soy.data.SanitizedContent), 'content', opt_data.content, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'label label-lg label-secondary');
      incrementalDom.attr('data-original-title', content);
      incrementalDom.attr('title', content);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', 'text-truncate-inline');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'text-truncate');
      incrementalDom.elementOpenEnd();
        soyIdom.print(content);
      incrementalDom.elementClose('span');
    incrementalDom.elementClose('span');
  incrementalDom.elementClose('span');
}
exports.label = $label;
/**
 * @typedef {{
 *  content: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$label.Params;
if (goog.DEBUG) {
  $label.soyTemplateName = 'LayoutRule.label';
}


/**
 * @param {{
 *  operandType: (!goog.soy.data.SanitizedContent|string),
 *  operandLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operandValue: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $condition(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var operandType = soy.asserts.assertType(goog.isString(opt_data.operandType) || opt_data.operandType instanceof goog.soy.data.SanitizedContent, 'operandType', opt_data.operandType, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var operandLabel = soy.asserts.assertType(opt_data.operandLabel == null || (goog.isString(opt_data.operandLabel) || opt_data.operandLabel instanceof goog.soy.data.SanitizedContent), 'operandLabel', opt_data.operandLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var operandValue = opt_data.operandValue;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-condition-container');
  incrementalDom.elementOpenEnd();
    if (operandType == 'double' || operandType == 'integer' || operandType == 'string' || operandType == 'text' || operandType == 'numeric') {
      incrementalDom.elementOpen('span');
        /** @desc  */
        var MSG_EXTERNAL_3375720161310377589 = Liferay.Language.get('value');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3375720161310377589));
        incrementalDom.text(' ');
      incrementalDom.elementClose('span');
    } else if (operandType == 'user') {
      incrementalDom.elementOpen('span');
        /** @desc  */
        var MSG_EXTERNAL_123010868147850959 = Liferay.Language.get('user');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_123010868147850959));
        incrementalDom.text(' ');
      incrementalDom.elementClose('span');
    } else if (operandType == 'field') {
      incrementalDom.elementOpen('span');
        /** @desc  */
        var MSG_EXTERNAL_8167904999979308163 = Liferay.Language.get('field');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8167904999979308163));
        incrementalDom.text(' ');
      incrementalDom.elementClose('span');
    } else if (operandType == 'list') {
      incrementalDom.elementOpen('span');
        /** @desc  */
        var MSG_EXTERNAL_7246196759043272468 = Liferay.Language.get('list');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_7246196759043272468));
        incrementalDom.text(' ');
      incrementalDom.elementClose('span');
    }
    if (operandLabel) {
      $label({content: operandLabel}, null, opt_ijData);
    } else {
      $label({content: operandValue}, null, opt_ijData);
    }
  incrementalDom.elementClose('div');
}
exports.condition = $condition;
/**
 * @typedef {{
 *  operandType: (!goog.soy.data.SanitizedContent|string),
 *  operandLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operandValue: (?)
 * }}
 */
$condition.Params;
if (goog.DEBUG) {
  $condition.soyTemplateName = 'LayoutRule.condition';
}


/**
 * @param {{
 *  action: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderName: (?),
 *  expression: (?),
 *  label: (?),
 *  outputLabel: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $action(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var action = soy.asserts.assertType(goog.isString(opt_data.action) || opt_data.action instanceof goog.soy.data.SanitizedContent, 'action', opt_data.action, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var dataProviderName = opt_data.dataProviderName;
  /** @type {?} */
  var expression = opt_data.expression;
  /** @type {?} */
  var label = opt_data.label;
  /** @type {?} */
  var outputLabel = opt_data.outputLabel;
  if (action == 'auto-fill') {
    var dataProviderOutputFields__soy3845 = function() {
      var out3855List = outputLabel;
      var out3855ListLen = out3855List.length;
      for (var out3855Index = 0; out3855Index < out3855ListLen; out3855Index++) {
          var out3855Data = out3855List[out3855Index];
          $label({content: out3855Data}, null, opt_ijData);
          if (!(out3855Index == out3855ListLen - 1)) {
            incrementalDom.text(', ');
          }
        }
    };
    incrementalDom.elementOpen('span');
      incrementalDom.elementOpen('b');
        /** @desc  */
        var MSG_EXTERNAL_8930607439260873448 = Liferay.Language.get('autofill-x-from-data-provider-x');
	MSG_EXTERNAL_8930607439260873448 = MSG_EXTERNAL_8930607439260873448.replace(/{(\d+)}/g, '\x01$1\x01');

        var lastIndex_3859 = 0, partRe_3859 = /\x01\d+\x01/g, match_3859;
        do {
          match_3859 = partRe_3859.exec(MSG_EXTERNAL_8930607439260873448) || undefined;
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8930607439260873448.substring(lastIndex_3859, match_3859 && match_3859.index)));
          lastIndex_3859 = partRe_3859.lastIndex;
          switch (match_3859 && match_3859[0]) {
            case '\u00011\u0001':
              soyIdom.print(dataProviderName);
              break;
            case '\u00010\u0001':
              dataProviderOutputFields__soy3845();
              break;
          }
        } while (match_3859);
      incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
  } else if (action == 'calculate') {
    var expressionLabel__soy3870 = function() {
      $label({content: expression}, null, opt_ijData);
    };
    var targetLabel__soy3876 = function() {
      $label({content: label}, null, opt_ijData);
    };
    incrementalDom.elementOpen('span');
      incrementalDom.elementOpen('b');
        /** @desc  */
        var MSG_EXTERNAL_3206084286330742941 = Liferay.Language.get('calculate-field-x-as-x');
	MSG_EXTERNAL_3206084286330742941 = MSG_EXTERNAL_3206084286330742941.replace(/{(\d+)}/g, '\x01$1\x01');

        var lastIndex_3882 = 0, partRe_3882 = /\x01\d+\x01/g, match_3882;
        do {
          match_3882 = partRe_3882.exec(MSG_EXTERNAL_3206084286330742941) || undefined;
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3206084286330742941.substring(lastIndex_3882, match_3882 && match_3882.index)));
          lastIndex_3882 = partRe_3882.lastIndex;
          switch (match_3882 && match_3882[0]) {
            case '\u00011\u0001':
              targetLabel__soy3876();
              break;
            case '\u00010\u0001':
              expressionLabel__soy3870();
              break;
          }
        } while (match_3882);
      incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
  } else if (action == 'enable') {
    incrementalDom.elementOpen('span');
      incrementalDom.elementOpen('b');
        /** @desc  */
        var MSG_EXTERNAL_6578734339769388749 = Liferay.Language.get('enable');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6578734339769388749));
        incrementalDom.text(' ');
      incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
    $label({content: label}, null, opt_ijData);
  } else if (action == 'jump-to-page') {
    incrementalDom.elementOpen('span');
      incrementalDom.elementOpen('b');
        /** @desc  */
        var MSG_EXTERNAL_6089475641791297161 = Liferay.Language.get('jump-to-page');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6089475641791297161));
        incrementalDom.text(' ');
      incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
    $label({content: label}, null, opt_ijData);
  } else if (action == 'require') {
    incrementalDom.elementOpen('span');
      incrementalDom.elementOpen('b');
        /** @desc  */
        var MSG_EXTERNAL_7337980473456458003 = Liferay.Language.get('require');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_7337980473456458003));
        incrementalDom.text(' ');
      incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
    $label({content: label}, null, opt_ijData);
  } else if (action == 'show') {
    incrementalDom.elementOpen('span');
      incrementalDom.elementOpen('b');
        /** @desc  */
        var MSG_EXTERNAL_1504349909398224884 = Liferay.Language.get('show');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_1504349909398224884));
        incrementalDom.text(' ');
      incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
    $label({content: label}, null, opt_ijData);
  }
}
exports.action = $action;
/**
 * @typedef {{
 *  action: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderName: (?),
 *  expression: (?),
 *  label: (?),
 *  outputLabel: (?)
 * }}
 */
$action.Params;
if (goog.DEBUG) {
  $action.soyTemplateName = 'LayoutRule.action';
}

exports.render.params = ["dropdownExpandedIndex","rules","rulesCardOptions","spritemap","strings","_handleDropdownClicked","_handleRuleCardClicked"];
exports.render.types = {"dropdownExpandedIndex":"number","rules":"list<[\n\t\t\tconditions: list<[\n\t\t\t\toperator: string,\n\t\t\t\toperands: list<[\n\t\t\t\t\ttype: string,\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\tactions: list<[\n\t\t\t\taction: string,\n\t\t\t\tdataProviderName: ?,\n\t\t\t\texpression: ?,\n\t\t\t\tinputLabel: ?,\n\t\t\t\ttarget: string,\n\t\t\t\tlabel: string,\n\t\t\t\toutputLabel: ?\n\t\t\t]>,\n\t\t\tlogicalOperator: string\n\t\t]>\n\t","rulesCardOptions":"?","spritemap":"string","strings":"map<string, string>","_handleDropdownClicked":"any","_handleRuleCardClicked":"any"};
exports.rule_list.params = ["rules","spritemap","strings","_handleDropdownClicked","_handleRuleCardClicked","dropdownExpandedIndex","rulesCardOptions"];
exports.rule_list.types = {"rules":"list<[\n\t\t\tconditions: list<[\n\t\t\t\toperator: string,\n\t\t\t\toperands: list<[\n\t\t\t\t\ttype: string,\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tvalue: ?\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\tactions: list<[\n\t\t\t\taction: string,\n\t\t\t\tdataProviderName: ?,\n\t\t\t\texpression: ?,\n\t\t\t\tinputLabel: ?,\n\t\t\t\ttarget: string,\n\t\t\t\tlabel: string,\n\t\t\t\toutputLabel: ?\n\t\t\t]>,\n\t\t\tlogicalOperator: string\n\t\t]>\n\t","spritemap":"string","strings":"map<string, string>","_handleDropdownClicked":"any","_handleRuleCardClicked":"any","dropdownExpandedIndex":"number","rulesCardOptions":"?"};
exports.empty_list.params = ["message"];
exports.empty_list.types = {"message":"string"};
exports.label.params = ["content"];
exports.label.types = {"content":"string"};
exports.condition.params = ["operandType","operandLabel","operandValue"];
exports.condition.types = {"operandType":"string","operandLabel":"string","operandValue":"?"};
exports.action.params = ["action","dataProviderName","expression","label","outputLabel"];
exports.action.types = {"action":"string","dataProviderName":"?","expression":"?","label":"?","outputLabel":"?"};
templates = exports;
return exports;

});

class LayoutRule extends Component {}
Soy.register(LayoutRule, templates);
export { LayoutRule, templates };
export default templates;
/* jshint ignore:end */

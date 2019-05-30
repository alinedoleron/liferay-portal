/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RuleEditor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RuleEditor.
 * @hassoydelcall {PageRenderer.RegisterFieldType.idom}
 * @public
 */

goog.module('RuleEditor.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias3 = Soy.getTemplate('Calculator.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('ClayAlert.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('ClayButton.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('ClayIcon.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ClayModal.incrementaldom', 'render');


/**
 * @param {{
 *  actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, target: (!goog.soy.data.SanitizedContent|string)}>,
 *  actionTypes: !Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  actionsFieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorFunctions: !Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorResultOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  conditions: !Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>}>,
 *  conditionsFieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  dataProvider: (!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  fixedOptions: !Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  invalidRule: boolean,
 *  logicalOperator: (!goog.soy.data.SanitizedContent|string),
 *  pageOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  readOnly: boolean,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleActionSelection: (*|null|undefined),
 *  _handleActionAdded: (*|null|undefined),
 *  _handleCancelRule: (*|null|undefined),
 *  _handleConditionAdded: (*|null|undefined),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  _handleDeleteAction: (*|null|undefined),
 *  _handleDeleteCondition: (*|null|undefined),
 *  _handleEditExpression: (*|null|undefined),
 *  _handleFirstOperandFieldEdited: (*|null|undefined),
 *  _handleLogicalOperationChange: (*|null|undefined),
 *  _handleOperatorEdited: (*|null|undefined),
 *  _handleRuleAdded: (*|null|undefined),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  _handleSecondOperandValueEdited: (*|null|undefined),
 *  _handleTargetSelection: (*|null|undefined),
 *  _handleModalButtonClicked: (*|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, target: (!goog.soy.data.SanitizedContent|string)}>} */
  var actions = soy.asserts.assertType(goog.isArray(opt_data.actions), 'actions', opt_data.actions, '!Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, target: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var actionTypes = soy.asserts.assertType(goog.isArray(opt_data.actionTypes), 'actionTypes', opt_data.actionTypes, '!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var actionsFieldOptions = soy.asserts.assertType(goog.isArray(opt_data.actionsFieldOptions), 'actionsFieldOptions', opt_data.actionsFieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var calculatorFunctions = soy.asserts.assertType(goog.isArray(opt_data.calculatorFunctions), 'calculatorFunctions', opt_data.calculatorFunctions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var calculatorResultOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorResultOptions), 'calculatorResultOptions', opt_data.calculatorResultOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>}>} */
  var conditions = soy.asserts.assertType(goog.isArray(opt_data.conditions), 'conditions', opt_data.conditions, '!Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var conditionsFieldOptions = soy.asserts.assertType(goog.isArray(opt_data.conditionsFieldOptions), 'conditionsFieldOptions', opt_data.conditionsFieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var dataProvider = soy.asserts.assertType(opt_data.dataProvider == null || goog.isArray(opt_data.dataProvider), 'dataProvider', opt_data.dataProvider, '!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var fixedOptions = soy.asserts.assertType(goog.isArray(opt_data.fixedOptions), 'fixedOptions', opt_data.fixedOptions, '!Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {boolean} */
  var invalidRule = soy.asserts.assertType(goog.isBoolean(opt_data.invalidRule) || opt_data.invalidRule === 1 || opt_data.invalidRule === 0, 'invalidRule', opt_data.invalidRule, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var logicalOperator = soy.asserts.assertType(goog.isString(opt_data.logicalOperator) || opt_data.logicalOperator instanceof goog.soy.data.SanitizedContent, 'logicalOperator', opt_data.logicalOperator, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var pageOptions = soy.asserts.assertType(goog.isArray(opt_data.pageOptions), 'pageOptions', opt_data.pageOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {boolean} */
  var readOnly = soy.asserts.assertType(goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0, 'readOnly', opt_data.readOnly, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleActionSelection = opt_data._handleActionSelection;
  /** @type {*|null|undefined} */
  var _handleActionAdded = opt_data._handleActionAdded;
  /** @type {*|null|undefined} */
  var _handleCancelRule = opt_data._handleCancelRule;
  /** @type {*|null|undefined} */
  var _handleConditionAdded = opt_data._handleConditionAdded;
  /** @type {*|null|undefined} */
  var _handleDataProviderInputEdited = opt_data._handleDataProviderInputEdited;
  /** @type {*|null|undefined} */
  var _handleDataProviderOutputEdited = opt_data._handleDataProviderOutputEdited;
  /** @type {*|null|undefined} */
  var _handleDeleteAction = opt_data._handleDeleteAction;
  /** @type {*|null|undefined} */
  var _handleDeleteCondition = opt_data._handleDeleteCondition;
  /** @type {*|null|undefined} */
  var _handleEditExpression = opt_data._handleEditExpression;
  /** @type {*|null|undefined} */
  var _handleFirstOperandFieldEdited = opt_data._handleFirstOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleLogicalOperationChange = opt_data._handleLogicalOperationChange;
  /** @type {*|null|undefined} */
  var _handleOperatorEdited = opt_data._handleOperatorEdited;
  /** @type {*|null|undefined} */
  var _handleRuleAdded = opt_data._handleRuleAdded;
  /** @type {*|null|undefined} */
  var _handleSecondOperandFieldEdited = opt_data._handleSecondOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandTypeEdited = opt_data._handleSecondOperandTypeEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandValueEdited = opt_data._handleSecondOperandValueEdited;
  /** @type {*|null|undefined} */
  var _handleTargetSelection = opt_data._handleTargetSelection;
  /** @type {*|null|undefined} */
  var _handleModalButtonClicked = opt_data._handleModalButtonClicked;
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var roles = soy.asserts.assertType(opt_data.roles == null || goog.isArray(opt_data.roles), 'roles', opt_data.roles, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  var msg_19906__soy19907 = '';
  /** @desc  */
  var MSG_EXTERNAL_503445309622982213 = Liferay.Language.get('cancel');
  msg_19906__soy19907 += MSG_EXTERNAL_503445309622982213;
  var msg_19903__soy19904 = '';
  /** @desc  */
  var MSG_EXTERNAL_8640257554156088424 = Liferay.Language.get('save');
  msg_19903__soy19904 += MSG_EXTERNAL_8640257554156088424;
  var msg_19900__soy19901 = '';
  /** @desc  */
  var MSG_EXTERNAL_3586605110068481026 = Liferay.Language.get('delete-action');
  msg_19900__soy19901 += MSG_EXTERNAL_3586605110068481026;
  var msg_19897__soy19898 = '';
  /** @desc  */
  var MSG_EXTERNAL_3716858591374889111 = Liferay.Language.get('are-you-sure-you-want-to-delete-this-action');
  msg_19897__soy19898 += MSG_EXTERNAL_3716858591374889111;
  var msg_19894__soy19895 = '';
  /** @desc  */
  var MSG_EXTERNAL_3275556889897820559 = Liferay.Language.get('delete-condition');
  msg_19894__soy19895 += MSG_EXTERNAL_3275556889897820559;
  var msg_19891__soy19892 = '';
  /** @desc  */
  var MSG_EXTERNAL_3150805439832632406 = Liferay.Language.get('are-you-sure-you-want-to-delete-this-condition');
  msg_19891__soy19892 += MSG_EXTERNAL_3150805439832632406;
  var msg_19888__soy19889 = '';
  /** @desc  */
  var MSG_EXTERNAL_6305962755687847469 = Liferay.Language.get('actions');
  msg_19888__soy19889 += MSG_EXTERNAL_6305962755687847469;
  var msg_19885__soy19886 = '';
  /** @desc  */
  var MSG_EXTERNAL_7798565773259526400 = Liferay.Language.get('condition');
  msg_19885__soy19886 += MSG_EXTERNAL_7798565773259526400;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-builder-rule-builder liferay-ddm-form-builder-rule-builder-content');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('h2');
        incrementalDom.attr('class', 'form-builder-section-title text-default');
    incrementalDom.elementOpenEnd();
      /** @desc  */
      var MSG_EXTERNAL_4769335989898602524 = Liferay.Language.get('rule');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_4769335989898602524));
    incrementalDom.elementClose('h2');
    incrementalDom.elementOpenStart('h4');
        incrementalDom.attr('class', 'text-default');
    incrementalDom.elementOpenEnd();
      /** @desc  */
      var MSG_EXTERNAL_1948122749534399739 = Liferay.Language.get('define-condition-and-action-to-change-fields-and-elements-on-the-form');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_1948122749534399739));
    incrementalDom.elementClose('h4');
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'liferay-ddm-form-builder-rule-condition-list liferay-ddm-form-rule-builder-timeline timeline ' + ((conditions.length) > 1 ? 'can-remove-item' : ''));
    incrementalDom.elementOpenEnd();
      var enableLogicalOperator__soy2115 = (conditions.length) > 1 ? true : false;
      var param2118 = function() {
        $renderConditionLogicalOperatorDropdown({_handleLogicalOperationChange: _handleLogicalOperationChange, enableLogicalOperator: enableLogicalOperator__soy2115, logicalOperator: logicalOperator}, null, opt_ijData);
      };
      $renderHeader({extraContent: param2118, title: '' + msg_19885__soy19886}, null, opt_ijData);
      var condition2158List = conditions;
      var condition2158ListLen = condition2158List.length;
      for (var condition2158Index = 0; condition2158Index < condition2158ListLen; condition2158Index++) {
          var condition2158Data = condition2158List[condition2158Index];
          $renderCondition({_handleDeleteCondition: _handleDeleteCondition, _handleFirstOperandFieldEdited: _handleFirstOperandFieldEdited, _handleOperatorEdited: _handleOperatorEdited, _handleSecondOperandFieldEdited: _handleSecondOperandFieldEdited, _handleSecondOperandTypeEdited: _handleSecondOperandTypeEdited, _handleSecondOperandValueEdited: _handleSecondOperandValueEdited, binaryOperator: condition2158Data.binaryOperator, fieldOptions: conditionsFieldOptions, firstOperandType: condition2158Data.operands[0].type, firstOperandOptions: condition2158Data.firstOperandOptions, firstOperandValueSelected: condition2158Data.operands[0].value, fixedOptions: fixedOptions, index: condition2158Index, logicalOperator: logicalOperator, operators: condition2158Data.operators, readOnly: readOnly, roles: roles, secondOperandDataType: (condition2158Data.operands[1] != null) ? condition2158Data.operands[1].dataType : '', secondOperandFieldName: '', secondOperandType: (condition2158Data.operands[1] != null) ? condition2158Data.operands[1].type : '', secondOperandValue: (condition2158Data.operands[1] != null) ? condition2158Data.operands[1].value : '', selectedOperator: condition2158Data.operator, spritemap: spritemap}, null, opt_ijData);
        }
    incrementalDom.elementClose('ul');
    $renderAddItemButton({_handleItemAdded: _handleConditionAdded, spritemap: spritemap, type: 'addConditionButton'}, null, opt_ijData);
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'action-list liferay-ddm-form-builder-rule-action-list liferay-ddm-form-rule-builder-timeline timeline ' + ((actions.length) > 1 ? 'can-remove-item' : ''));
    incrementalDom.elementOpenEnd();
      $renderHeader({title: '' + msg_19888__soy19889}, null, opt_ijData);
      var action2200List = actions;
      var action2200ListLen = action2200List.length;
      for (var action2200Index = 0; action2200Index < action2200ListLen; action2200Index++) {
          var action2200Data = action2200List[action2200Index];
          $renderAction({_handleActionSelection: _handleActionSelection, _handleDataProviderInputEdited: _handleDataProviderInputEdited, _handleDataProviderOutputEdited: _handleDataProviderOutputEdited, _handleDeleteAction: _handleDeleteAction, _handleEditExpression: _handleEditExpression, _handleTargetSelection: _handleTargetSelection, actionInputs: action2200Data.inputs, actionOutputs: action2200Data.outputs, actionSelected: action2200Data.action, actionExpression: action2200Data.expression, actionTypes: actionTypes, calculatorFunctions: calculatorFunctions, calculatorFields: action2200Data.calculatorFields, calculatorResultOptions: calculatorResultOptions, dataProvider: dataProvider, fieldOptions: actionsFieldOptions, hasRequiredInputs: action2200Data.hasRequiredInputs, index: action2200Index, pageOptions: pageOptions, spritemap: spritemap, targetSelected: action2200Data.target}, null, opt_ijData);
        }
    incrementalDom.elementClose('ul');
    $renderAddItemButton({_handleItemAdded: _handleActionAdded, spritemap: spritemap, type: 'addActionButton'}, null, opt_ijData);
    $renderModal({_handleModalButtonClicked: _handleModalButtonClicked, question: '' + msg_19891__soy19892, spritemap: spritemap, title: '' + msg_19894__soy19895, type: 'Condition'}, null, opt_ijData);
    $renderModal({_handleModalButtonClicked: _handleModalButtonClicked, question: '' + msg_19897__soy19898, spritemap: spritemap, title: '' + msg_19900__soy19901, type: 'Action'}, null, opt_ijData);
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'liferay-ddm-form-rule-builder-footer');
    incrementalDom.elementOpenEnd();
      $templateAlias1({events: {click: _handleRuleAdded}, disabled: invalidRule, label: '' + msg_19903__soy19904, ref: 'save', spritemap: spritemap, style: 'primary'}, null, opt_ijData);
      $templateAlias1({events: {click: _handleCancelRule}, label: '' + msg_19906__soy19907, ref: 'cancel', spritemap: spritemap, style: 'secondary'}, null, opt_ijData);
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, target: (!goog.soy.data.SanitizedContent|string)}>,
 *  actionTypes: !Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  actionsFieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorFunctions: !Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorResultOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  conditions: !Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>}>,
 *  conditionsFieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  dataProvider: (!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  fixedOptions: !Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  invalidRule: boolean,
 *  logicalOperator: (!goog.soy.data.SanitizedContent|string),
 *  pageOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  readOnly: boolean,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleActionSelection: (*|null|undefined),
 *  _handleActionAdded: (*|null|undefined),
 *  _handleCancelRule: (*|null|undefined),
 *  _handleConditionAdded: (*|null|undefined),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  _handleDeleteAction: (*|null|undefined),
 *  _handleDeleteCondition: (*|null|undefined),
 *  _handleEditExpression: (*|null|undefined),
 *  _handleFirstOperandFieldEdited: (*|null|undefined),
 *  _handleLogicalOperationChange: (*|null|undefined),
 *  _handleOperatorEdited: (*|null|undefined),
 *  _handleRuleAdded: (*|null|undefined),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  _handleSecondOperandValueEdited: (*|null|undefined),
 *  _handleTargetSelection: (*|null|undefined),
 *  _handleModalButtonClicked: (*|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RuleEditor.render';
}


/**
 * @param {{
 *  question: (!goog.soy.data.SanitizedContent|string),
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  type: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleModalButtonClicked: (*|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderModal(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var question = soy.asserts.assertType(goog.isString(opt_data.question) || opt_data.question instanceof goog.soy.data.SanitizedContent, 'question', opt_data.question, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var title = soy.asserts.assertType(goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent, 'title', opt_data.title, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var type = soy.asserts.assertType(goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent, 'type', opt_data.type, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleModalButtonClicked = opt_data._handleModalButtonClicked;
  var msg_19912__soy19913 = '';
  /** @desc  */
  var MSG_EXTERNAL_1330646976582013113 = Liferay.Language.get('dismiss');
  msg_19912__soy19913 += MSG_EXTERNAL_1330646976582013113;
  var msg_19909__soy19910 = '';
  /** @desc  */
  var MSG_EXTERNAL_2456043080471762298 = Liferay.Language.get('delete');
  msg_19909__soy19910 += MSG_EXTERNAL_2456043080471762298;
  var deleteLabel__soy2274 = '';
  deleteLabel__soy2274 += msg_19909__soy19910;
  var dismissLabel__soy2281 = '';
  dismissLabel__soy2281 += msg_19912__soy19913;
  var param2289 = function() {
    incrementalDom.elementOpen('h4');
      soyIdom.print(question);
    incrementalDom.elementClose('h4');
  };
  $templateAlias2({body: param2289, events: {clickButton: _handleModalButtonClicked}, footerButtons: [{alignment: 'right', label: dismissLabel__soy2281, style: 'primary', type: 'close'}, {alignment: 'right', label: deleteLabel__soy2274, style: 'primary', type: 'button'}], ref: 'confirmationModal' + type, size: 'sm', spritemap: spritemap, title: title}, null, opt_ijData);
}
exports.renderModal = $renderModal;
/**
 * @typedef {{
 *  question: (!goog.soy.data.SanitizedContent|string),
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  type: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleModalButtonClicked: (*|null|undefined)
 * }}
 */
$renderModal.Params;
if (goog.DEBUG) {
  $renderModal.soyTemplateName = 'RuleEditor.renderModal';
}


/**
 * @param {{
 *  actionTypes: !Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorFunctions: !Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorResultOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  index: number,
 *  pageOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleActionSelection: (*|null|undefined),
 *  _handleEditExpression: (*|null|undefined),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  _handleDeleteAction: (*|null|undefined),
 *  _handleTargetSelection: (*|null|undefined),
 *  actionExpression: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  actionInputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  actionOutputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  actionSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  dataProvider: (!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  targetSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hasRequiredInputs: (boolean|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderAction(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var actionTypes = soy.asserts.assertType(goog.isArray(opt_data.actionTypes), 'actionTypes', opt_data.actionTypes, '!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var calculatorFields = soy.asserts.assertType(goog.isArray(opt_data.calculatorFields), 'calculatorFields', opt_data.calculatorFields, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var calculatorFunctions = soy.asserts.assertType(goog.isArray(opt_data.calculatorFunctions), 'calculatorFunctions', opt_data.calculatorFunctions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var calculatorResultOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorResultOptions), 'calculatorResultOptions', opt_data.calculatorResultOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var fieldOptions = soy.asserts.assertType(goog.isArray(opt_data.fieldOptions), 'fieldOptions', opt_data.fieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var pageOptions = soy.asserts.assertType(goog.isArray(opt_data.pageOptions), 'pageOptions', opt_data.pageOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleActionSelection = opt_data._handleActionSelection;
  /** @type {*|null|undefined} */
  var _handleEditExpression = opt_data._handleEditExpression;
  /** @type {*|null|undefined} */
  var _handleDataProviderInputEdited = opt_data._handleDataProviderInputEdited;
  /** @type {*|null|undefined} */
  var _handleDataProviderOutputEdited = opt_data._handleDataProviderOutputEdited;
  /** @type {*|null|undefined} */
  var _handleDeleteAction = opt_data._handleDeleteAction;
  /** @type {*|null|undefined} */
  var _handleTargetSelection = opt_data._handleTargetSelection;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var actionExpression = soy.asserts.assertType(opt_data.actionExpression == null || (goog.isString(opt_data.actionExpression) || opt_data.actionExpression instanceof goog.soy.data.SanitizedContent), 'actionExpression', opt_data.actionExpression, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var actionInputs = soy.asserts.assertType(opt_data.actionInputs == null || goog.isArray(opt_data.actionInputs), 'actionInputs', opt_data.actionInputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var actionOutputs = soy.asserts.assertType(opt_data.actionOutputs == null || goog.isArray(opt_data.actionOutputs), 'actionOutputs', opt_data.actionOutputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var actionSelected = soy.asserts.assertType(opt_data.actionSelected == null || (goog.isString(opt_data.actionSelected) || opt_data.actionSelected instanceof goog.soy.data.SanitizedContent), 'actionSelected', opt_data.actionSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var dataProvider = soy.asserts.assertType(opt_data.dataProvider == null || goog.isArray(opt_data.dataProvider), 'dataProvider', opt_data.dataProvider, '!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var targetSelected = soy.asserts.assertType(opt_data.targetSelected == null || (goog.isString(opt_data.targetSelected) || opt_data.targetSelected instanceof goog.soy.data.SanitizedContent), 'targetSelected', opt_data.targetSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var hasRequiredInputs = soy.asserts.assertType(opt_data.hasRequiredInputs == null || (goog.isBoolean(opt_data.hasRequiredInputs) || opt_data.hasRequiredInputs === 1 || opt_data.hasRequiredInputs === 0), 'hasRequiredInputs', opt_data.hasRequiredInputs, 'boolean|null|undefined');
  var msg_19915__soy19916 = '';
  /** @desc  */
  var MSG_EXTERNAL_1961977818876868209 = Liferay.Language.get('choose-an-option');
  msg_19915__soy19916 += MSG_EXTERNAL_1961977818876868209;
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('action-index', index);
      incrementalDom.attr('class', 'action form-builder-rule-action-container-' + index + ' timeline-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'panel panel-default');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'panel-body');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'form-group-autofit');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'form-group-item form-group-item-label form-group-item-shrink');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('h4');
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('class', 'text-truncate-inline');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('span');
                    incrementalDom.attr('class', 'text-truncate');
                incrementalDom.elementOpenEnd();
                  /** @desc  */
                  var MSG_EXTERNAL_363699841498386168 = Liferay.Language.get('do');
                  incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_363699841498386168));
                incrementalDom.elementClose('span');
              incrementalDom.elementClose('span');
            incrementalDom.elementClose('h4');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('action-type-index', index);
              incrementalDom.attr('class', 'action-type form-group-item');
          incrementalDom.elementOpenEnd();
            soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleActionSelection}, options: actionTypes, placeholder: '' + msg_19915__soy19916, ref: 'action' + index, spritemap: spritemap, value: [actionSelected]}, null, opt_ijData);
          incrementalDom.elementClose('div');
          var showTargetDefault__soy2347 = actionSelected && (actionSelected == 'show' || actionSelected == 'enable' || actionSelected == 'require');
          var showTargetAutofill__soy2349 = actionSelected && actionSelected == 'auto-fill';
          var showTargetCalculator__soy2351 = actionSelected && actionSelected == 'calculate';
          var showTargetJumpToPage__soy2353 = actionSelected && actionSelected == 'jump-to-page';
          var showLabel__soy2355 = showTargetAutofill__soy2349 || showTargetCalculator__soy2351;
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'form-group-item form-group-item-label form-group-item-shrink ' + (!showLabel__soy2355 ? 'hide' : '') + ' target-message-' + index);
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('h4');
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('class', 'text-truncate-inline');
              incrementalDom.elementOpenEnd();
                if (showTargetAutofill__soy2349) {
                  incrementalDom.elementOpenStart('span');
                      incrementalDom.attr('class', 'text-truncate');
                  incrementalDom.elementOpenEnd();
                    /** @desc  */
                    var MSG_EXTERNAL_8534686501757254979 = Liferay.Language.get('from-data-provider');
                    incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8534686501757254979));
                  incrementalDom.elementClose('span');
                } else if (showTargetCalculator__soy2351) {
                  incrementalDom.elementOpenStart('span');
                      incrementalDom.attr('class', 'text-truncate');
                  incrementalDom.elementOpenEnd();
                    /** @desc  */
                    var MSG_EXTERNAL_8489746971914331803 = Liferay.Language.get('choose-a-field-to-show-the-result');
                    incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8489746971914331803));
                  incrementalDom.elementClose('span');
                }
              incrementalDom.elementClose('span');
            incrementalDom.elementClose('h4');
          incrementalDom.elementClose('div');
          if (showTargetDefault__soy2347 || showTargetAutofill__soy2349 || showTargetCalculator__soy2351 || showTargetJumpToPage__soy2353) {
            var msg_19918__soy19919 = '';
            /** @desc  */
            var MSG_EXTERNAL_1961977818876868209$$1 = Liferay.Language.get('choose-an-option');
            msg_19918__soy19919 += MSG_EXTERNAL_1961977818876868209$$1;
            var options__soy2380 = showTargetAutofill__soy2349 ? dataProvider : showTargetDefault__soy2347 ? fieldOptions : showTargetJumpToPage__soy2353 ? pageOptions : showTargetCalculator__soy2351 ? calculatorResultOptions : [];
            var ref__soy2382 = showTargetCalculator__soy2351 ? 'calculatorResult' : 'actionTarget';
            $renderActionTarget({_handleTargetSelection: _handleTargetSelection, index: index, options: options__soy2380, placeholder: '' + msg_19918__soy19919, ref: ref__soy2382 + index, spritemap: spritemap, value: targetSelected}, null, opt_ijData);
          }
        incrementalDom.elementClose('div');
        if (showTargetCalculator__soy2351 && targetSelected) {
          $templateAlias3({events: {editExpression: _handleEditExpression}, expression: actionExpression, fields: calculatorFields, functions: calculatorFunctions, index: index, resultSelected: targetSelected, spritemap: spritemap}, null, opt_ijData);
        }
        if (showTargetAutofill__soy2349 && targetSelected) {
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'action-rule-data-provider row');
          incrementalDom.elementOpenEnd();
            $renderAutofill({_handleDataProviderInputEdited: _handleDataProviderInputEdited, _handleDataProviderOutputEdited: _handleDataProviderOutputEdited, actionIndex: index, actionInputs: actionInputs, actionOutputs: actionOutputs, hasRequiredInputs: hasRequiredInputs, spritemap: spritemap}, null, opt_ijData);
          incrementalDom.elementClose('div');
        }
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'timeline-increment');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'timeline-icon');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('span');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'container-trash');
    incrementalDom.elementOpenEnd();
      $templateAlias1({events: {click: _handleDeleteAction}, data: {index: index}, icon: 'trash', monospaced: true, ref: 'trashButtonAction' + index, size: 'sm', spritemap: spritemap, style: 'secondary'}, null, opt_ijData);
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
}
exports.renderAction = $renderAction;
/**
 * @typedef {{
 *  actionTypes: !Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorFunctions: !Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  calculatorResultOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  index: number,
 *  pageOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleActionSelection: (*|null|undefined),
 *  _handleEditExpression: (*|null|undefined),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  _handleDeleteAction: (*|null|undefined),
 *  _handleTargetSelection: (*|null|undefined),
 *  actionExpression: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  actionInputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  actionOutputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  actionSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  dataProvider: (!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  targetSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hasRequiredInputs: (boolean|null|undefined)
 * }}
 */
$renderAction.Params;
if (goog.DEBUG) {
  $renderAction.soyTemplateName = 'RuleEditor.renderAction';
}


/**
 * @param {{
 *  index: number,
 *  options: *,
 *  ref: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleTargetSelection: (*|null|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderActionTarget(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {*} */
  var options = opt_data.options;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var ref = soy.asserts.assertType(goog.isString(opt_data.ref) || opt_data.ref instanceof goog.soy.data.SanitizedContent, 'ref', opt_data.ref, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleTargetSelection = opt_data._handleTargetSelection;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var placeholder = soy.asserts.assertType(opt_data.placeholder == null || (goog.isString(opt_data.placeholder) || opt_data.placeholder instanceof goog.soy.data.SanitizedContent), 'placeholder', opt_data.placeholder, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-item target-action');
      incrementalDom.attr('target-action-index', index);
  incrementalDom.elementOpenEnd();
    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleTargetSelection}, options: options, placeholder: placeholder, ref: ref, spritemap: spritemap, value: [value]}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.renderActionTarget = $renderActionTarget;
/**
 * @typedef {{
 *  index: number,
 *  options: *,
 *  ref: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleTargetSelection: (*|null|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$renderActionTarget.Params;
if (goog.DEBUG) {
  $renderActionTarget.soyTemplateName = 'RuleEditor.renderActionTarget';
}


/**
 * @param {{
 *  binaryOperator: boolean,
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  index: number,
 *  readOnly: boolean,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDeleteCondition: (*|null|undefined),
 *  _handleFirstOperandFieldEdited: (*|null|undefined),
 *  _handleOperatorEdited: (*|null|undefined),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  _handleSecondOperandValueEdited: (*|null|undefined),
 *  firstOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  firstOperandValueSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  firstOperandOptions: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  fixedOptions: (*|null|undefined),
 *  logicalOperator: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operators: (!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  secondOperandDataType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandFieldName: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandValue: (*|null|undefined),
 *  selectedOperator: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderCondition(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {boolean} */
  var binaryOperator = soy.asserts.assertType(goog.isBoolean(opt_data.binaryOperator) || opt_data.binaryOperator === 1 || opt_data.binaryOperator === 0, 'binaryOperator', opt_data.binaryOperator, 'boolean');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>} */
  var fieldOptions = soy.asserts.assertType(goog.isArray(opt_data.fieldOptions), 'fieldOptions', opt_data.fieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>');
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {boolean} */
  var readOnly = soy.asserts.assertType(goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0, 'readOnly', opt_data.readOnly, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleDeleteCondition = opt_data._handleDeleteCondition;
  /** @type {*|null|undefined} */
  var _handleFirstOperandFieldEdited = opt_data._handleFirstOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleOperatorEdited = opt_data._handleOperatorEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandFieldEdited = opt_data._handleSecondOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandTypeEdited = opt_data._handleSecondOperandTypeEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandValueEdited = opt_data._handleSecondOperandValueEdited;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var firstOperandType = soy.asserts.assertType(opt_data.firstOperandType == null || (goog.isString(opt_data.firstOperandType) || opt_data.firstOperandType instanceof goog.soy.data.SanitizedContent), 'firstOperandType', opt_data.firstOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var firstOperandValueSelected = soy.asserts.assertType(opt_data.firstOperandValueSelected == null || (goog.isString(opt_data.firstOperandValueSelected) || opt_data.firstOperandValueSelected instanceof goog.soy.data.SanitizedContent), 'firstOperandValueSelected', opt_data.firstOperandValueSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var firstOperandOptions = soy.asserts.assertType(opt_data.firstOperandOptions == null || goog.isArray(opt_data.firstOperandOptions), 'firstOperandOptions', opt_data.firstOperandOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {*|null|undefined} */
  var fixedOptions = opt_data.fixedOptions;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var logicalOperator = soy.asserts.assertType(opt_data.logicalOperator == null || (goog.isString(opt_data.logicalOperator) || opt_data.logicalOperator instanceof goog.soy.data.SanitizedContent), 'logicalOperator', opt_data.logicalOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var operators = soy.asserts.assertType(opt_data.operators == null || goog.isArray(opt_data.operators), 'operators', opt_data.operators, '!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var roles = soy.asserts.assertType(opt_data.roles == null || goog.isArray(opt_data.roles), 'roles', opt_data.roles, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandDataType = soy.asserts.assertType(opt_data.secondOperandDataType == null || (goog.isString(opt_data.secondOperandDataType) || opt_data.secondOperandDataType instanceof goog.soy.data.SanitizedContent), 'secondOperandDataType', opt_data.secondOperandDataType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandFieldName = soy.asserts.assertType(opt_data.secondOperandFieldName == null || (goog.isString(opt_data.secondOperandFieldName) || opt_data.secondOperandFieldName instanceof goog.soy.data.SanitizedContent), 'secondOperandFieldName', opt_data.secondOperandFieldName, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandType = soy.asserts.assertType(opt_data.secondOperandType == null || (goog.isString(opt_data.secondOperandType) || opt_data.secondOperandType instanceof goog.soy.data.SanitizedContent), 'secondOperandType', opt_data.secondOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var secondOperandValue = opt_data.secondOperandValue;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var selectedOperator = soy.asserts.assertType(opt_data.selectedOperator == null || (goog.isString(opt_data.selectedOperator) || opt_data.selectedOperator instanceof goog.soy.data.SanitizedContent), 'selectedOperator', opt_data.selectedOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var msg_19921__soy19922 = '';
  /** @desc  */
  var MSG_EXTERNAL_1961977818876868209 = Liferay.Language.get('choose-an-option');
  msg_19921__soy19922 += MSG_EXTERNAL_1961977818876868209;
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'form-builder-rule-condition-container timeline-item');
      incrementalDom.attr('condition-index', index);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'panel panel-default');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'flex-container panel-body');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'form-group-autofit');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'form-group-item form-group-item-label form-group-item-shrink');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('h4');
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('class', 'text-truncate-inline');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('span');
                    incrementalDom.attr('class', 'text-truncate');
                incrementalDom.elementOpenEnd();
                  /** @desc  */
                  var MSG_EXTERNAL_5099375131746050090 = Liferay.Language.get('if');
                  incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_5099375131746050090));
                incrementalDom.elementClose('span');
              incrementalDom.elementClose('span');
            incrementalDom.elementClose('h4');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'condition-if form-group-item');
              incrementalDom.attr('condition-if-index', index);
          incrementalDom.elementOpenEnd();
            soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleFirstOperandFieldEdited}, fixedOptions: fixedOptions, options: fieldOptions, placeholder: '' + msg_19921__soy19922, ref: 'firstOperand' + index, spritemap: spritemap, value: [firstOperandValueSelected]}, null, opt_ijData);
          incrementalDom.elementClose('div');
          $renderConditionOperators(opt_data, null, opt_ijData);
          if (firstOperandType && selectedOperator) {
            if (firstOperandType != 'user') {
              if (binaryOperator) {
                $renderConditionSecondOperandTypeSelector(opt_data, null, opt_ijData);
                var fieldHasOptions__soy2527 = secondOperandType == 'select' || secondOperandType == 'checkbox_multiple' || secondOperandType == 'radio';
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'condition-type-value form-group-item');
                    incrementalDom.attr('condition-type-value-index', index);
                incrementalDom.elementOpenEnd();
                  if (fieldHasOptions__soy2527) {
                    var msg_19924__soy19925 = '';
                    /** @desc  */
                    var MSG_EXTERNAL_1961977818876868209$$1 = Liferay.Language.get('choose-an-option');
                    msg_19924__soy19925 += MSG_EXTERNAL_1961977818876868209$$1;
                    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandValueEdited}, name: secondOperandFieldName, options: firstOperandOptions, placeholder: '' + msg_19924__soy19925, readOnly: readOnly, ref: 'secondOperand' + index, spritemap: spritemap, value: [secondOperandValue]}, null, opt_ijData);
                  } else if (secondOperandType == 'field') {
                    var msg_19927__soy19928 = '';
                    /** @desc  */
                    var MSG_EXTERNAL_1961977818876868209$$2 = Liferay.Language.get('choose-an-option');
                    msg_19927__soy19928 += MSG_EXTERNAL_1961977818876868209$$2;
                    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandValueEdited}, options: fieldOptions, placeholder: '' + msg_19927__soy19928, ref: 'secondOperand' + index, spritemap: spritemap, value: [secondOperandValue]}, null, opt_ijData);
                  } else {
                    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), secondOperandType, false)({dataType: secondOperandDataType, events: {fieldEdited: _handleSecondOperandValueEdited}, name: secondOperandFieldName, readOnly: readOnly, ref: 'secondOperand' + index, spritemap: spritemap, value: secondOperandValue}, null, opt_ijData);
                  }
                incrementalDom.elementClose('div');
              }
            } else {
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'condition-type-value form-group-item');
                  incrementalDom.attr('condition-type-value-index', index);
              incrementalDom.elementOpenEnd();
                $renderConditionUserRolesSelector(opt_data, null, opt_ijData);
              incrementalDom.elementClose('div');
            }
          }
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'timeline-increment');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'timeline-icon');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('span');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'operator panel panel-default panel-inline');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'panel-body text-uppercase');
      incrementalDom.elementOpenEnd();
        if (logicalOperator == 'and') {
          /** @desc  */
          var MSG_EXTERNAL_3929281485914893910 = Liferay.Language.get('and');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3929281485914893910));
        } else {
          /** @desc  */
          var MSG_EXTERNAL_6627551976444260400 = Liferay.Language.get('or');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6627551976444260400));
        }
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'container-trash');
    incrementalDom.elementOpenEnd();
      $templateAlias1({events: {click: _handleDeleteCondition}, data: {index: index}, icon: 'trash', monospaced: true, ref: 'trashButton' + index, size: 'sm', spritemap: spritemap, style: 'secondary'}, null, opt_ijData);
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
}
exports.renderCondition = $renderCondition;
/**
 * @typedef {{
 *  binaryOperator: boolean,
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>,
 *  index: number,
 *  readOnly: boolean,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDeleteCondition: (*|null|undefined),
 *  _handleFirstOperandFieldEdited: (*|null|undefined),
 *  _handleOperatorEdited: (*|null|undefined),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  _handleSecondOperandValueEdited: (*|null|undefined),
 *  firstOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  firstOperandValueSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  firstOperandOptions: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  fixedOptions: (*|null|undefined),
 *  logicalOperator: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operators: (!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  secondOperandDataType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandFieldName: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandValue: (*|null|undefined),
 *  selectedOperator: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$renderCondition.Params;
if (goog.DEBUG) {
  $renderCondition.soyTemplateName = 'RuleEditor.renderCondition';
}


/**
 * @param {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleOperatorEdited: (*|null|undefined),
 *  firstOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operators: (!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  selectedOperator: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderConditionOperators(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleOperatorEdited = opt_data._handleOperatorEdited;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var firstOperandType = soy.asserts.assertType(opt_data.firstOperandType == null || (goog.isString(opt_data.firstOperandType) || opt_data.firstOperandType instanceof goog.soy.data.SanitizedContent), 'firstOperandType', opt_data.firstOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var operators = soy.asserts.assertType(opt_data.operators == null || goog.isArray(opt_data.operators), 'operators', opt_data.operators, '!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var selectedOperator = soy.asserts.assertType(opt_data.selectedOperator == null || (goog.isString(opt_data.selectedOperator) || opt_data.selectedOperator instanceof goog.soy.data.SanitizedContent), 'selectedOperator', opt_data.selectedOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var msg_19930__soy19931 = '';
  /** @desc  */
  var MSG_EXTERNAL_1961977818876868209 = Liferay.Language.get('choose-an-option');
  msg_19930__soy19931 += MSG_EXTERNAL_1961977818876868209;
  var readOnly__soy2623 = firstOperandType ? false : true;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'condition-operator form-group-item');
      incrementalDom.attr('condition-operator-index', index);
  incrementalDom.elementOpenEnd();
    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleOperatorEdited}, options: operators, placeholder: '' + msg_19930__soy19931, readOnly: readOnly__soy2623, ref: 'conditionOperator' + index, spritemap: spritemap, value: [selectedOperator]}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.renderConditionOperators = $renderConditionOperators;
/**
 * @typedef {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleOperatorEdited: (*|null|undefined),
 *  firstOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operators: (!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  selectedOperator: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$renderConditionOperators.Params;
if (goog.DEBUG) {
  $renderConditionOperators.soyTemplateName = 'RuleEditor.renderConditionOperators';
}


/**
 * @param {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  secondOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  selectedOperator: (*|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderConditionSecondOperandTypeSelector(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleSecondOperandTypeEdited = opt_data._handleSecondOperandTypeEdited;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandType = soy.asserts.assertType(opt_data.secondOperandType == null || (goog.isString(opt_data.secondOperandType) || opt_data.secondOperandType instanceof goog.soy.data.SanitizedContent), 'secondOperandType', opt_data.secondOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var selectedOperator = opt_data.selectedOperator;
  var msg_19936__soy19937 = '';
  /** @desc  */
  var MSG_EXTERNAL_3375720161310377589 = Liferay.Language.get('value');
  msg_19936__soy19937 += MSG_EXTERNAL_3375720161310377589;
  var msg_19933__soy19934 = '';
  /** @desc  */
  var MSG_EXTERNAL_1829736102968854254 = Liferay.Language.get('other-field');
  msg_19933__soy19934 += MSG_EXTERNAL_1829736102968854254;
  var otherFieldLabel__soy2648 = '';
  otherFieldLabel__soy2648 += msg_19933__soy19934;
  var valueLabel__soy2655 = '';
  valueLabel__soy2655 += msg_19936__soy19937;
  var options__soy2662 = [{label: valueLabel__soy2655, value: 'value'}, {label: otherFieldLabel__soy2648, value: 'field'}];
  var value__soy2664 = secondOperandType == 'field' ? 'field' : secondOperandType ? 'value' : '';
  var visible__soy2666 = selectedOperator && secondOperandType != 'none' ? true : false;
  if (visible__soy2666) {
    var msg_19939__soy19940 = '';
    /** @desc  */
    var MSG_EXTERNAL_1961977818876868209 = Liferay.Language.get('choose-an-option');
    msg_19939__soy19940 += MSG_EXTERNAL_1961977818876868209;
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'condition-type form-group-item');
        incrementalDom.attr('condition-type-index', index);
    incrementalDom.elementOpenEnd();
      soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandTypeEdited}, options: options__soy2662, placeholder: '' + msg_19939__soy19940, ref: 'secondOperandTypeSelector' + index, spritemap: spritemap, value: [value__soy2664], visible: visible__soy2666}, null, opt_ijData);
    incrementalDom.elementClose('div');
  }
}
exports.renderConditionSecondOperandTypeSelector = $renderConditionSecondOperandTypeSelector;
/**
 * @typedef {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  secondOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  selectedOperator: (*|null|undefined)
 * }}
 */
$renderConditionSecondOperandTypeSelector.Params;
if (goog.DEBUG) {
  $renderConditionSecondOperandTypeSelector.soyTemplateName = 'RuleEditor.renderConditionSecondOperandTypeSelector';
}


/**
 * @param {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  selectedOperator: (*|null|undefined),
 *  secondOperandValue: (*|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderConditionUserRolesSelector(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleSecondOperandFieldEdited = opt_data._handleSecondOperandFieldEdited;
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var roles = soy.asserts.assertType(opt_data.roles == null || goog.isArray(opt_data.roles), 'roles', opt_data.roles, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {*|null|undefined} */
  var selectedOperator = opt_data.selectedOperator;
  /** @type {*|null|undefined} */
  var secondOperandValue = opt_data.secondOperandValue;
  var msg_19942__soy19943 = '';
  /** @desc  */
  var MSG_EXTERNAL_1961977818876868209 = Liferay.Language.get('choose-an-option');
  msg_19942__soy19943 += MSG_EXTERNAL_1961977818876868209;
  var visible__soy2696 = selectedOperator ? true : false;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'condition-user-role form-group-item ' + (!visible__soy2696 ? 'hide' : ''));
      incrementalDom.attr('condition-user-role-index', index);
  incrementalDom.elementOpenEnd();
    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandFieldEdited}, options: roles, placeholder: '' + msg_19942__soy19943, spritemap: spritemap, value: [secondOperandValue]}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.renderConditionUserRolesSelector = $renderConditionUserRolesSelector;
/**
 * @typedef {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  selectedOperator: (*|null|undefined),
 *  secondOperandValue: (*|null|undefined)
 * }}
 */
$renderConditionUserRolesSelector.Params;
if (goog.DEBUG) {
  $renderConditionUserRolesSelector.soyTemplateName = 'RuleEditor.renderConditionUserRolesSelector';
}


/**
 * @param {{
 *  _handleLogicalOperationChange: *,
 *  enableLogicalOperator: (boolean|null|undefined),
 *  logicalOperator: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderConditionLogicalOperatorDropdown(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*} */
  var _handleLogicalOperationChange = opt_data._handleLogicalOperationChange;
  /** @type {boolean|null|undefined} */
  var enableLogicalOperator = soy.asserts.assertType(opt_data.enableLogicalOperator == null || (goog.isBoolean(opt_data.enableLogicalOperator) || opt_data.enableLogicalOperator === 1 || opt_data.enableLogicalOperator === 0), 'enableLogicalOperator', opt_data.enableLogicalOperator, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var logicalOperator = soy.asserts.assertType(opt_data.logicalOperator == null || (goog.isString(opt_data.logicalOperator) || opt_data.logicalOperator instanceof goog.soy.data.SanitizedContent), 'logicalOperator', opt_data.logicalOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy2721 = function() {
    incrementalDom.attr('class', 'btn btn-default dropdown-toggle dropdown-toggle-operator text-uppercase');
    incrementalDom.attr('data-toggle', 'dropdown');
    incrementalDom.attr('ref', 'logicalOperatorDropDownButton');
    incrementalDom.attr('type', 'button');
    if (!enableLogicalOperator) {
      incrementalDom.attr('disabled', '');
    }
  };
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'btn-group dropdown');
      incrementalDom.attr('style', 'block');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('button');
        attributes__soy2721();
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'dropdown-toggle-selected-value');
      incrementalDom.elementOpenEnd();
        if (logicalOperator == 'and') {
          /** @desc  */
          var MSG_EXTERNAL_3929281485914893910 = Liferay.Language.get('and');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3929281485914893910));
        } else {
          /** @desc  */
          var MSG_EXTERNAL_6627551976444260400 = Liferay.Language.get('or');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6627551976444260400));
        }
      incrementalDom.elementClose('span');
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'caret');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('span');
    incrementalDom.elementClose('button');
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'dropdown-menu');
        incrementalDom.attr('data-onclick', _handleLogicalOperationChange);
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'logic-operator text-uppercase');
          incrementalDom.attr('ref', 'globalOrOperator');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('data-value', 'or');
        incrementalDom.elementOpenEnd();
          /** @desc  */
          var MSG_EXTERNAL_6627551976444260400$$1 = Liferay.Language.get('or');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6627551976444260400$$1));
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'divider');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'logic-operator text-uppercase');
          incrementalDom.attr('ref', 'globalAndOperator');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('data-value', 'and');
        incrementalDom.elementOpenEnd();
          /** @desc  */
          var MSG_EXTERNAL_3929281485914893910$$1 = Liferay.Language.get('and');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3929281485914893910$$1));
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
    incrementalDom.elementClose('ul');
  incrementalDom.elementClose('div');
}
exports.renderConditionLogicalOperatorDropdown = $renderConditionLogicalOperatorDropdown;
/**
 * @typedef {{
 *  _handleLogicalOperationChange: *,
 *  enableLogicalOperator: (boolean|null|undefined),
 *  logicalOperator: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$renderConditionLogicalOperatorDropdown.Params;
if (goog.DEBUG) {
  $renderConditionLogicalOperatorDropdown.soyTemplateName = 'RuleEditor.renderConditionLogicalOperatorDropdown';
}


/**
 * @param {{
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  extraContent: (function()|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderHeader(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var title = soy.asserts.assertType(goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent, 'title', opt_data.title, '!goog.soy.data.SanitizedContent|string');
  /** @type {function()|null|undefined} */
  var extraContent = soy.asserts.assertType(opt_data.extraContent == null || goog.isFunction(opt_data.extraContent), 'extraContent', opt_data.extraContent, 'function()|null|undefined');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'timeline-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'panel panel-default');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'flex-container panel-body');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'h4 panel-title');
        incrementalDom.elementOpenEnd();
          soyIdom.print(title);
        incrementalDom.elementClose('div');
        if (extraContent) {
          extraContent();
        }
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'timeline-increment');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'timeline-icon');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('span');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
}
exports.renderHeader = $renderHeader;
/**
 * @typedef {{
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  extraContent: (function()|null|undefined)
 * }}
 */
$renderHeader.Params;
if (goog.DEBUG) {
  $renderHeader.soyTemplateName = 'RuleEditor.renderHeader';
}


/**
 * @param {{
 *  _handleItemAdded: (*|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderAddItemButton(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*|null|undefined} */
  var _handleItemAdded = opt_data._handleItemAdded;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'addbutton-timeline-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'add-item timeline-increment-icon');
    incrementalDom.elementOpenEnd();
      $templateAlias1({events: {click: _handleItemAdded}, elementClasses: 'rounded-circle', icon: 'plus', monospaced: true, ref: type, size: 'sm', spritemap: spritemap}, null, opt_ijData);
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.renderAddItemButton = $renderAddItemButton;
/**
 * @typedef {{
 *  _handleItemAdded: (*|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$renderAddItemButton.Params;
if (goog.DEBUG) {
  $renderAddItemButton.soyTemplateName = 'RuleEditor.renderAddItemButton';
}


/**
 * @param {{
 *  actionIndex: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  actionInputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  actionOutputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  hasRequiredInputs: (boolean|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderAutofill(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var actionIndex = soy.asserts.assertType(goog.isNumber(opt_data.actionIndex), 'actionIndex', opt_data.actionIndex, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleDataProviderInputEdited = opt_data._handleDataProviderInputEdited;
  /** @type {*|null|undefined} */
  var _handleDataProviderOutputEdited = opt_data._handleDataProviderOutputEdited;
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var actionInputs = soy.asserts.assertType(opt_data.actionInputs == null || goog.isArray(opt_data.actionInputs), 'actionInputs', opt_data.actionInputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined} */
  var actionOutputs = soy.asserts.assertType(opt_data.actionOutputs == null || goog.isArray(opt_data.actionOutputs), 'actionOutputs', opt_data.actionOutputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined');
  /** @type {boolean|null|undefined} */
  var hasRequiredInputs = soy.asserts.assertType(opt_data.hasRequiredInputs == null || (goog.isBoolean(opt_data.hasRequiredInputs) || opt_data.hasRequiredInputs === 1 || opt_data.hasRequiredInputs === 0), 'hasRequiredInputs', opt_data.hasRequiredInputs, 'boolean|null|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'col-md-12 ddm-data-provider-container no-padding');
  incrementalDom.elementOpenEnd();
    if (!actionOutputs || (actionOutputs.length) == 0) {
      var msg_19948__soy19949 = '';
      /** @desc  */
      var MSG_EXTERNAL_8772116786769251214 = Liferay.Language.get('error');
      msg_19948__soy19949 += MSG_EXTERNAL_8772116786769251214;
      var msg_19945__soy19946 = '';
      /** @desc  */
      var MSG_EXTERNAL_6818430579731669946 = Liferay.Language.get('data-provider-error');
      msg_19945__soy19946 += MSG_EXTERNAL_6818430579731669946;
      $templateAlias4({message: '' + msg_19945__soy19946, spritemap: spritemap, style: 'danger', title: '' + msg_19948__soy19949}, null, opt_ijData);
    }
    if (actionInputs && (actionInputs.length) > 0 && actionOutputs && (actionOutputs.length) > 0) {
      var msg_19951__soy19952 = '';
      /** @desc  */
      var MSG_EXTERNAL_1961977818876868209 = Liferay.Language.get('choose-an-option');
      msg_19951__soy19952 += MSG_EXTERNAL_1961977818876868209;
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'data-provider-parameter-input-container');
      incrementalDom.elementOpenEnd();
        if (hasRequiredInputs) {
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'data-provider-label-container');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('label');
              incrementalDom.elementOpenStart('p');
                  incrementalDom.attr('class', 'data-provider-parameter-input-required-field');
              incrementalDom.elementOpenEnd();
                /** @desc  */
                var MSG_EXTERNAL_6811624707113510241 = Liferay.Language.get('required-field');
                incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6811624707113510241));
              incrementalDom.elementClose('p');
              incrementalDom.text(' ');
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('class', 'reference-mark');
              incrementalDom.elementOpenEnd();
                $templateAlias5({spritemap: spritemap, symbol: 'asterisk'}, null, opt_ijData);
              incrementalDom.elementClose('span');
            incrementalDom.elementClose('label');
          incrementalDom.elementClose('div');
        }
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'data-provider-label-container');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('p');
              incrementalDom.attr('class', 'data-provider-parameter-input');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('b');
              /** @desc  */
              var MSG_EXTERNAL_3371778164350296990 = Liferay.Language.get('data-provider-parameter-input');
              incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3371778164350296990));
            incrementalDom.elementClose('b');
          incrementalDom.elementClose('p');
          incrementalDom.elementOpenStart('p');
              incrementalDom.attr('class', 'data-provider-parameter-input-description');
          incrementalDom.elementOpenEnd();
            /** @desc  */
            var MSG_EXTERNAL_8269265529940927663 = Liferay.Language.get('data-provider-parameter-input-description');
            incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8269265529940927663));
          incrementalDom.elementClose('p');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'data-provider-parameter-input-list row');
        incrementalDom.elementOpenEnd();
          var input2865List = actionInputs;
          var input2865ListLen = input2865List.length;
          for (var input2865Index = 0; input2865Index < input2865ListLen; input2865Index++) {
              var input2865Data = input2865List[input2865Index];
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'col-md-3 container-input-label');
              incrementalDom.elementOpenEnd();
                soyIdom.print(input2865Data.label);
                incrementalDom.elementOpen('label');
                  if (input2865Data.required) {
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'input-required reference-mark');
                    incrementalDom.elementOpenEnd();
                      $templateAlias5({spritemap: spritemap, symbol: 'asterisk'}, null, opt_ijData);
                    incrementalDom.elementClose('span');
                  }
                incrementalDom.elementClose('label');
              incrementalDom.elementClose('div');
              var index__soy2846 = input2865Index;
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'col-md-9 container-input-field container-input-field-' + index__soy2846);
                  incrementalDom.attr('container-input-field-index', index__soy2846);
              incrementalDom.elementOpenEnd();
                soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleDataProviderInputEdited}, options: input2865Data.fieldOptions, placeholder: '' + msg_19951__soy19952, ref: 'action' + actionIndex + 'dataProviderInput' + index__soy2846, spritemap: spritemap, value: [input2865Data.value]}, null, opt_ijData);
              incrementalDom.elementClose('div');
            }
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    }
    if (actionOutputs && (actionOutputs.length) > 0) {
      var msg_19954__soy19955 = '';
      /** @desc  */
      var MSG_EXTERNAL_1961977818876868209$$1 = Liferay.Language.get('choose-an-option');
      msg_19954__soy19955 += MSG_EXTERNAL_1961977818876868209$$1;
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'data-provider-parameter-output-container');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'data-provider-label-container');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('p');
              incrementalDom.attr('class', 'data-provider-parameter-output');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('b');
              /** @desc  */
              var MSG_EXTERNAL_4821762715526155474 = Liferay.Language.get('data-provider-parameter-output');
              incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_4821762715526155474));
            incrementalDom.elementClose('b');
          incrementalDom.elementClose('p');
          incrementalDom.elementOpenStart('p');
              incrementalDom.attr('class', 'data-provider-parameter-output-description');
          incrementalDom.elementOpenEnd();
            /** @desc  */
            var MSG_EXTERNAL_1855554600739008989 = Liferay.Language.get('data-provider-parameter-output-description');
            incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_1855554600739008989));
          incrementalDom.elementClose('p');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'data-provider-parameter-output-list row');
        incrementalDom.elementOpenEnd();
          var output2902List = actionOutputs;
          var output2902ListLen = output2902List.length;
          for (var output2902Index = 0; output2902Index < output2902ListLen; output2902Index++) {
              var output2902Data = output2902List[output2902Index];
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'col-md-3 container-output-label');
              incrementalDom.elementOpenEnd();
                soyIdom.print(output2902Data.name);
              incrementalDom.elementClose('div');
              var index__soy2883 = output2902Index;
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'col-md-9 container-output-field container-output-field-' + index__soy2883);
                  incrementalDom.attr('container-output-field-index', index__soy2883);
              incrementalDom.elementOpenEnd();
                soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleDataProviderOutputEdited}, options: output2902Data.fieldOptions, placeholder: '' + msg_19954__soy19955, ref: 'action' + actionIndex + 'dataProviderOutput' + index__soy2883, spritemap: spritemap, value: [output2902Data.value]}, null, opt_ijData);
              incrementalDom.elementClose('div');
            }
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    }
  incrementalDom.elementClose('div');
}
exports.renderAutofill = $renderAutofill;
/**
 * @typedef {{
 *  actionIndex: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  actionInputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  actionOutputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string)}>|null|undefined),
 *  hasRequiredInputs: (boolean|null|undefined)
 * }}
 */
$renderAutofill.Params;
if (goog.DEBUG) {
  $renderAutofill.soyTemplateName = 'RuleEditor.renderAutofill';
}

exports.render.params = ["actions","actionTypes","actionsFieldOptions","calculatorFunctions","calculatorResultOptions","conditions","conditionsFieldOptions","dataProvider","fixedOptions","invalidRule","logicalOperator","pageOptions","readOnly","spritemap","_handleActionSelection","_handleActionAdded","_handleCancelRule","_handleConditionAdded","_handleDataProviderInputEdited","_handleDataProviderOutputEdited","_handleDeleteAction","_handleDeleteCondition","_handleEditExpression","_handleFirstOperandFieldEdited","_handleLogicalOperationChange","_handleOperatorEdited","_handleRuleAdded","_handleSecondOperandFieldEdited","_handleSecondOperandTypeEdited","_handleSecondOperandValueEdited","_handleTargetSelection","_handleModalButtonClicked","roles"];
exports.render.types = {"actions":"list<[\n\t\t\taction: string,\n\t\t\tcalculatorFields: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tname: string,\n\t\t\t\toptions: list<[\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>,\n\t\t\t\ttype: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\texpression: string,\n\t\t\thasRequiredInputs: bool,\n\t\t\tinputs: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tname: string,\n\t\t\t\trequired: bool,\n\t\t\t\ttype: string,\n\t\t\t\tvalue: string,\n\t\t\t\tfieldOptions: list<[\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tname: string,\n\t\t\t\t\toptions: list<[\n\t\t\t\t\t\tlabel: string,\n\t\t\t\t\t\tvalue: string\n\t\t\t\t\t]>,\n\t\t\t\t\ttype: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\tlabel: string,\n\t\t\toutputs: list<[\n\t\t\t\tname: string,\n\t\t\t\ttype: string,\n\t\t\t\tvalue: string,\n\t\t\t\tfieldOptions: list<[\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tname: string,\n\t\t\t\t\toptions: list<[\n\t\t\t\t\t\tlabel: string,\n\t\t\t\t\t\tvalue: string\n\t\t\t\t\t]>,\n\t\t\t\t\ttype: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\ttarget: string\n\t\t]>\n\t","actionTypes":"list<[\n\t\t\tvalue: string,\n\t\t\tname: string\n\t\t]>\n\t","actionsFieldOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","calculatorFunctions":"list<[\n\t\t\tlabel: string,\n\t\t\ttooltip: string,\n\t\t\tvalue: string\n\t\t]>\n\t","calculatorResultOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","conditions":"list<[\n\t\t\tbinaryOperator: bool,\n\t\t\tfirstOperandOptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\toperands: list<[\n\t\t\t\tdataType: string,\n\t\t\t\ttype: string,\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\toperator: string,\n\t\t\toperators: list<[\n\t\t\t\tname: string,\n\t\t\t\tparameterTypes: list<string>,\n\t\t\t\treturnType: string,\n\t\t\t\tvalue: string\n\t\t\t]>\n\t\t]>\n\t","conditionsFieldOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","dataProvider":"list<[\n\t\t\tid: string,\n\t\t\tname: string\n\t\t]>\n\t","fixedOptions":"list<[\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","invalidRule":"bool","logicalOperator":"string","pageOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\tvalue: string\n\t\t]>\n\t","readOnly":"bool","spritemap":"string","_handleActionSelection":"any","_handleActionAdded":"any","_handleCancelRule":"any","_handleConditionAdded":"any","_handleDataProviderInputEdited":"any","_handleDataProviderOutputEdited":"any","_handleDeleteAction":"any","_handleDeleteCondition":"any","_handleEditExpression":"any","_handleFirstOperandFieldEdited":"any","_handleLogicalOperationChange":"any","_handleOperatorEdited":"any","_handleRuleAdded":"any","_handleSecondOperandFieldEdited":"any","_handleSecondOperandTypeEdited":"any","_handleSecondOperandValueEdited":"any","_handleTargetSelection":"any","_handleModalButtonClicked":"any","roles":"list<[\n\t\tlabel: string,\n\t\tvalue: string\n\t]>"};
exports.renderModal.params = ["question","title","type","spritemap","_handleModalButtonClicked"];
exports.renderModal.types = {"question":"string","title":"string","type":"string","spritemap":"string","_handleModalButtonClicked":"any"};
exports.renderAction.params = ["actionTypes","calculatorFields","calculatorFunctions","calculatorResultOptions","fieldOptions","index","pageOptions","spritemap","_handleActionSelection","_handleEditExpression","_handleDataProviderInputEdited","_handleDataProviderOutputEdited","_handleDeleteAction","_handleTargetSelection","actionExpression","actionInputs","actionOutputs","actionSelected","dataProvider","targetSelected","hasRequiredInputs"];
exports.renderAction.types = {"actionTypes":"list<[\n\t\t\tvalue: string,\n\t\t\tname: string\n\t\t]>\n\t","calculatorFields":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\toptions: list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>,\n\t\ttype: string,\n\t\tvalue: string\n\t]>","calculatorFunctions":"list<[\n\t\t\tlabel: string,\n\t\t\ttooltip: string,\n\t\t\tvalue: string\n\t\t]>\n\t","calculatorResultOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","fieldOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","index":"int","pageOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\tvalue: string\n\t\t]>\n\t","spritemap":"string","_handleActionSelection":"any","_handleEditExpression":"any","_handleDataProviderInputEdited":"any","_handleDataProviderOutputEdited":"any","_handleDeleteAction":"any","_handleTargetSelection":"any","actionExpression":"string","actionInputs":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\trequired: bool,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>\n\t","actionOutputs":"list<[\n\t\tname: string,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>\n\t","actionSelected":"string","dataProvider":"list<[\n\t\t\tid: string,\n\t\t\tname: string\n\t\t]>\n\t","targetSelected":"string","hasRequiredInputs":"bool"};
exports.renderActionTarget.params = ["index","options","ref","spritemap","_handleTargetSelection","placeholder","value"];
exports.renderActionTarget.types = {"index":"int","options":"any","ref":"string","spritemap":"string","_handleTargetSelection":"any","placeholder":"string","value":"string"};
exports.renderCondition.params = ["binaryOperator","fieldOptions","index","readOnly","spritemap","_handleDeleteCondition","_handleFirstOperandFieldEdited","_handleOperatorEdited","_handleSecondOperandFieldEdited","_handleSecondOperandTypeEdited","_handleSecondOperandValueEdited","firstOperandType","firstOperandValueSelected","firstOperandOptions","fixedOptions","logicalOperator","operators","roles","secondOperandDataType","secondOperandFieldName","secondOperandType","secondOperandValue","selectedOperator"];
exports.renderCondition.types = {"binaryOperator":"bool","fieldOptions":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\toptions: list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>,\n\t\ttype: string,\n\t\tvalue: string\n\t]>","index":"int","readOnly":"bool","spritemap":"string","_handleDeleteCondition":"any","_handleFirstOperandFieldEdited":"any","_handleOperatorEdited":"any","_handleSecondOperandFieldEdited":"any","_handleSecondOperandTypeEdited":"any","_handleSecondOperandValueEdited":"any","firstOperandType":"string","firstOperandValueSelected":"string","firstOperandOptions":"list<[\n\t\tlabel: string,\n\t\tvalue: string\n\t]>","fixedOptions":"any","logicalOperator":"string","operators":"list<[\n\t\tname: string,\n\t\tparameterTypes: list<string>,\n\t\treturnType: string,\n\t\tvalue: string\n\t]>","roles":"list<[\n\t\tlabel: string,\n\t\tvalue: string\n\t]>","secondOperandDataType":"string","secondOperandFieldName":"string","secondOperandType":"string","secondOperandValue":"any","selectedOperator":"string"};
exports.renderConditionOperators.params = ["index","spritemap","_handleOperatorEdited","firstOperandType","operators","selectedOperator"];
exports.renderConditionOperators.types = {"index":"int","spritemap":"string","_handleOperatorEdited":"any","firstOperandType":"string","operators":"list<[\n\t\t\tvalue: string,\n\t\t\tname: string,\n\t\t\tparameterTypes: list<string>,\n\t\t\treturnType: string\n\t\t]>\n\t","selectedOperator":"string"};
exports.renderConditionSecondOperandTypeSelector.params = ["index","spritemap","_handleSecondOperandTypeEdited","secondOperandType","selectedOperator"];
exports.renderConditionSecondOperandTypeSelector.types = {"index":"int","spritemap":"string","_handleSecondOperandTypeEdited":"any","secondOperandType":"string","selectedOperator":"any"};
exports.renderConditionUserRolesSelector.params = ["index","spritemap","_handleSecondOperandFieldEdited","roles","selectedOperator","secondOperandValue"];
exports.renderConditionUserRolesSelector.types = {"index":"int","spritemap":"string","_handleSecondOperandFieldEdited":"any","roles":"list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>\n\t","selectedOperator":"any","secondOperandValue":"any "};
exports.renderConditionLogicalOperatorDropdown.params = ["_handleLogicalOperationChange","enableLogicalOperator","logicalOperator"];
exports.renderConditionLogicalOperatorDropdown.types = {"_handleLogicalOperationChange":"any","enableLogicalOperator":"bool","logicalOperator":"string"};
exports.renderHeader.params = ["title","extraContent"];
exports.renderHeader.types = {"title":"string","extraContent":"html"};
exports.renderAddItemButton.params = ["_handleItemAdded","spritemap","type"];
exports.renderAddItemButton.types = {"_handleItemAdded":"any","spritemap":"string","type":"string"};
exports.renderAutofill.params = ["actionIndex","spritemap","_handleDataProviderInputEdited","_handleDataProviderOutputEdited","actionInputs","actionOutputs","hasRequiredInputs"];
exports.renderAutofill.types = {"actionIndex":"int","spritemap":"string","_handleDataProviderInputEdited":"any","_handleDataProviderOutputEdited":"any","actionInputs":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\trequired: bool,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>","actionOutputs":"list<[\n\t\tname: string,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>","hasRequiredInputs":"bool"};
templates = exports;
return exports;

});

class RuleEditor extends Component {}
Soy.register(RuleEditor, templates);
export { RuleEditor, templates };
export default templates;
/* jshint ignore:end */

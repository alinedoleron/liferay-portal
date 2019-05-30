/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Calculator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Calculator.
 * @hassoydeltemplate {ClayDropdownBase.Content.idom}
 * @hassoydeltemplate {ClayDropdownItem.Item.idom}
 * @hassoydelcall {PageRenderer.RegisterFieldType.idom}
 * @public
 */

goog.module('Calculator.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias3 = Soy.getTemplate('ClayActionsDropdown.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('ClayDropdownBase.incrementaldom', 'items');
var $templateAlias1 = Soy.getTemplate('ClayDropdownBase.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ClayIcon.incrementaldom', 'render');


/**
 * @param {{
 *  fields: !Array<?>,
 *  index: number,
 *  functions: !Array<?>,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleButtonClicked: (*|null|undefined),
 *  _handleFieldsDropdownItemClicked: (*|null|undefined),
 *  _handleFunctionsDropdownItemClicked: (*|null|undefined),
 *  disableDot: (boolean|null|undefined),
 *  disableFunctions: (boolean|null|undefined),
 *  disableNumbers: (boolean|null|undefined),
 *  disableOperators: (boolean|null|undefined),
 *  expression: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  repeatableFields: (!Array<?>|null|undefined),
 *  showOnlyRepeatableFields: (boolean|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<?>} */
  var fields = soy.asserts.assertType(goog.isArray(opt_data.fields), 'fields', opt_data.fields, '!Array<?>');
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!Array<?>} */
  var functions = soy.asserts.assertType(goog.isArray(opt_data.functions), 'functions', opt_data.functions, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleButtonClicked = opt_data._handleButtonClicked;
  /** @type {*|null|undefined} */
  var _handleFieldsDropdownItemClicked = opt_data._handleFieldsDropdownItemClicked;
  /** @type {*|null|undefined} */
  var _handleFunctionsDropdownItemClicked = opt_data._handleFunctionsDropdownItemClicked;
  /** @type {boolean|null|undefined} */
  var disableDot = soy.asserts.assertType(opt_data.disableDot == null || (goog.isBoolean(opt_data.disableDot) || opt_data.disableDot === 1 || opt_data.disableDot === 0), 'disableDot', opt_data.disableDot, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var disableFunctions = soy.asserts.assertType(opt_data.disableFunctions == null || (goog.isBoolean(opt_data.disableFunctions) || opt_data.disableFunctions === 1 || opt_data.disableFunctions === 0), 'disableFunctions', opt_data.disableFunctions, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var disableNumbers = soy.asserts.assertType(opt_data.disableNumbers == null || (goog.isBoolean(opt_data.disableNumbers) || opt_data.disableNumbers === 1 || opt_data.disableNumbers === 0), 'disableNumbers', opt_data.disableNumbers, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var disableOperators = soy.asserts.assertType(opt_data.disableOperators == null || (goog.isBoolean(opt_data.disableOperators) || opt_data.disableOperators === 1 || opt_data.disableOperators === 0), 'disableOperators', opt_data.disableOperators, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var expression = soy.asserts.assertType(opt_data.expression == null || (goog.isString(opt_data.expression) || opt_data.expression instanceof goog.soy.data.SanitizedContent), 'expression', opt_data.expression, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>|null|undefined} */
  var repeatableFields = soy.asserts.assertType(opt_data.repeatableFields == null || goog.isArray(opt_data.repeatableFields), 'repeatableFields', opt_data.repeatableFields, '!Array<?>|null|undefined');
  /** @type {boolean|null|undefined} */
  var showOnlyRepeatableFields = soy.asserts.assertType(opt_data.showOnlyRepeatableFields == null || (goog.isBoolean(opt_data.showOnlyRepeatableFields) || opt_data.showOnlyRepeatableFields === 1 || opt_data.showOnlyRepeatableFields === 0), 'showOnlyRepeatableFields', opt_data.showOnlyRepeatableFields, 'boolean|null|undefined');
  var msg_19876__soy19877 = '';
  /** @desc  */
  var MSG_EXTERNAL_6472092776302335182 = Liferay.Language.get('the-expression-will-be-displayed-here');
  msg_19876__soy19877 += MSG_EXTERNAL_6472092776302335182;
  var msg_19873__soy19874 = '';
  /** @desc  */
  var MSG_EXTERNAL_2392764435271628075 = Liferay.Language.get('add-field');
  msg_19873__soy19874 += MSG_EXTERNAL_2392764435271628075;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('action-rule-calculate-index', index);
      incrementalDom.attr('class', 'action-rule-calculate row');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'col-md-12 no-padding');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'calculate-container');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'calculate-container-calculator-component col-md-3');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'liferay-ddm-form-builder-calculator');
          incrementalDom.elementOpenEnd();
            var dropownItems__soy21 = showOnlyRepeatableFields ? repeatableFields : fields;
            var disableAddField__soy23 = dropownItems__soy21 && (dropownItems__soy21.length) > 0 ? false : true;
            $templateAlias1({events: {itemClicked: _handleFieldsDropdownItemClicked}, contentRenderer: 'dropdownFormContent', disabled: disableAddField__soy23, elementClasses: 'calculator-add-field-button-container', items: dropownItems__soy21 ? dropownItems__soy21 : [], label: '' + msg_19873__soy19874, ref: 'calculatorAddField' + index, spritemap: spritemap, style: 'primary', triggerClasses: 'btn-lg calculator-add-field-button ddm-button'}, null, opt_ijData);
            var disableNumbersAttribute__soy42 = disableNumbers ? 'disabled' : '';
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'calculator-button-area');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('ul');
                  incrementalDom.attr('class', 'calculator-buttons calculator-buttons-numbers');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'border-top-left btn btn-secondary button-padding-icons calculator-button');
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Backspace');
                    incrementalDom.attr('data-token-value', 'backspace');
                incrementalDom.elementOpenEnd();
                  $templateAlias2({spritemap: spritemap, symbol: 'angle-left'}, null, opt_ijData);
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Left Parenthesis');
                    incrementalDom.attr('data-token-value', '(');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('(');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'border-top-right btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Parenthesis Right');
                    incrementalDom.attr('data-token-value', ')');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text(')');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '1');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('1');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '2');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('2');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '3');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('3');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '4');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('4');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '5');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('5');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '6');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('6');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '7');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('7');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '8');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('8');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '9');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('9');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'border-bottom-left btn btn-secondary button-two-columns calculator-button ' + disableNumbersAttribute__soy42);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '0');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('0');
                incrementalDom.elementClose('li');
                var disableDotAttribute__soy98 = disableNumbers || disableDot ? 'disabled' : '';
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'border-bottom-right btn btn-secondary calculator-button ' + disableDotAttribute__soy98);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Literal');
                    incrementalDom.attr('data-token-value', '.');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('.');
                incrementalDom.elementClose('li');
              incrementalDom.elementClose('ul');
              var disableOperatorsAttribute__soy104 = disableOperators ? 'disabled' : '';
              incrementalDom.elementOpenStart('ul');
                  incrementalDom.attr('class', 'calculator-buttons calculator-buttons-operators');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpen('li');
                  $templateAlias3({events: {itemClicked: _handleFunctionsDropdownItemClicked}, elementClasses: 'dropdown-action', disabled: disableFunctions, items: functions, ref: 'functions' + index, spritemap: spritemap, style: 'secondary', triggerClasses: 'dropdown-toggle calculator-add-operator-button-area'}, null, opt_ijData);
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableOperatorsAttribute__soy104);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Operator');
                    incrementalDom.attr('data-token-value', '+');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('+');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableOperatorsAttribute__soy104);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Operator');
                    incrementalDom.attr('data-token-value', '-');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('-');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableOperatorsAttribute__soy104);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Operator');
                    incrementalDom.attr('data-token-value', '*');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('*');
                incrementalDom.elementClose('li');
                incrementalDom.elementOpenStart('li');
                    incrementalDom.attr('class', 'border-bottom-left border-bottom-right btn btn-secondary calculator-button ' + disableOperatorsAttribute__soy104);
                    incrementalDom.attr('data-onclick', _handleButtonClicked);
                    incrementalDom.attr('data-token-type', 'Operator');
                    incrementalDom.attr('data-token-value', '/');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('/');
                incrementalDom.elementClose('li');
              incrementalDom.elementClose('ul');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'calculate-container-fields col-md-9');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'form-group');
          incrementalDom.elementOpenEnd();
            soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'text', false)({name: 'calculator-expression', readOnly: true, displayStyle: 'multipleline', placeholder: '' + msg_19876__soy19877, showLabel: false, spritemap: spritemap, value: expression}, null, opt_ijData);
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  fields: !Array<?>,
 *  index: number,
 *  functions: !Array<?>,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleButtonClicked: (*|null|undefined),
 *  _handleFieldsDropdownItemClicked: (*|null|undefined),
 *  _handleFunctionsDropdownItemClicked: (*|null|undefined),
 *  disableDot: (boolean|null|undefined),
 *  disableFunctions: (boolean|null|undefined),
 *  disableNumbers: (boolean|null|undefined),
 *  disableOperators: (boolean|null|undefined),
 *  expression: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  repeatableFields: (!Array<?>|null|undefined),
 *  showOnlyRepeatableFields: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Calculator.render';
}


/**
 * @param {{
 *  label: (!goog.soy.data.SanitizedContent|string),
 *  _handleItemClick: (*|null|undefined),
 *  active: (boolean|null|undefined),
 *  checked: (boolean|null|undefined),
 *  disabled: (boolean|null|undefined),
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  inputName: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  inputValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  items: (!Array<?>|null|undefined),
 *  itemsIconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  maxItems: (null|number|undefined),
 *  separator: (boolean|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s146_36287a12(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var label = soy.asserts.assertType(goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent, 'label', opt_data.label, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleItemClick = opt_data._handleItemClick;
  /** @type {boolean|null|undefined} */
  var active = soy.asserts.assertType(opt_data.active == null || (goog.isBoolean(opt_data.active) || opt_data.active === 1 || opt_data.active === 0), 'active', opt_data.active, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var checked = soy.asserts.assertType(opt_data.checked == null || (goog.isBoolean(opt_data.checked) || opt_data.checked === 1 || opt_data.checked === 0), 'checked', opt_data.checked, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var disabled = soy.asserts.assertType(opt_data.disabled == null || (goog.isBoolean(opt_data.disabled) || opt_data.disabled === 1 || opt_data.disabled === 0), 'disabled', opt_data.disabled, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var href = soy.asserts.assertType(opt_data.href == null || (goog.isString(opt_data.href) || opt_data.href instanceof goog.soy.data.SanitizedContent), 'href', opt_data.href, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var icon = soy.asserts.assertType(opt_data.icon == null || (goog.isString(opt_data.icon) || opt_data.icon instanceof goog.soy.data.SanitizedContent), 'icon', opt_data.icon, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var inputName = soy.asserts.assertType(opt_data.inputName == null || (goog.isString(opt_data.inputName) || opt_data.inputName instanceof goog.soy.data.SanitizedContent), 'inputName', opt_data.inputName, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var inputValue = soy.asserts.assertType(opt_data.inputValue == null || (goog.isString(opt_data.inputValue) || opt_data.inputValue instanceof goog.soy.data.SanitizedContent), 'inputValue', opt_data.inputValue, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>|null|undefined} */
  var items = soy.asserts.assertType(opt_data.items == null || goog.isArray(opt_data.items), 'items', opt_data.items, '!Array<?>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var itemsIconAlignment = soy.asserts.assertType(opt_data.itemsIconAlignment == null || (goog.isString(opt_data.itemsIconAlignment) || opt_data.itemsIconAlignment instanceof goog.soy.data.SanitizedContent), 'itemsIconAlignment', opt_data.itemsIconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {null|number|undefined} */
  var maxItems = soy.asserts.assertType(opt_data.maxItems == null || goog.isNumber(opt_data.maxItems), 'maxItems', opt_data.maxItems, 'null|number|undefined');
  /** @type {boolean|null|undefined} */
  var separator = soy.asserts.assertType(opt_data.separator == null || (goog.isBoolean(opt_data.separator) || opt_data.separator === 1 || opt_data.separator === 0), 'separator', opt_data.separator, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spritemap = soy.asserts.assertType(opt_data.spritemap == null || (goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent), 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var title = soy.asserts.assertType(opt_data.title == null || (goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent), 'title', opt_data.title, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var item__soy163 = function() {
    soyIdom.print(label);
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', 'calculate-fieldname');
    incrementalDom.elementOpenEnd();
      incrementalDom.text('Fieldname: ');
      soyIdom.print(title);
    incrementalDom.elementClose('span');
  };
  var itemAttributes__soy170 = function() {
    incrementalDom.attr('class', 'dropdown-item' + (active || checked ? ' active' : ''));
    incrementalDom.attr('data-onclick', _handleItemClick);
  };
  incrementalDom.elementOpenStart('li');
      itemAttributes__soy170();
      incrementalDom.attr('data-option-value', title);
  incrementalDom.elementOpenEnd();
    item__soy163();
  incrementalDom.elementClose('li');
  if (separator) {
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('aria-hidden', 'true');
        incrementalDom.attr('class', 'dropdown-divider');
        incrementalDom.attr('role', 'presentation');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('li');
  }
}
exports.__deltemplate_s146_36287a12 = __deltemplate_s146_36287a12;
/**
 * @typedef {{
 *  label: (!goog.soy.data.SanitizedContent|string),
 *  _handleItemClick: (*|null|undefined),
 *  active: (boolean|null|undefined),
 *  checked: (boolean|null|undefined),
 *  disabled: (boolean|null|undefined),
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  inputName: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  inputValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  items: (!Array<?>|null|undefined),
 *  itemsIconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  maxItems: (null|number|undefined),
 *  separator: (boolean|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
__deltemplate_s146_36287a12.Params;
if (goog.DEBUG) {
  __deltemplate_s146_36287a12.soyTemplateName = 'Calculator.__deltemplate_s146_36287a12';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ClayDropdownItem.Item.idom'), 'dropdownCalculator', 0, __deltemplate_s146_36287a12);


/**
 * @param {{
 *  _handleItemClick: (*|null|undefined),
 *  contentRenderer: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  items: (!Array<?>|null|undefined),
 *  itemsIconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s189_5c92e3a6(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handleItemClick = opt_data._handleItemClick;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var contentRenderer = soy.asserts.assertType(opt_data.contentRenderer == null || (goog.isString(opt_data.contentRenderer) || opt_data.contentRenderer instanceof goog.soy.data.SanitizedContent), 'contentRenderer', opt_data.contentRenderer, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>|null|undefined} */
  var items = soy.asserts.assertType(opt_data.items == null || goog.isArray(opt_data.items), 'items', opt_data.items, '!Array<?>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var itemsIconAlignment = soy.asserts.assertType(opt_data.itemsIconAlignment == null || (goog.isString(opt_data.itemsIconAlignment) || opt_data.itemsIconAlignment instanceof goog.soy.data.SanitizedContent), 'itemsIconAlignment', opt_data.itemsIconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spritemap = soy.asserts.assertType(opt_data.spritemap == null || (goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent), 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|null|string|undefined');
  if (items) {
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'list-unstyled');
    incrementalDom.elementOpenEnd();
      $templateAlias4({_handleItemClick: _handleItemClick, items: items, itemsIconAlignment: itemsIconAlignment, contentRenderer: 'dropdownCalculator', spritemap: spritemap}, null, opt_ijData);
    incrementalDom.elementClose('ul');
  }
}
exports.__deltemplate_s189_5c92e3a6 = __deltemplate_s189_5c92e3a6;
/**
 * @typedef {{
 *  _handleItemClick: (*|null|undefined),
 *  contentRenderer: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  items: (!Array<?>|null|undefined),
 *  itemsIconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
__deltemplate_s189_5c92e3a6.Params;
if (goog.DEBUG) {
  __deltemplate_s189_5c92e3a6.soyTemplateName = 'Calculator.__deltemplate_s189_5c92e3a6';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ClayDropdownBase.Content.idom'), 'dropdownFormContent', 0, __deltemplate_s189_5c92e3a6);

exports.render.params = ["fields","index","functions","spritemap","_handleButtonClicked","_handleFieldsDropdownItemClicked","_handleFunctionsDropdownItemClicked","disableDot","disableFunctions","disableNumbers","disableOperators","expression","repeatableFields","showOnlyRepeatableFields"];
exports.render.types = {"fields":"list<?>","index":"int","functions":"list<?>","spritemap":"string","_handleButtonClicked":"any","_handleFieldsDropdownItemClicked":"any","_handleFunctionsDropdownItemClicked":"any","disableDot":"bool","disableFunctions":"bool","disableNumbers":"bool","disableOperators":"bool","expression":"string","repeatableFields":"list<?>","showOnlyRepeatableFields":"bool"};
templates = exports;
return exports;

});

class Calculator extends Component {}
Soy.register(Calculator, templates);
export { Calculator, templates };
export default templates;
/* jshint ignore:end */

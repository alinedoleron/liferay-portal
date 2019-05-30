/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from PageRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace PageRenderer.
 * @hassoydeltemplate {PageRenderer.PageHeader.idom}
 * @hassoydeltemplate {PageRenderer.RegisterFieldType.idom}
 * @hassoydelcall {PageRenderer.container.idom}
 * @public
 */

goog.module('PageRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  empty: (boolean|null|undefined),
 *  page: (?),
 *  pageIndex: (null|number|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var paginationMode = soy.asserts.assertType(goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent, 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {number} */
  var total = soy.asserts.assertType(goog.isNumber(opt_data.total), 'total', opt_data.total, 'number');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldClicked = opt_data._handleFieldClicked;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var empty = soy.asserts.assertType(opt_data.empty == null || (goog.isBoolean(opt_data.empty) || opt_data.empty === 1 || opt_data.empty === 0), 'empty', opt_data.empty, 'boolean|null|undefined');
  /** @type {?} */
  var page = opt_data.page;
  /** @type {null|number|undefined} */
  var pageIndex = soy.asserts.assertType(opt_data.pageIndex == null || goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'null|number|undefined');
  var contentRenderer__soy1233 = ($$temp = page.contentRenderer) == null ? paginationMode : $$temp;
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.container.idom'), contentRenderer__soy1233, false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldEdited: _handleFieldEdited, _handleFieldClicked: _handleFieldClicked, activePage: ($$temp = activePage) == null ? 0 : $$temp, contentRenderer: contentRenderer__soy1233, editable: editable, empty: empty, page: page, pageIndex: ($$temp = pageIndex) == null ? 0 : $$temp, paginationMode: paginationMode, spritemap: spritemap, total: total}, null, opt_ijData);
}
exports.render = $render;
/**
 * @typedef {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  empty: (boolean|null|undefined),
 *  page: (?),
 *  pageIndex: (null|number|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'PageRenderer.render';
}


/**
 * @param {{
 *  size: number,
 *  columnIndex: (null|number|undefined),
 *  isRow: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  rowIndex: (null|number|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $fieldEmpty(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var size = soy.asserts.assertType(goog.isNumber(opt_data.size), 'size', opt_data.size, 'number');
  /** @type {null|number|undefined} */
  var columnIndex = soy.asserts.assertType(opt_data.columnIndex == null || goog.isNumber(opt_data.columnIndex), 'columnIndex', opt_data.columnIndex, 'null|number|undefined');
  /** @type {boolean|null|undefined} */
  var isRow = soy.asserts.assertType(opt_data.isRow == null || (goog.isBoolean(opt_data.isRow) || opt_data.isRow === 1 || opt_data.isRow === 0), 'isRow', opt_data.isRow, 'boolean|null|undefined');
  /** @type {null|number|undefined} */
  var pageIndex = soy.asserts.assertType(opt_data.pageIndex == null || goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'null|number|undefined');
  /** @type {null|number|undefined} */
  var rowIndex = soy.asserts.assertType(opt_data.rowIndex == null || goog.isNumber(opt_data.rowIndex), 'rowIndex', opt_data.rowIndex, 'null|number|undefined');
  var attributes__soy1256 = function() {
    incrementalDom.attr('class', 'col col-empty col-md-' + size);
    if (rowIndex != 'undefined') {
      incrementalDom.attr('data-ddm-field-row', rowIndex);
    }
    if (pageIndex != 'undefined') {
      incrementalDom.attr('data-ddm-field-page', pageIndex);
    }
    if (columnIndex != 'undefined') {
      incrementalDom.attr('data-ddm-field-column', columnIndex);
    }
  };
  var content__soy1279 = function() {
    incrementalDom.elementOpenStart('div');
        attributes__soy1256();
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'ddm-target');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  };
  if (isRow) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'row');
    incrementalDom.elementOpenEnd();
      content__soy1279();
    incrementalDom.elementClose('div');
  } else {
    content__soy1279();
  }
}
exports.fieldEmpty = $fieldEmpty;
/**
 * @typedef {{
 *  size: number,
 *  columnIndex: (null|number|undefined),
 *  isRow: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  rowIndex: (null|number|undefined)
 * }}
 */
$fieldEmpty.Params;
if (goog.DEBUG) {
  $fieldEmpty.soyTemplateName = 'PageRenderer.fieldEmpty';
}


/**
 * @param {{
 *  editable: (boolean|null|undefined),
 *  field: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1294_e5792ebc(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {?} */
  var field = opt_data.field;
  if (editable) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'ddm-field-not-found');
    incrementalDom.elementOpenEnd();
      incrementalDom.text('Field doesn\'t exist.');
    incrementalDom.elementClose('div');
  }
}
exports.__deltemplate_s1294_e5792ebc = __deltemplate_s1294_e5792ebc;
/**
 * @typedef {{
 *  editable: (boolean|null|undefined),
 *  field: (?)
 * }}
 */
__deltemplate_s1294_e5792ebc.Params;
if (goog.DEBUG) {
  __deltemplate_s1294_e5792ebc.soyTemplateName = 'PageRenderer.__deltemplate_s1294_e5792ebc';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), '', 0, __deltemplate_s1294_e5792ebc);


/**
 * @param {{
 *  description: (!goog.soy.data.SanitizedContent|string),
 *  pageIndex: number,
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  total: number
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1302_b2357b30(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var description = soy.asserts.assertType(goog.isString(opt_data.description) || opt_data.description instanceof goog.soy.data.SanitizedContent, 'description', opt_data.description, '!goog.soy.data.SanitizedContent|string');
  /** @type {number} */
  var pageIndex = soy.asserts.assertType(goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var title = soy.asserts.assertType(goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent, 'title', opt_data.title, '!goog.soy.data.SanitizedContent|string');
  /** @type {number} */
  var total = soy.asserts.assertType(goog.isNumber(opt_data.total), 'total', opt_data.total, 'number');
  var pageTitleAttributes__soy1308 = function() {
    incrementalDom.attr('class', 'lfr-ddm-form-page-title');
  };
  incrementalDom.elementOpenStart('h3');
      pageTitleAttributes__soy1308();
  incrementalDom.elementOpenEnd();
    soyIdom.print(title);
  incrementalDom.elementClose('h3');
  var pageDescriptionAttributes__soy1315 = function() {
    incrementalDom.attr('class', 'lfr-ddm-form-page-description');
  };
  incrementalDom.elementOpenStart('h4');
      pageDescriptionAttributes__soy1315();
  incrementalDom.elementOpenEnd();
    soyIdom.print(description);
  incrementalDom.elementClose('h4');
}
exports.__deltemplate_s1302_b2357b30 = __deltemplate_s1302_b2357b30;
/**
 * @typedef {{
 *  description: (!goog.soy.data.SanitizedContent|string),
 *  pageIndex: number,
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  total: number
 * }}
 */
__deltemplate_s1302_b2357b30.Params;
if (goog.DEBUG) {
  __deltemplate_s1302_b2357b30.soyTemplateName = 'PageRenderer.__deltemplate_s1302_b2357b30';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.PageHeader.idom'), '', 0, __deltemplate_s1302_b2357b30);

exports.render.params = ["paginationMode","spritemap","total","_handleFieldBlurred","_handleFieldClicked","_handleFieldEdited","activePage","editable","empty","page","pageIndex"];
exports.render.types = {"paginationMode":"string","spritemap":"string","total":"number","_handleFieldBlurred":"any","_handleFieldClicked":"any","_handleFieldEdited":"any","activePage":"number","editable":"bool","empty":"bool","page":"?","pageIndex":"number"};
exports.fieldEmpty.params = ["size","columnIndex","isRow","pageIndex","rowIndex"];
exports.fieldEmpty.types = {"size":"number","columnIndex":"number","isRow":"bool","pageIndex":"number","rowIndex":"number"};
templates = exports;
return exports;

});

class PageRenderer extends Component {}
Soy.register(PageRenderer, templates);
export { PageRenderer, templates };
export default templates;
/* jshint ignore:end */

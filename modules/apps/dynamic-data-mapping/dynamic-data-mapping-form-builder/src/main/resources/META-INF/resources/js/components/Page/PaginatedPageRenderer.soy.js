/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from PaginatedPageRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace PaginatedPageRenderer.
 * @hassoydeltemplate {PageRenderer.container.idom}
 * @hassoydelcall {PageRenderer.container.idom}
 * @public
 */

goog.module('PaginatedPageRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  activePage: number,
 *  pageIndex: number,
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  empty: (boolean|null|undefined),
 *  page: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1384_afe07ef6(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var activePage = soy.asserts.assertType(goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'number');
  /** @type {number} */
  var pageIndex = soy.asserts.assertType(goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'number');
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
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var empty = soy.asserts.assertType(opt_data.empty == null || (goog.isBoolean(opt_data.empty) || opt_data.empty === 1 || opt_data.empty === 0), 'empty', opt_data.empty, 'boolean|null|undefined');
  /** @type {?} */
  var page = opt_data.page;
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.container.idom'), 'wizard', false)({activePage: activePage, pageIndex: pageIndex, paginationMode: 'wizard', spritemap: spritemap, total: total, _handleFieldBlurred: _handleFieldBlurred, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, editable: editable, empty: empty, page: page}, null, opt_ijData);
}
exports.__deltemplate_s1384_afe07ef6 = __deltemplate_s1384_afe07ef6;
/**
 * @typedef {{
 *  activePage: number,
 *  pageIndex: number,
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  empty: (boolean|null|undefined),
 *  page: (?)
 * }}
 */
__deltemplate_s1384_afe07ef6.Params;
if (goog.DEBUG) {
  __deltemplate_s1384_afe07ef6.soyTemplateName = 'PaginatedPageRenderer.__deltemplate_s1384_afe07ef6';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.container.idom'), 'paginated', 0, __deltemplate_s1384_afe07ef6);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SuccessPageRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SuccessPageRenderer.
 * @hassoydeltemplate {PageRenderer.container.idom}
 * @public
 */

goog.module('SuccessPageRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('SuccessPage.incrementaldom', 'render');


/**
 * @param {{
 *  activePage: number,
 *  pageIndex: number,
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  page: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s4278_ec2a885e(opt_data, opt_ijData, opt_ijData_deprecated) {
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
  /** @type {?} */
  var page = opt_data.page;
  if (activePage == pageIndex) {
    $templateAlias1({successPageSettings: page == null ? null : page.successPageSettings}, null, opt_ijData);
  }
}
exports.__deltemplate_s4278_ec2a885e = __deltemplate_s4278_ec2a885e;
/**
 * @typedef {{
 *  activePage: number,
 *  pageIndex: number,
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  page: (?)
 * }}
 */
__deltemplate_s4278_ec2a885e.Params;
if (goog.DEBUG) {
  __deltemplate_s4278_ec2a885e.soyTemplateName = 'SuccessPageRenderer.__deltemplate_s4278_ec2a885e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.container.idom'), 'success', 0, __deltemplate_s4278_ec2a885e);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

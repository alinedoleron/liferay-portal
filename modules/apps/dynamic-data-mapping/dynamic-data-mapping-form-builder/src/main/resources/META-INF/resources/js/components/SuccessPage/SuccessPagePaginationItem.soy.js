/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SuccessPagePaginationItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SuccessPagePaginationItem.
 * @hassoydeltemplate {FormRenderer.PaginationItem.idom}
 * @public
 */

goog.module('SuccessPagePaginationItem.incrementaldom');

goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: number,
 *  page: (?),
 *  pageIndex: number
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s4229_a08cf29f(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {number} */
  var activePage = soy.asserts.assertType(goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'number');
  /** @type {?} */
  var page = opt_data.page;
  /** @type {number} */
  var pageIndex = soy.asserts.assertType(goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'number');
  var classes__soy4235 = '';
  classes__soy4235 += 'page-item';
  classes__soy4235 += activePage == -1 ? ' active' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', classes__soy4235);
      incrementalDom.attr('data-onclick', _handlePaginationItemClicked);
      incrementalDom.attr('data-page-index', pageIndex);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'page-link');
        incrementalDom.attr('href', 'javascript:;');
    incrementalDom.elementOpenEnd();
      /** @desc  */
      var MSG_EXTERNAL_5337763204306541782 = Liferay.Language.get('success-page');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_5337763204306541782));
    incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
}
exports.__deltemplate_s4229_a08cf29f = __deltemplate_s4229_a08cf29f;
/**
 * @typedef {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: number,
 *  page: (?),
 *  pageIndex: number
 * }}
 */
__deltemplate_s4229_a08cf29f.Params;
if (goog.DEBUG) {
  __deltemplate_s4229_a08cf29f.soyTemplateName = 'SuccessPagePaginationItem.__deltemplate_s4229_a08cf29f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.PaginationItem.idom'), 'success', 0, __deltemplate_s4229_a08cf29f);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

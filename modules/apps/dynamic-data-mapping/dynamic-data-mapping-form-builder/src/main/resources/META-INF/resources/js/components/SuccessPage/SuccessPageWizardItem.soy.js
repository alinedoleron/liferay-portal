/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SuccessPageWizardItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SuccessPageWizardItem.
 * @hassoydeltemplate {FormRenderer.WizardItem.idom}
 * @public
 */

goog.module('SuccessPageWizardItem.incrementaldom');

goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  page: (?),
 *  pageIndex: number,
 *  total: number
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s4294_3b26c598(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {?} */
  var page = opt_data.page;
  /** @type {number} */
  var pageIndex = soy.asserts.assertType(goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'number');
  /** @type {number} */
  var total = soy.asserts.assertType(goog.isNumber(opt_data.total), 'total', opt_data.total, 'number');
  var classes__soy4301 = '';
  classes__soy4301 += 'multi-step-item complete';
  classes__soy4301 += activePage == -1 ? ' active' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', classes__soy4301);
      incrementalDom.attr('data-onclick', _handlePaginationItemClicked);
      incrementalDom.attr('data-page-index', pageIndex);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-divider');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-indicator');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'multi-step-indicator-label');
      incrementalDom.elementOpenEnd();
        /** @desc  */
        var MSG_EXTERNAL_5337763204306541782 = Liferay.Language.get('success-page');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_5337763204306541782));
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('a');
          incrementalDom.attr('class', 'multi-step-icon');
          incrementalDom.attr('href', 'javascript:;');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('a');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
}
exports.__deltemplate_s4294_3b26c598 = __deltemplate_s4294_3b26c598;
/**
 * @typedef {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  page: (?),
 *  pageIndex: number,
 *  total: number
 * }}
 */
__deltemplate_s4294_3b26c598.Params;
if (goog.DEBUG) {
  __deltemplate_s4294_3b26c598.soyTemplateName = 'SuccessPageWizardItem.__deltemplate_s4294_3b26c598';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.WizardItem.idom'), 'success', 0, __deltemplate_s4294_3b26c598);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

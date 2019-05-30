/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from FormRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FormRenderer.
 * @hassoydeltemplate {FormRenderer.Pagination.idom}
 * @hassoydeltemplate {FormRenderer.PaginationContainer.idom}
 * @hassoydeltemplate {FormRenderer.PaginationItem.idom}
 * @hassoydeltemplate {FormRenderer.Wizard.idom}
 * @hassoydeltemplate {FormRenderer.WizardItem.idom}
 * @hassoydeltemplate {FormRenderer.pages.idom}
 * @hassoydelcall {FormRenderer.Pagination.idom}
 * @hassoydelcall {FormRenderer.PaginationContainer.idom}
 * @hassoydelcall {FormRenderer.PaginationItem.idom}
 * @hassoydelcall {FormRenderer.Wizard.idom}
 * @hassoydelcall {FormRenderer.WizardItem.idom}
 * @hassoydelcall {FormRenderer.pages.idom}
 * @public
 */

goog.module('FormRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('PageRenderer.incrementaldom', 'render');


/**
 * @param {{
 *  pages: (?),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  paginationMode: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldClicked = opt_data._handleFieldClicked;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var paginationMode = soy.asserts.assertType(opt_data.paginationMode == null || (goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent), 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var currentPaginationMode__soy716 = ($$temp = paginationMode) == null ? 'paginated' : $$temp;
  var total__soy718 = (pages.length);
  soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.pages.idom'), '', false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, _handlePaginationItemClicked: _handlePaginationItemClicked, _handlePaginationLeftClicked: _handlePaginationLeftClicked, _handlePaginationRightClicked: _handlePaginationRightClicked, activePage: ($$temp = activePage) == null ? 0 : $$temp, editable: editable, pages: pages, paginationMode: currentPaginationMode__soy716, spritemap: spritemap, total: total__soy718}, null, opt_ijData);
}
exports.render = $render;
/**
 * @typedef {{
 *  pages: (?),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  paginationMode: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FormRenderer.render';
}


/**
 * @param {{
 *  activePage: number,
 *  pages: (?),
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  editable: (boolean|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s734_1865beb5(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var activePage = soy.asserts.assertType(goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'number');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var paginationMode = soy.asserts.assertType(goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent, 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldClicked = opt_data._handleFieldClicked;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'position-relative');
  incrementalDom.elementOpenEnd();
    if (paginationMode == 'wizard' || (pages.length) == 1) {
      soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.PaginationContainer.idom'), '', false)(opt_data, null, opt_ijData);
    }
    var page775List = pages;
    var page775ListLen = page775List.length;
    for (var page775Index = 0; page775Index < page775ListLen; page775Index++) {
        var page775Data = page775List[page775Index];
        $templateAlias1({activePage: activePage, editable: editable, events: {fieldBlurred: _handleFieldBlurred, fieldClicked: _handleFieldClicked, fieldEdited: _handleFieldEdited}, page: page775Data, pageIndex: page775Index, paginationMode: paginationMode, ref: 'pageRenderer' + page775Index, key: page775Index, spritemap: spritemap, total: (pages.length)}, null, opt_ijData);
      }
    var multiple__soy778 = (pages.length) > 1;
    if (multiple__soy778 && paginationMode == 'paginated' || paginationMode == 'paginated' && (pages.length) == 1) {
      soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.PaginationContainer.idom'), '', false)(opt_data, null, opt_ijData);
    }
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s734_1865beb5 = __deltemplate_s734_1865beb5;
/**
 * @typedef {{
 *  activePage: number,
 *  pages: (?),
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  editable: (boolean|null|undefined)
 * }}
 */
__deltemplate_s734_1865beb5.Params;
if (goog.DEBUG) {
  __deltemplate_s734_1865beb5.soyTemplateName = 'FormRenderer.__deltemplate_s734_1865beb5';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.pages.idom'), '', 0, __deltemplate_s734_1865beb5);


/**
 * @param {{
 *  activePage: number,
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  pages: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s793_b6357ecf(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var activePage = soy.asserts.assertType(goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var paginationMode = soy.asserts.assertType(goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent, 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {?} */
  var pages = opt_data.pages;
  var multiple__soy802 = (pages.length) > 1;
  var classes__soy804 = '';
  classes__soy804 += 'ddm-form-pagination';
  classes__soy804 += multiple__soy802 ? ' position-relative' : ' position-absolute';
  var $tmp = null;
if (multiple__soy802 && paginationMode == 'wizard') {
  $tmp = ' wizard-mode';
} else if (multiple__soy802 && paginationMode == 'paginated') {
  $tmp = ' pagination-mode';
} else {
  $tmp = '';
}
classes__soy804 += $tmp;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', classes__soy804);
  incrementalDom.elementOpenEnd();
    if (multiple__soy802 && paginationMode == 'wizard') {
      soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.Wizard.idom'), '', false)(opt_data, null, opt_ijData);
    } else if (multiple__soy802 && paginationMode == 'paginated') {
      soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.Pagination.idom'), '', false)(opt_data, null, opt_ijData);
    }
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s793_b6357ecf = __deltemplate_s793_b6357ecf;
/**
 * @typedef {{
 *  activePage: number,
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  pages: (?)
 * }}
 */
__deltemplate_s793_b6357ecf.Params;
if (goog.DEBUG) {
  __deltemplate_s793_b6357ecf.soyTemplateName = 'FormRenderer.__deltemplate_s793_b6357ecf';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.PaginationContainer.idom'), '', 0, __deltemplate_s793_b6357ecf);


/**
 * @param {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  pages: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s840_e3380f00(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  incrementalDom.elementOpenStart('ol');
      incrementalDom.attr('class', 'dmm-wizard multi-step-indicator-label-top multi-step-nav multi-step-nav-collapse-sm');
  incrementalDom.elementOpenEnd();
    var page856List = pages;
    var page856ListLen = page856List.length;
    for (var page856Index = 0; page856Index < page856ListLen; page856Index++) {
        var page856Data = page856List[page856Index];
        var pageIndex__soy847 = page856Index;
        soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.WizardItem.idom'), page856Data.paginationItemRenderer, false)({_handlePaginationItemClicked: _handlePaginationItemClicked, activePage: activePage, page: page856Data, pageIndex: pageIndex__soy847, total: (pages.length)}, null, opt_ijData);
      }
  incrementalDom.elementClose('ol');
}
exports.__deltemplate_s840_e3380f00 = __deltemplate_s840_e3380f00;
/**
 * @typedef {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  pages: (?)
 * }}
 */
__deltemplate_s840_e3380f00.Params;
if (goog.DEBUG) {
  __deltemplate_s840_e3380f00.soyTemplateName = 'FormRenderer.__deltemplate_s840_e3380f00';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.Wizard.idom'), '', 0, __deltemplate_s840_e3380f00);


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
function __deltemplate_s859_06217844(opt_data, opt_ijData, opt_ijData_deprecated) {
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
  var msg_19879__soy19880 = '';
  /** @desc  */
  var MSG_EXTERNAL_6307512279120904193 = Liferay.Language.get('untitled-page');
  msg_19879__soy19880 += MSG_EXTERNAL_6307512279120904193;
  var step__soy866 = pageIndex + 1;
  var classes__soy868 = '';
  classes__soy868 += 'multi-step-item';
  classes__soy868 += step__soy866 != total ? ' multi-step-item-expand' : '';
  classes__soy868 += pageIndex == activePage ? ' active' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', classes__soy868);
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
      var defaultPageTitle__soy885 = '';
      defaultPageTitle__soy885 += msg_19879__soy19880;
      var title__soy892 = page.title ? page.title : defaultPageTitle__soy885;
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'multi-step-indicator-label');
      incrementalDom.elementOpenEnd();
        soyIdom.print(title__soy892);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('a');
          incrementalDom.attr('class', 'multi-step-icon');
          incrementalDom.attr('data-multi-step-icon', step__soy866);
          incrementalDom.attr('href', 'javascript:;');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('a');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
}
exports.__deltemplate_s859_06217844 = __deltemplate_s859_06217844;
/**
 * @typedef {{
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  page: (?),
 *  pageIndex: number,
 *  total: number
 * }}
 */
__deltemplate_s859_06217844.Params;
if (goog.DEBUG) {
  __deltemplate_s859_06217844.soyTemplateName = 'FormRenderer.__deltemplate_s859_06217844';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.WizardItem.idom'), '', 0, __deltemplate_s859_06217844);


/**
 * @param {{
 *  activePage: number,
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  pages: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s898_5b2446c6(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var activePage = soy.asserts.assertType(goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'number');
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {?} */
  var pages = opt_data.pages;
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'ddm-pagination justify-content-center pagination');
  incrementalDom.elementOpenEnd();
    var wizardClasses__soy906 = '';
    wizardClasses__soy906 += 'page-item';
    wizardClasses__soy906 += activePage == 0 ? ' visibility-hidden' : '';
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('class', wizardClasses__soy906);
        incrementalDom.attr('data-onclick', _handlePaginationLeftClicked);
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('a');
          incrementalDom.attr('class', 'page-link');
          incrementalDom.attr('href', 'javascript:;');
          incrementalDom.attr('role', 'button');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('\u00AB');
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'sr-only');
        incrementalDom.elementOpenEnd();
          /** @desc  */
          var MSG_EXTERNAL_6095534740119293938 = Liferay.Language.get('previous');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_6095534740119293938));
        incrementalDom.elementClose('span');
      incrementalDom.elementClose('a');
    incrementalDom.elementClose('li');
    var page930List = pages;
    var page930ListLen = page930List.length;
    for (var page930Index = 0; page930Index < page930ListLen; page930Index++) {
        var page930Data = page930List[page930Index];
        var pageIndex__soy922 = page930Index;
        soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.PaginationItem.idom'), page930Data.paginationItemRenderer, false)({_handlePaginationItemClicked: _handlePaginationItemClicked, activePage: activePage, page: page930Data, pageIndex: pageIndex__soy922}, null, opt_ijData);
      }
    var paginationClasses__soy933 = '';
    paginationClasses__soy933 += 'page-item';
    paginationClasses__soy933 += activePage == (pages.length) - 1 || activePage == -1 ? ' visibility-hidden' : '';
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('class', paginationClasses__soy933);
        incrementalDom.attr('data-onclick', _handlePaginationRightClicked);
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('a');
          incrementalDom.attr('class', 'page-link');
          incrementalDom.attr('href', 'javascript:;');
          incrementalDom.attr('role', 'button');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('\u00BB');
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'sr-only');
        incrementalDom.elementOpenEnd();
          /** @desc  */
          var MSG_EXTERNAL_5736512712252459867 = Liferay.Language.get('next');
          incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_5736512712252459867));
        incrementalDom.elementClose('span');
      incrementalDom.elementClose('a');
    incrementalDom.elementClose('li');
  incrementalDom.elementClose('ul');
}
exports.__deltemplate_s898_5b2446c6 = __deltemplate_s898_5b2446c6;
/**
 * @typedef {{
 *  activePage: number,
 *  _handlePaginationItemClicked: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  pages: (?)
 * }}
 */
__deltemplate_s898_5b2446c6.Params;
if (goog.DEBUG) {
  __deltemplate_s898_5b2446c6.soyTemplateName = 'FormRenderer.__deltemplate_s898_5b2446c6';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.Pagination.idom'), '', 0, __deltemplate_s898_5b2446c6);


/**
 * @param {{
 *  activePage: number,
 *  page: (?),
 *  pageIndex: number,
 *  _handlePaginationItemClicked: (*|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s948_557e2d07(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var activePage = soy.asserts.assertType(goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'number');
  /** @type {?} */
  var page = opt_data.page;
  /** @type {number} */
  var pageIndex = soy.asserts.assertType(goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'number');
  /** @type {*|null|undefined} */
  var _handlePaginationItemClicked = opt_data._handlePaginationItemClicked;
  var step__soy954 = pageIndex + 1;
  var classes__soy956 = '';
  classes__soy956 += 'page-item';
  classes__soy956 += pageIndex == activePage ? ' active' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', classes__soy956);
      incrementalDom.attr('data-onclick', _handlePaginationItemClicked);
      incrementalDom.attr('data-page-index', pageIndex);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'page-link');
        incrementalDom.attr('href', 'javascript:;');
    incrementalDom.elementOpenEnd();
      soyIdom.print(step__soy954);
    incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
}
exports.__deltemplate_s948_557e2d07 = __deltemplate_s948_557e2d07;
/**
 * @typedef {{
 *  activePage: number,
 *  page: (?),
 *  pageIndex: number,
 *  _handlePaginationItemClicked: (*|null|undefined)
 * }}
 */
__deltemplate_s948_557e2d07.Params;
if (goog.DEBUG) {
  __deltemplate_s948_557e2d07.soyTemplateName = 'FormRenderer.__deltemplate_s948_557e2d07';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.PaginationItem.idom'), '', 0, __deltemplate_s948_557e2d07);

exports.render.params = ["pages","spritemap","_handleFieldBlurred","_handleFieldClicked","_handleFieldEdited","_handlePaginationItemClicked","_handlePaginationLeftClicked","_handlePaginationRightClicked","activePage","editable","paginationMode"];
exports.render.types = {"pages":"?","spritemap":"string","_handleFieldBlurred":"any","_handleFieldClicked":"any","_handleFieldEdited":"any","_handlePaginationItemClicked":"any","_handlePaginationLeftClicked":"any","_handlePaginationRightClicked":"any","activePage":"number","editable":"bool","paginationMode":"string"};
templates = exports;
return exports;

});

class FormRenderer extends Component {}
Soy.register(FormRenderer, templates);
export { FormRenderer, templates };
export default templates;
/* jshint ignore:end */

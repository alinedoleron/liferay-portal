/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SucessPage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SuccessPage.
 * @hassoydeltemplate {SuccessPage.container.idom}
 * @hassoydelcall {SuccessPage.container.idom}
 * @public
 */

goog.module('SuccessPage.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  _handleSuccessPageUpdated: (*|null|undefined),
 *  body: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handleSuccessPageUpdated = opt_data._handleSuccessPageUpdated;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var body = soy.asserts.assertType(opt_data.body == null || (goog.isString(opt_data.body) || opt_data.body instanceof goog.soy.data.SanitizedContent), 'body', opt_data.body, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var title = soy.asserts.assertType(opt_data.title == null || (goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent), 'title', opt_data.title, '!goog.soy.data.SanitizedContent|null|string|undefined');
  soy.$$getDelegateFn(soy.$$getDelTemplateId('SuccessPage.container.idom'), '', false)(opt_data, null, opt_ijData);
}
exports.render = $render;
/**
 * @typedef {{
 *  _handleSuccessPageUpdated: (*|null|undefined),
 *  body: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SuccessPage.render';
}


/**
 * @param {{
 *  _handleSuccessPageUpdated: (*|null|undefined),
 *  body: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s4378_84d6177d(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handleSuccessPageUpdated = opt_data._handleSuccessPageUpdated;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var body = soy.asserts.assertType(opt_data.body == null || (goog.isString(opt_data.body) || opt_data.body instanceof goog.soy.data.SanitizedContent), 'body', opt_data.body, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var title = soy.asserts.assertType(opt_data.title == null || (goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent), 'title', opt_data.title, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-page-success-layout');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'form-builder-success-page pb-3 pt-2');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('label');
          incrementalDom.attr('class', 'control-label');
      incrementalDom.elementOpenEnd();
        /** @desc  */
        var MSG_EXTERNAL_125111376198337295 = Liferay.Language.get('title');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_125111376198337295));
      incrementalDom.elementClose('label');
      incrementalDom.elementOpenStart('input');
          incrementalDom.attr('class', 'form-builder-success-page-title form-control');
          incrementalDom.attr('data-oninput', _handleSuccessPageUpdated);
          incrementalDom.attr('data-setting', 'title');
          incrementalDom.attr('type', 'text');
          incrementalDom.attr('value', title);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('input');
      incrementalDom.elementOpen('br');
      incrementalDom.elementClose('br');
      incrementalDom.elementOpenStart('label');
          incrementalDom.attr('class', 'control-label');
      incrementalDom.elementOpenEnd();
        /** @desc  */
        var MSG_EXTERNAL_7522557240209303660 = Liferay.Language.get('content');
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_7522557240209303660));
      incrementalDom.elementClose('label');
      incrementalDom.elementOpenStart('input');
          incrementalDom.attr('class', 'form-builder-success-page-content form-control');
          incrementalDom.attr('data-oninput', _handleSuccessPageUpdated);
          incrementalDom.attr('data-setting', 'body');
          incrementalDom.attr('type', 'text');
          incrementalDom.attr('value', body);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('input');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s4378_84d6177d = __deltemplate_s4378_84d6177d;
/**
 * @typedef {{
 *  _handleSuccessPageUpdated: (*|null|undefined),
 *  body: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
__deltemplate_s4378_84d6177d.Params;
if (goog.DEBUG) {
  __deltemplate_s4378_84d6177d.soyTemplateName = 'SuccessPage.__deltemplate_s4378_84d6177d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('SuccessPage.container.idom'), '', 0, __deltemplate_s4378_84d6177d);

exports.render.params = ["_handleSuccessPageUpdated","body","title"];
exports.render.types = {"_handleSuccessPageUpdated":"any","body":"string","title":"string"};
templates = exports;
return exports;

});

class SuccessPage extends Component {}
Soy.register(SuccessPage, templates);
export { SuccessPage, templates };
export default templates;
/* jshint ignore:end */

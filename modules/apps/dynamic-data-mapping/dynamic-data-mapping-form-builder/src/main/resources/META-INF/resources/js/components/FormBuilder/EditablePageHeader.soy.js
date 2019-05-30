/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from EditablePageHeader.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace EditablePageHeader.
 * @hassoydeltemplate {PageRenderer.PageHeader.idom}
 * @public
 */

goog.module('EditablePageHeader.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  description: (!goog.soy.data.SanitizedContent|string),
 *  pageIndex: number,
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1150_1634ea39(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var description = soy.asserts.assertType(goog.isString(opt_data.description) || opt_data.description instanceof goog.soy.data.SanitizedContent, 'description', opt_data.description, '!goog.soy.data.SanitizedContent|string');
  /** @type {number} */
  var pageIndex = soy.asserts.assertType(goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var title = soy.asserts.assertType(goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent, 'title', opt_data.title, '!goog.soy.data.SanitizedContent|string');
  /** @type {number} */
  var total = soy.asserts.assertType(goog.isNumber(opt_data.total), 'total', opt_data.total, 'number');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var placeholder = soy.asserts.assertType(opt_data.placeholder == null || (goog.isString(opt_data.placeholder) || opt_data.placeholder instanceof goog.soy.data.SanitizedContent), 'placeholder', opt_data.placeholder, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var msg_19882__soy19883 = '';
  /** @desc  */
  var MSG_EXTERNAL_6590398073352967364 = Liferay.Language.get('add-a-short-description-for-this-page');
  msg_19882__soy19883 += MSG_EXTERNAL_6590398073352967364;
  incrementalDom.elementOpenStart('textarea');
      incrementalDom.attr('class', 'form-builder-page-header-title form-control p-0');
      incrementalDom.attr('maxlength', '120');
      incrementalDom.attr('placeholder', ($$temp = placeholder) == null ? '' : $$temp);
      incrementalDom.attr('value', title);
  incrementalDom.elementOpenEnd();
    soyIdom.print(title);
  incrementalDom.elementClose('textarea');
  var descriptionPlaceholder__soy1164 = '';
  descriptionPlaceholder__soy1164 += msg_19882__soy19883;
  var pageDescriptionAttributes__soy1171 = function() {
    incrementalDom.attr('class', 'form-builder-page-header-description form-control p-0');
    incrementalDom.attr('maxlength', '120');
    incrementalDom.attr('placeholder', descriptionPlaceholder__soy1164);
    incrementalDom.attr('value', description);
  };
  incrementalDom.elementOpenStart('textarea');
      pageDescriptionAttributes__soy1171();
  incrementalDom.elementOpenEnd();
    soyIdom.print(description);
  incrementalDom.elementClose('textarea');
}
exports.__deltemplate_s1150_1634ea39 = __deltemplate_s1150_1634ea39;
/**
 * @typedef {{
 *  description: (!goog.soy.data.SanitizedContent|string),
 *  pageIndex: number,
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  total: number,
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
__deltemplate_s1150_1634ea39.Params;
if (goog.DEBUG) {
  __deltemplate_s1150_1634ea39.soyTemplateName = 'EditablePageHeader.__deltemplate_s1150_1634ea39';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.PageHeader.idom'), 'editable', 0, __deltemplate_s1150_1634ea39);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

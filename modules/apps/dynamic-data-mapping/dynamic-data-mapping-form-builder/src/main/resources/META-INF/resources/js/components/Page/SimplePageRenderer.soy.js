/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SimplePageRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ListPageRenderer.
 * @hassoydeltemplate {PageRenderer.column.idom}
 * @hassoydeltemplate {PageRenderer.container.idom}
 * @hassoydeltemplate {PageRenderer.page.idom}
 * @hassoydeltemplate {PageRenderer.row.idom}
 * @hassoydelcall {PageRenderer.RegisterFieldType.idom}
 * @hassoydelcall {PageRenderer.column.idom}
 * @hassoydelcall {PageRenderer.page.idom}
 * @hassoydelcall {PageRenderer.row.idom}
 * @public
 */

goog.module('ListPageRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
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
function __deltemplate_s1411_2444dc78(opt_data, opt_ijData, opt_ijData_deprecated) {
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
  var classes__soy1424 = '';
  classes__soy1424 += 'fade tab-pane';
  classes__soy1424 += activePage == pageIndex ? ' active show' : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', classes__soy1424);
      incrementalDom.attr('role', 'tabpanel');
  incrementalDom.elementOpenEnd();
    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.page.idom'), paginationMode, false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldEdited: _handleFieldEdited, editable: editable, page: page, pageIndex: activePage, paginationMode: paginationMode, spritemap: spritemap}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s1411_2444dc78 = __deltemplate_s1411_2444dc78;
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
__deltemplate_s1411_2444dc78.Params;
if (goog.DEBUG) {
  __deltemplate_s1411_2444dc78.soyTemplateName = 'ListPageRenderer.__deltemplate_s1411_2444dc78';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.container.idom'), 'simple', 0, __deltemplate_s1411_2444dc78);


/**
 * @param {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  page: (?),
 *  pageIndex: (null|number|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1442_ea9f5e32(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
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
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {?} */
  var page = opt_data.page;
  /** @type {null|number|undefined} */
  var pageIndex = soy.asserts.assertType(opt_data.pageIndex == null || goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'null|number|undefined');
  var row1464List = page.rows;
  var row1464ListLen = row1464List.length;
  for (var row1464Index = 0; row1464Index < row1464ListLen; row1464Index++) {
      var row1464Data = row1464List[row1464Index];
      soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.row.idom'), 'simple', false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, editable: editable, pageIndex: pageIndex, paginationMode: paginationMode, row: row1464Data, rowIndex: row1464Index, spritemap: spritemap}, null, opt_ijData);
    }
}
exports.__deltemplate_s1442_ea9f5e32 = __deltemplate_s1442_ea9f5e32;
/**
 * @typedef {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  page: (?),
 *  pageIndex: (null|number|undefined)
 * }}
 */
__deltemplate_s1442_ea9f5e32.Params;
if (goog.DEBUG) {
  __deltemplate_s1442_ea9f5e32.soyTemplateName = 'ListPageRenderer.__deltemplate_s1442_ea9f5e32';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.page.idom'), 'simple', 0, __deltemplate_s1442_ea9f5e32);


/**
 * @param {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  row: (?),
 *  rowIndex: (null|number|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1467_ab801acd(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
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
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {null|number|undefined} */
  var pageIndex = soy.asserts.assertType(opt_data.pageIndex == null || goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'null|number|undefined');
  /** @type {?} */
  var row = opt_data.row;
  /** @type {null|number|undefined} */
  var rowIndex = soy.asserts.assertType(opt_data.rowIndex == null || goog.isNumber(opt_data.rowIndex), 'rowIndex', opt_data.rowIndex, 'null|number|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'position-relative row');
  incrementalDom.elementOpenEnd();
    var column1492List = row.columns;
    var column1492ListLen = column1492List.length;
    for (var column1492Index = 0; column1492Index < column1492ListLen; column1492Index++) {
        var column1492Data = column1492List[column1492Index];
        soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.column.idom'), 'simple', false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, column: column1492Data, columnIndex: column1492Index, key: column1492Index, editable: editable, pageIndex: pageIndex, rowIndex: rowIndex, spritemap: spritemap}, null, opt_ijData);
      }
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s1467_ab801acd = __deltemplate_s1467_ab801acd;
/**
 * @typedef {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  row: (?),
 *  rowIndex: (null|number|undefined)
 * }}
 */
__deltemplate_s1467_ab801acd.Params;
if (goog.DEBUG) {
  __deltemplate_s1467_ab801acd.soyTemplateName = 'ListPageRenderer.__deltemplate_s1467_ab801acd';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.row.idom'), 'simple', 0, __deltemplate_s1467_ab801acd);


/**
 * @param {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  column: (?),
 *  columnIndex: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  rowIndex: (null|number|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s1495_ccd3f195(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {?} */
  var column = opt_data.column;
  /** @type {null|number|undefined} */
  var columnIndex = soy.asserts.assertType(opt_data.columnIndex == null || goog.isNumber(opt_data.columnIndex), 'columnIndex', opt_data.columnIndex, 'null|number|undefined');
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {null|number|undefined} */
  var pageIndex = soy.asserts.assertType(opt_data.pageIndex == null || goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'null|number|undefined');
  /** @type {null|number|undefined} */
  var rowIndex = soy.asserts.assertType(opt_data.rowIndex == null || goog.isNumber(opt_data.rowIndex), 'rowIndex', opt_data.rowIndex, 'null|number|undefined');
  if ((column.fields.length) != 0) {
    var attributes__soy1508 = function() {
      incrementalDom.attr('class', 'col-md-' + column.size);
      incrementalDom.attr('key', columnIndex);
    };
    incrementalDom.elementOpenStart('div');
        attributes__soy1508();
    incrementalDom.elementOpenEnd();
      var field1527List = column.fields;
      var field1527ListLen = field1527List.length;
      for (var field1527Index = 0; field1527Index < field1527ListLen; field1527Index++) {
          var field1527Data = field1527List[field1527Index];
          var fieldType__soy1518 = ($$temp = field1527Data.type) == null ? 'empty' : $$temp;
          soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), fieldType__soy1518, true)(soy.$$assignDefaults({editable: editable, events: {fieldBlurred: _handleFieldBlurred, fieldEdited: _handleFieldEdited}, ref: field1527Data.type + field1527Data.fieldName + field1527Data.name + field1527Data.label + rowIndex + columnIndex + pageIndex, key: field1527Data.type + field1527Data.fieldName + field1527Data.name + field1527Data.label + rowIndex + columnIndex + pageIndex, spritemap: spritemap}, field1527Data), null, opt_ijData);
        }
    incrementalDom.elementClose('div');
  }
}
exports.__deltemplate_s1495_ccd3f195 = __deltemplate_s1495_ccd3f195;
/**
 * @typedef {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  column: (?),
 *  columnIndex: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  rowIndex: (null|number|undefined)
 * }}
 */
__deltemplate_s1495_ccd3f195.Params;
if (goog.DEBUG) {
  __deltemplate_s1495_ccd3f195.soyTemplateName = 'ListPageRenderer.__deltemplate_s1495_ccd3f195';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.column.idom'), 'simple', 0, __deltemplate_s1495_ccd3f195);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

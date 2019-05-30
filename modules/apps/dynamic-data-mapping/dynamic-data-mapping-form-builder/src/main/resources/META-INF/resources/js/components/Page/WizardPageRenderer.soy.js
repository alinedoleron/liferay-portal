/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from WizardPageRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WizardPageRenderer.
 * @hassoydeltemplate {PageRenderer.column.idom}
 * @hassoydeltemplate {PageRenderer.container.idom}
 * @hassoydeltemplate {PageRenderer.page.idom}
 * @hassoydeltemplate {PageRenderer.row.idom}
 * @hassoydelcall {PageRenderer.PageHeader.idom}
 * @hassoydelcall {PageRenderer.RegisterFieldType.idom}
 * @hassoydelcall {PageRenderer.column.idom}
 * @hassoydelcall {PageRenderer.page.idom}
 * @hassoydelcall {PageRenderer.row.idom}
 * @public
 */

goog.module('WizardPageRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('PageRenderer.incrementaldom', 'fieldEmpty');


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
function __deltemplate_s1715_22101879(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
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
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-layout-builder ddm-page-container-layout');
  incrementalDom.elementOpenEnd();
    if (activePage == pageIndex) {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'ddm-form-page pl-4 pr-4');
      incrementalDom.elementOpenEnd();
        soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.PageHeader.idom'), page.headerRenderer, false)(soy.$$assignDefaults({description: ($$temp = page.description) == null ? '' : $$temp, pageIndex: pageIndex, title: ($$temp = page.title) == null ? '' : $$temp, total: total}, page), null, opt_ijData);
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'form-builder-layout');
        incrementalDom.elementOpenEnd();
          soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.page.idom'), paginationMode, false)(opt_data, null, opt_ijData);
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    }
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s1715_22101879 = __deltemplate_s1715_22101879;
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
__deltemplate_s1715_22101879.Params;
if (goog.DEBUG) {
  __deltemplate_s1715_22101879.soyTemplateName = 'WizardPageRenderer.__deltemplate_s1715_22101879';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.container.idom'), 'wizard', 0, __deltemplate_s1715_22101879);


/**
 * @param {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
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
function __deltemplate_s1750_2c8f81b2(opt_data, opt_ijData, opt_ijData_deprecated) {
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
  /** @type {boolean|null|undefined} */
  var empty = soy.asserts.assertType(opt_data.empty == null || (goog.isBoolean(opt_data.empty) || opt_data.empty === 1 || opt_data.empty === 0), 'empty', opt_data.empty, 'boolean|null|undefined');
  /** @type {?} */
  var page = opt_data.page;
  /** @type {null|number|undefined} */
  var pageIndex = soy.asserts.assertType(opt_data.pageIndex == null || goog.isNumber(opt_data.pageIndex), 'pageIndex', opt_data.pageIndex, 'null|number|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'layout-page');
  incrementalDom.elementOpenEnd();
    if (empty) {
      var attributes__soy1765 = function() {
        incrementalDom.attr('class', 'col col-empty col-md-12 last-col lfr-initial-col mt-5 mb-4');
        incrementalDom.attr('data-ddm-field-column', '0');
        incrementalDom.attr('data-ddm-field-page', pageIndex);
        incrementalDom.attr('data-ddm-field-row', '0');
      };
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'row');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            attributes__soy1765();
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'ddm-target');
              incrementalDom.attr('id', 'lfr-initial-col-message');
          incrementalDom.elementOpenEnd();
            /** @desc  */
            var MSG_EXTERNAL_3366078975712358322 = Liferay.Language.get('drag-from-sidebar-and-drop-here');
            incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_3366078975712358322));
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    } else {
      var row1810List = page.rows;
      var row1810ListLen = row1810List.length;
      for (var row1810Index = 0; row1810Index < row1810ListLen; row1810Index++) {
          var row1810Data = row1810List[row1810Index];
          if (row1810Index == 0 && editable) {
            $templateAlias1({isRow: true, pageIndex: pageIndex, rowIndex: 0, size: 12}, null, opt_ijData);
          }
          soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.row.idom'), paginationMode, false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, editable: editable, pageIndex: pageIndex, paginationMode: paginationMode, row: row1810Data, rowIndex: row1810Index, spritemap: spritemap}, null, opt_ijData);
          if (editable) {
            $templateAlias1({isRow: true, pageIndex: pageIndex, rowIndex: row1810Index + 1, size: 12}, null, opt_ijData);
          }
        }
    }
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s1750_2c8f81b2 = __deltemplate_s1750_2c8f81b2;
/**
 * @typedef {{
 *  paginationMode: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  editable: (boolean|null|undefined),
 *  empty: (boolean|null|undefined),
 *  page: (?),
 *  pageIndex: (null|number|undefined)
 * }}
 */
__deltemplate_s1750_2c8f81b2.Params;
if (goog.DEBUG) {
  __deltemplate_s1750_2c8f81b2.soyTemplateName = 'WizardPageRenderer.__deltemplate_s1750_2c8f81b2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.page.idom'), 'wizard', 0, __deltemplate_s1750_2c8f81b2);


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
function __deltemplate_s1814_6cf9e12f(opt_data, opt_ijData, opt_ijData_deprecated) {
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
    var column1838List = row.columns;
    var column1838ListLen = column1838List.length;
    for (var column1838Index = 0; column1838Index < column1838ListLen; column1838Index++) {
        var column1838Data = column1838List[column1838Index];
        soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.column.idom'), 'wizard', false)({_handleFieldBlurred: _handleFieldBlurred, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, column: column1838Data, columnIndex: column1838Index, editable: editable, pageIndex: pageIndex, rowIndex: rowIndex, spritemap: spritemap}, null, opt_ijData);
      }
  incrementalDom.elementClose('div');
}
exports.__deltemplate_s1814_6cf9e12f = __deltemplate_s1814_6cf9e12f;
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
__deltemplate_s1814_6cf9e12f.Params;
if (goog.DEBUG) {
  __deltemplate_s1814_6cf9e12f.soyTemplateName = 'WizardPageRenderer.__deltemplate_s1814_6cf9e12f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.row.idom'), 'wizard', 0, __deltemplate_s1814_6cf9e12f);


/**
 * @param {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
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
function __deltemplate_s1841_820f2a00(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldClicked = opt_data._handleFieldClicked;
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
    var indexes__soy1855 = function() {
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
    var attributes__soy1876 = function() {
      incrementalDom.attr('class', 'col-md-' + column.size + ' col-ddm');
      indexes__soy1855();
    };
    incrementalDom.elementOpenStart('div');
        attributes__soy1876();
    incrementalDom.elementOpenEnd();
      var content__soy1885 = function() {
        var field1896List = column.fields;
        var field1896ListLen = field1896List.length;
        for (var field1896Index = 0; field1896Index < field1896ListLen; field1896Index++) {
            var field1896Data = field1896List[field1896Index];
            var fieldType__soy1888 = field1896Data.type;
            soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), fieldType__soy1888, true)(soy.$$assignDefaults({readOnly: true, events: {fieldBlurred: _handleFieldBlurred, fieldEdited: _handleFieldEdited}, ref: field1896Data.type + field1896Data.fieldName + field1896Data.name + field1896Data.label + rowIndex + columnIndex + pageIndex, spritemap: spritemap}, field1896Data), null, opt_ijData);
          }
      };
      if (editable) {
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'ddm-field-container h-100');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'ddm-resize-handle ddm-resize-handle-left');
              indexes__soy1855();
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('div');
          var attributesDrag__soy1905 = function() {
            incrementalDom.attr('class', 'ddm-drag');
            incrementalDom.attr('data-onclick', _handleFieldClicked);
          };
          incrementalDom.elementOpenStart('div');
              attributesDrag__soy1905();
          incrementalDom.elementOpenEnd();
            content__soy1885();
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'ddm-resize-handle ddm-resize-handle-right');
              indexes__soy1855();
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      } else {
        content__soy1885();
      }
    incrementalDom.elementClose('div');
  } else if (editable) {
    $templateAlias1({columnIndex: columnIndex, pageIndex: pageIndex, rowIndex: rowIndex, size: column.size}, null, opt_ijData);
  }
}
exports.__deltemplate_s1841_820f2a00 = __deltemplate_s1841_820f2a00;
/**
 * @typedef {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  column: (?),
 *  columnIndex: (null|number|undefined),
 *  editable: (boolean|null|undefined),
 *  pageIndex: (null|number|undefined),
 *  rowIndex: (null|number|undefined)
 * }}
 */
__deltemplate_s1841_820f2a00.Params;
if (goog.DEBUG) {
  __deltemplate_s1841_820f2a00.soyTemplateName = 'WizardPageRenderer.__deltemplate_s1841_820f2a00';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.column.idom'), 'wizard', 0, __deltemplate_s1841_820f2a00);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */

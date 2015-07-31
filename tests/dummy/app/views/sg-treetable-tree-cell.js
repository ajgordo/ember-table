// BEGIN-SNIPPET sg-treetable-tree-cell
import Ember from 'ember';
import TableCell from 'ember-table/views/table-cell';

export default TableCell.extend({
  templateName: 'sg-treetable/sg-treetable-tree-cell',
  classNames: 'ember-table-table-tree-cell',

  paddingStyle: Ember.computed(function() {
    return new Ember.Handlebars.SafeString('padding-left:' + (this.get('row.indentation')) + 'px;');
  }).property('row.indentation')
});
// END-SNIPPET
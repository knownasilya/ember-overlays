import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-overlay', 'Integration | Component | create overlay', {
  integration: true
});

test('it renders without block', function(assert) {
  this.render(hbs`
    {{#mark-overlay id="my-mark-id"}}
      <div class="test-target" style="width: 100px; height: 200px"></div>
    {{/mark-overlay}}
    {{#overlay-marks as |mark|}}
      {{create-overlay at=mark highlighted=true label="my overlay" class="my-overlay"}}
    {{/overlay-marks}}
  `);
  assert.equal(this.$('label:contains(my overlay)').length, 1);
  assert.equal(this.$('.my-overlay .target').width(), 100);
  assert.equal(this.$('.my-overlay .target').height(), 200);
});

test('it renders with user content', function(assert) {
  this.render(hbs`
    {{#mark-overlay id="my-mark-id"}}
      <div class="test-target" style="width: 100px; height: 200px"></div>
    {{/mark-overlay}}
    {{#overlay-marks as |mark|}}
      {{#create-overlay at=mark highlighted=true class="my-overlay"}}
        <div class="user-content"></div>
      {{/create-overlay}}
    {{/overlay-marks}}
  `);
  assert.equal(this.$('.user-content').length, 1);
  assert.equal(this.$('.my-overlay .target').width(), 100);
  assert.equal(this.$('.my-overlay .target').height(), 200);
});

test('it renders with user content taller than underlying mark', function(assert) {
  this.render(hbs`
    {{#mark-overlay id="my-mark-id"}}
      <div class="test-target" style="width: 100px; height: 200px"></div>
    {{/mark-overlay}}
    {{#overlay-marks as |mark|}}
      {{#create-overlay at=mark highlighted=true class="my-overlay"}}
        <div class="user-content" style="height: 300px"></div>
      {{/create-overlay}}
    {{/overlay-marks}}
  `);
  assert.equal(this.$('.user-content').length, 1);
  assert.equal(this.$('.my-overlay .target').width(), 100);
  assert.equal(this.$('.my-overlay .target').height(), 300);
});

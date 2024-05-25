import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-r-mj-уведомление', 'Unit | Model | i-i-s-c-r-mj-уведомление', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-c-r-mj-группа-клиент',
    'model:i-i-s-c-r-mj-заявка',
    'model:i-i-s-c-r-mj-клиент',
    'model:i-i-s-c-r-mj-сделка',
    'model:i-i-s-c-r-mj-событие',
    'model:i-i-s-c-r-mj-сотрудник',
    'model:i-i-s-c-r-mj-товары',
    'model:i-i-s-c-r-mj-уведомление',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-r-mj-товары', 'Unit | Serializer | i-i-s-c-r-mj-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-c-r-mj-товары',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-c-r-mj-обл-при',
    'transform:i-i-s-c-r-mj-статус',
    'transform:i-i-s-c-r-mj-тип-тр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

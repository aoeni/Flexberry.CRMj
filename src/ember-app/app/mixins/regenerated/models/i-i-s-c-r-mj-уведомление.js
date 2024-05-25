import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  сообщ: DS.attr('string'),
  событие: DS.belongsTo('i-i-s-c-r-mj-событие', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-c-r-mj-уведомление.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сообщ: {
    descriptionKey: 'models.i-i-s-c-r-mj-уведомление.validations.сообщ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  событие: {
    descriptionKey: 'models.i-i-s-c-r-mj-уведомление.validations.событие.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УведомлениеE', 'i-i-s-c-r-mj-уведомление', {
    сообщ: attr('Сообщ', { index: 0, hidden: true }),
    дата: attr('Дата', { index: 1 }),
    событие: belongsTo('i-i-s-c-r-mj-событие', 'Событие', {
      соо: attr('Сообщение', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'соо' })
  });

  modelClass.defineProjection('УведомлениеL', 'i-i-s-c-r-mj-уведомление', {
    сообщ: attr('Сообщ', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    событие: belongsTo('i-i-s-c-r-mj-событие', 'Соо', {
      соо: attr('Соо', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

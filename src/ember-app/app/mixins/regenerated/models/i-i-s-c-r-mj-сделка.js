import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  статусС: DS.attr('i-i-s-c-r-mj-статус'),
  заявка: DS.belongsTo('i-i-s-c-r-mj-заявка', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-c-r-mj-сделка.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статусС: {
    descriptionKey: 'models.i-i-s-c-r-mj-сделка.validations.статусС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-c-r-mj-сделка.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СделкаE', 'i-i-s-c-r-mj-сделка', {
    iD: attr('ID', { index: 0 }),
    статусС: attr('Статус сделки', { index: 1 }),
    заявка: belongsTo('i-i-s-c-r-mj-заявка', 'Заявка', {
      датаСоздания: attr('Дата создания заявки', { index: 3, hidden: true }),
      клиент: belongsTo('i-i-s-c-r-mj-клиент', '', {
        iD: attr('ID клиента', { index: 4 }),
        фИО: attr('ФИО клиента', { index: 5 }),
        телефон: attr('Телефон клиента', { index: 6 })
      }, { index: -1, hidden: true }),
      сотрудник: belongsTo('i-i-s-c-r-mj-сотрудник', '', {
        фИО: attr('ФИО сотрудника', { index: 7 }),
        iD: attr('ID сотрудника', { index: 8 })
      }, { index: -1, hidden: true }),
      товары: belongsTo('i-i-s-c-r-mj-товары', '', {
        наименование: attr('Наименование', { index: 9 }),
        объем: attr('Объем', { index: 11 }),
        цена: attr('Цена', { index: 12 })
      }, { index: -1, hidden: true }),
      колВо: attr('Количество', { index: 10 }),
      стоимость: attr('Стоимость', { index: 13 })
    }, { index: 2, displayMemberPath: 'датаСоздания' })
  });

  modelClass.defineProjection('СделкаL', 'i-i-s-c-r-mj-сделка', {
    iD: attr('ID', { index: 0 }),
    статусС: attr('Статус С', { index: 1 }),
    заявка: belongsTo('i-i-s-c-r-mj-заявка', 'Дата создания', {
      датаСоздания: attr('Дата создания', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

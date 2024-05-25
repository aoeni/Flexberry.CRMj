import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСозд: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаУвед: DS.attr('date'),
  соо: DS.attr('string'),
  установ: DS.attr('boolean'),
  заявка: DS.belongsTo('i-i-s-c-r-mj-заявка', { inverse: null, async: false }),
  сделка: DS.belongsTo('i-i-s-c-r-mj-сделка', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСозд: {
    descriptionKey: 'models.i-i-s-c-r-mj-событие.validations.датаСозд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаУвед: {
    descriptionKey: 'models.i-i-s-c-r-mj-событие.validations.датаУвед.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  соо: {
    descriptionKey: 'models.i-i-s-c-r-mj-событие.validations.соо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  установ: {
    descriptionKey: 'models.i-i-s-c-r-mj-событие.validations.установ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-c-r-mj-событие.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сделка: {
    descriptionKey: 'models.i-i-s-c-r-mj-событие.validations.сделка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СобытиеE', 'i-i-s-c-r-mj-событие', {
    датаСозд: attr('Дата создания', { index: 0 }),
    соо: attr('Сообщение', { index: 1 }),
    датаУвед: attr('Дата уведомления', { index: 2 }),
    установ: attr('Установить', { index: 3 }),
    заявка: belongsTo('i-i-s-c-r-mj-заявка', 'Заявка', {
      iD: attr('ID', { index: 5 }),
      датаСоздания: attr('Дата создания заявки', { index: 6, hidden: true })
    }, { index: 4, displayMemberPath: 'датаСоздания' }),
    сделка: belongsTo('i-i-s-c-r-mj-сделка', 'Сделка', {
      iD: attr('ID', { index: 8, hidden: true }),
      статусС: attr('Статус сделки', { index: 9 }),
      заявка: belongsTo('i-i-s-c-r-mj-заявка', '', {
        товары: belongsTo('i-i-s-c-r-mj-товары', '', {
          наименование: attr('Наименование', { index: 10 })
        }, { index: -1, hidden: true }),
        стоимость: attr('Стоимость', { index: 11 }),
        колВо: attr('Количество', { index: 12 }),
        клиент: belongsTo('i-i-s-c-r-mj-клиент', '', {
          фИО: attr('ФИО клиента', { index: 13 }),
          iD: attr('ID клиента', { index: 16 })
        }, { index: -1, hidden: true }),
        сотрудник: belongsTo('i-i-s-c-r-mj-сотрудник', '', {
          фИО: attr('ID сотрудника', { index: 14 }),
          iD: attr('ФИО сотрудника', { index: 15 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 7, displayMemberPath: 'iD' })
  });

  modelClass.defineProjection('СобытиеL', 'i-i-s-c-r-mj-событие', {
    датаСозд: attr('Дата созд', { index: 0 }),
    соо: attr('Соо', { index: 1 }),
    датаУвед: attr('Дата увед', { index: 2 }),
    установ: attr('Установ', { index: 3 }),
    заявка: belongsTo('i-i-s-c-r-mj-заявка', 'Дата создания', {
      датаСоздания: attr('Дата создания', { index: 4 })
    }, { index: -1, hidden: true }),
    сделка: belongsTo('i-i-s-c-r-mj-сделка', 'ID', {
      iD: attr('ID', { index: 5 })
    }, { index: -1, hidden: true })
  });
};

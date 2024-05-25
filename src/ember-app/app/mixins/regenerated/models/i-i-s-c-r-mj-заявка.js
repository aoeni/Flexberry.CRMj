import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  датаСоздания: DS.attr('date'),
  колВо: DS.attr('number'),
  статусЗ: DS.attr('i-i-s-c-r-mj-статус'),
  стоимость: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-c-r-mj-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-c-r-mj-сотрудник', { inverse: null, async: false }),
  товары: DS.belongsTo('i-i-s-c-r-mj-товары', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаСоздания: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колВо: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статусЗ: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.статусЗ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-c-r-mj-заявка.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-c-r-mj-заявка', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    iD: attr('ID', { index: 1 }),
    статусЗ: attr('Статус заявки', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    товары: belongsTo('i-i-s-c-r-mj-товары', 'Товары', {
      наименование: attr('Наименование', { index: 5 }),
      объем: attr('Объем', { index: 6 }),
      цена: attr('Цена', { index: 7 })
    }, { index: 4, displayMemberPath: 'стандарт' }),
    колВо: attr('Количество', { index: 8 }),
    клиент: belongsTo('i-i-s-c-r-mj-клиент', 'Клиент', {
      iD: attr('ID клиента', { index: 10 }),
      фИО: attr('ФИО клиента', { index: 11, hidden: true }),
      телефон: attr('Телефон клиента', { index: 12 })
    }, { index: 9, displayMemberPath: 'фИО' }),
    сотрудник: belongsTo('i-i-s-c-r-mj-сотрудник', 'Сотрудник', {
      iD: attr('ID сотрудника', { index: 14 }),
      фИО: attr('ФИО сотрудника', { index: 15, hidden: true })
    }, { index: 13, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-c-r-mj-заявка', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    iD: attr('ID', { index: 1 }),
    статусЗ: attr('Статус З', { index: 2 }),
    колВо: attr('Кол во', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    товары: belongsTo('i-i-s-c-r-mj-товары', 'Стандарт', {
      стандарт: attr('Стандарт', { index: 5 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-c-r-mj-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-c-r-mj-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 7 })
    }, { index: -1, hidden: true })
  });
};

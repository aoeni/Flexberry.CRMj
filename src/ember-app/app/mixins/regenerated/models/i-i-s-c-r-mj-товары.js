import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  колич: DS.attr('number'),
  наименование: DS.attr('string'),
  область: DS.attr('i-i-s-c-r-mj-обл-при'),
  объем: DS.attr('decimal'),
  преимущ: DS.attr('string'),
  стандарт: DS.attr('string'),
  темпер: DS.attr('number'),
  тип: DS.attr('i-i-s-c-r-mj-тип-тр'),
  требования: DS.attr('string'),
  цена: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-c-r-mj-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колич: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.колич.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  область: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.область.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  преимущ: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.преимущ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стандарт: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.стандарт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  темпер: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.темпер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  требования: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.требования.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-c-r-mj-товары.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-c-r-mj-товары', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    объем: attr('Объем', { index: 3 }),
    тип: attr('Тип транспорта', { index: 4 }),
    область: attr('Область применения', { index: 5 }),
    темпер: attr('Температура', { index: 6 }),
    стандарт: attr('Стандарт производства', { index: 7 }),
    дата: attr('Дата производства', { index: 8 }),
    преимущ: attr('Преимущества', { index: 9 }),
    требования: attr('Требования ', { index: 10 }),
    колич: attr('Количество', { index: 11 }),
    сотрудник: belongsTo('i-i-s-c-r-mj-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 13, hidden: true })
    }, { index: 12, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-c-r-mj-товары', {
    темпер: attr('Темпер', { index: 0 }),
    стандарт: attr('Стандарт', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    преимущ: attr('Преимущ', { index: 3 }),
    требования: attr('Требования', { index: 4 }),
    цена: attr('Цена', { index: 5 }),
    колич: attr('Колич', { index: 6 }),
    iD: attr('ID', { index: 7 }),
    объем: attr('Объем', { index: 8 }),
    наименование: attr('Наименование', { index: 9 }),
    область: attr('Область', { index: 10 }),
    тип: attr('Тип', { index: 11 }),
    сотрудник: belongsTo('i-i-s-c-r-mj-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 12 })
    }, { index: -1, hidden: true })
  });
};

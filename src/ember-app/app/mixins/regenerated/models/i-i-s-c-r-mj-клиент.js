import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  iD: DS.attr('number'),
  телефон: DS.attr('string'),
  фИО: DS.attr('string'),
  группаКлиент: DS.belongsTo('i-i-s-c-r-mj-группа-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-c-r-mj-клиент.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iD: {
    descriptionKey: 'models.i-i-s-c-r-mj-клиент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-c-r-mj-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-c-r-mj-клиент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группаКлиент: {
    descriptionKey: 'models.i-i-s-c-r-mj-клиент.validations.группаКлиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-c-r-mj-клиент', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    email: attr('Email', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    группаКлиент: belongsTo('i-i-s-c-r-mj-группа-клиент', 'Группа клиент', {
      наименование: attr('Наименование', { index: 5, hidden: true }),
      скидка: attr('Скидка', { index: 6 })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-c-r-mj-клиент', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    email: attr('Email', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    группаКлиент: belongsTo('i-i-s-c-r-mj-группа-клиент', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

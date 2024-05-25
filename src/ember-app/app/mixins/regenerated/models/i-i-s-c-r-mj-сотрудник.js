import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  iD: DS.attr('number'),
  комментарий: DS.attr('string'),
  телефон: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-c-r-mj-сотрудник.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iD: {
    descriptionKey: 'models.i-i-s-c-r-mj-сотрудник.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-c-r-mj-сотрудник.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-c-r-mj-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-c-r-mj-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-c-r-mj-сотрудник', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    email: attr('Email', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-c-r-mj-сотрудник', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    email: attr('Email', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  скидка: DS.attr('number')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-c-r-mj-группа-клиент.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скидка: {
    descriptionKey: 'models.i-i-s-c-r-mj-группа-клиент.validations.скидка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГруппаКлиентE', 'i-i-s-c-r-mj-группа-клиент', {
    наименование: attr('Наименование', { index: 0 }),
    скидка: attr('Скидка', { index: 1 })
  });

  modelClass.defineProjection('ГруппаКлиентL', 'i-i-s-c-r-mj-группа-клиент', {
    наименование: attr('Наименование', { index: 0 }),
    скидка: attr('Скидка', { index: 1 })
  });
};

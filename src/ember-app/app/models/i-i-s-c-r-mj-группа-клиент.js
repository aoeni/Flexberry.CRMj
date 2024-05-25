import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГруппаКлиентMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-группа-клиент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГруппаКлиентMixin, Validations, {
});

defineProjections(Model);

export default Model;

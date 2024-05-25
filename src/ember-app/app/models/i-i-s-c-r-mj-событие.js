import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СобытиеMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-событие';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СобытиеMixin, Validations, {
});

defineProjections(Model);

export default Model;

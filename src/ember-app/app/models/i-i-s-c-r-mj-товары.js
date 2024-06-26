import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТоварыMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-товары';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТоварыMixin, Validations, {
});

defineProjections(Model);

export default Model;

import {
  defineNamespace,
  defineProjections,
  Model as УведомлениеMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-уведомление';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УведомлениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

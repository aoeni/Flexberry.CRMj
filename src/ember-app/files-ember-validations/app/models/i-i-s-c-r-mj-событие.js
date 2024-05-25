import {
  defineNamespace,
  defineProjections,
  Model as СобытиеMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-событие';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СобытиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

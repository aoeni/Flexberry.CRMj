import {
  defineNamespace,
  defineProjections,
  Model as СделкаMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-сделка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СделкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

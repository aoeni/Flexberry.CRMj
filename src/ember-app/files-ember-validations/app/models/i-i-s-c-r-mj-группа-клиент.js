import {
  defineNamespace,
  defineProjections,
  Model as ГруппаКлиентMixin
} from '../mixins/regenerated/models/i-i-s-c-r-mj-группа-клиент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГруппаКлиентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

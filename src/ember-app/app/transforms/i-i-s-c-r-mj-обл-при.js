import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОблПриEnum from '../enums/i-i-s-c-r-mj-обл-при';

export default FlexberryEnum.extend({
  enum: ОблПриEnum,
  sourceType: 'IIS.CRMj.ОблПри'
});

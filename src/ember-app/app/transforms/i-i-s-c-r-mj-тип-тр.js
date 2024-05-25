import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипТрEnum from '../enums/i-i-s-c-r-mj-тип-тр';

export default FlexberryEnum.extend({
  enum: ТипТрEnum,
  sourceType: 'IIS.CRMj.ТипТр'
});

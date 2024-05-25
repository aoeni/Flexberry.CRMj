import { Serializer as ГруппаКлиентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-mj-группа-клиент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГруппаКлиентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

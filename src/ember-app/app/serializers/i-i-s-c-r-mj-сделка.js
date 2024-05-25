import { Serializer as СделкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-mj-сделка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СделкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

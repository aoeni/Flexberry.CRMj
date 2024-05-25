import { Serializer as СобытиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-mj-событие';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СобытиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

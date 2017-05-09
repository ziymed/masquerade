import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Field extends mixin(Model, {
    name: Model.attribute('name'),
    description: Model.attribute('description'),
    validation: Model.attribute('validation'),
    required: Model.attribute('required'),
    prefix: Model.attribute('prefix'),
    icon: Model.attribute('icon')
}) {


    /**
     * Construct a path to the API endpoint for this resource.
     *
     * @return {String}
     * @protected
     */
    apiEndpoint() {
        return '/masquerade/fields' + (this.exists ? '/' + this.data.id : '');
    }
}

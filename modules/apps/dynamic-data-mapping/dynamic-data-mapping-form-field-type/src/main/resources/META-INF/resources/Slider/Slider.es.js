import '../FieldBase/FieldBase.es';
import './SliderRegister.soy.js';
import templates from './Slider.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

    /**
     * Slider Component
     */
    class Slider extends Component {

        dispatchEvent(event, name, value) {
            this.emit(name, {
                fieldInstance: this,
                originalEvent: event,
                value
            });
        }

        _handleFieldChanged(event) {
            const {value} = event.target;

            this.setState(
                {
                    value
                },
                () => this.dispatchEvent(event, 'fieldEdited', value)
            );
        }
    }

    Slider.STATE = {
        /**
        * @default undefined
        * @instance
        * @memberof Slider
        * @type {?(string|undefined)}
        */

        name: Config.string().required(),

        /**
         * @default undefined
         * @instance
         * @memberof Text
         * @type {?(string|undefined)}
         */

        predefinedValue: Config.string().value(''),

        /**
        * @default undefined
        * @instance
        * @memberof Slider
        * @type {?(string|undefined)}
        */

        value: Config.string().value('')
    }

    // Register component
    Soy.register(Slider, templates);

    export default Slider;

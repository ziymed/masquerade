import Button from 'flarum/components/Button';
import BaseField from './BaseField';

export default class EmailField extends BaseField {
    editorInputProps() {
        let props = super.editorInputProps();

        props.type = 'email';
        props.placeholder = 'you@example.com';

        return props;
    }

    answerContent() {
        const email = this.value()
            .split(/@|\./)
            .map(segment => {
                return segment.replace(/(.{2})./g, '$1*');
            })
            .join('*');

        return Button.component({
            onclick: () => this.mailTo(),
            className: 'Button Button--text',
            icon: 'envelope-o',
            children: email,
        });
    }

    mailTo() {
        window.location = 'mailto:' + this.value();
    }
}

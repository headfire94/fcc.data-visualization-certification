import Textarea from 'react-textarea-autosize';

import React, {
    Component,
    PropTypes,
} from 'react';

class MarkdownInput extends Component {
    componentDidMount() {
        this.refs.textarea.value = this.props.default;
        this.refs.textarea.focus();
    }
    render() {
        return (
            <textarea ref="textarea" className="input" onChange={this.props.onChange} />
        );
    }
}

MarkdownInput.propTypes = {};
MarkdownInput.defaultProps = {};

export default MarkdownInput;

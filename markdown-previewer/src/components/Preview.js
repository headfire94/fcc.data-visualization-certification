import React, {
    Component,
    PropTypes,
} from 'react';



class Preview extends Component {
    render() {
        return (
            <div className="preview" dangerouslySetInnerHTML={this.props.markdown}/>
        );
    }
}

Preview.propTypes = {};
Preview.defaultProps = {};

export default Preview;
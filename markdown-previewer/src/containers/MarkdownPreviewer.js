import React, {
    Component,
    PropTypes,
} from 'react';
import ReactDOM from 'react-dom'
import MarkdownInput from '../components/MarkdownInput';
import Preview from '../components/Preview';
import defaultMarkdown from '../components/default';
import marked from 'marked';

class MarkdownPreviewer extends Component {
    constructor() {
        super();
        this.state = {
            markdown : defaultMarkdown
        };
    }
    onChange = (e)=> {
        this.setState({
            markdown: e.target.value
        })
    };

    transformMarkdown() {
        return {
            __html : marked(this.state.markdown)
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Markdown Previewer by HeadFire</h1>
               <div className="wrapper">
                   <MarkdownInput onChange={this.onChange} default={this.state.markdown}/>
                   <Preview markdown={this.transformMarkdown()}/>
               </div>
            </div>
        );
    }
}

const container = document.getElementById('root');
ReactDOM.render(<MarkdownPreviewer />, container);




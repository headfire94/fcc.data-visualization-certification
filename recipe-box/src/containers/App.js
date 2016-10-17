import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'

//material UI
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import confirm from '../Utils/confirm'

//components
import RecipeList from '../components/RecipeList';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false,
            recipes : [
                {
                    id: 1,
                    name : 'Sandwich',
                    description : 'Просто сендвич',
                    ingredients : 'лапша, вода, молоко'
                }
            ]
        };
    }

    openModal = () => {
        confirm('Are you sure').then(
            (result) => {
                // `proceed` callback
                console.log(result);
            },
            (result) => {
                // `cancel` callback
                console.log(result)
            }
        )
    };

    closeModal = () => {
        this.setState({modalOpen: false});
    };

    handleDelete() {

    }


    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <RecipeList
                        recipes={this.state.recipes}
                        handleEdit={this.openModal}
                        handleDelete={this.openModal}/>
                </div>
            </MuiThemeProvider>
        );
    }
}


const container = document.getElementById('root');
ReactDOM.render(<App />, container);




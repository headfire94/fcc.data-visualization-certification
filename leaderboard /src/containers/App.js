import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'

//material UI

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//container components
import LeaderBoard from '../components/LeaderBoard';

const urls = {
    total: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
    month: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filter: 'total'
        };
        this.onFilter = this.onFilter.bind(this);
    }

    componentWillMount() {
        this.getData(this.state.filter)
            .then(response => {
                this.setState({data: response});
            });
    }

    getData(type) {
        return fetch(urls[type])
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(Error('error'))
            }).catch((err) => console.log(err))
    }

    onFilter(type) {
        this.getData(type).then(response => {
            this.setState({
                data: response,
                filter: type
            });
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <LeaderBoard
                    tableData={this.state.data}
                    filter={this.state.filter}
                    onFilter={this.onFilter}/>
            </MuiThemeProvider>
        );
    }
}


const container = document.getElementById('root');
ReactDOM.render(<App />, container);




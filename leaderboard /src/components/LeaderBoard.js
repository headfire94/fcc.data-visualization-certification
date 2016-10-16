import React, {Component, PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
//components UI
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'


export default class LeaderBoard extends Component {
    render() {
        return (
            <div className="board-wrapper">
                <Table
                    selectable={true}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="4" tooltip="LeaderBoard" style={{
                                textAlign: 'center',
                                fontSize: '24px'
                            }}>LeaderBoard</TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn >#</TableHeaderColumn>
                            <TableHeaderColumn >Username</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Liders in past 30 days" onTouchTap={() => {
                                this.props.onFilter('month');
                            }}>
                                Points in past 30 days {this.props.filter == 'month' ?
                                <NavigationArrowDropDown style={{verticalAlign: 'middle'}}/> : ''}
                            </TableHeaderColumn>
                            <TableHeaderColumn tooltip="Liders of all time" onTouchTap={() => {
                                this.props.onFilter('total');
                            }}>
                                All time points {this.props.filter == 'total' ?
                                <NavigationArrowDropDown style={{verticalAlign: 'middle'}}/> : ''}
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        showRowHover={true}
                        stripedRows={true}
                    >
                        {this.props.tableData.map((row, index) => (
                            <TableRow key={index + 1}>
                                <TableRowColumn>{index + 1}</TableRowColumn>
                                <TableRowColumn>
                                    <Avatar src={row.img} style={{verticalAlign: 'middle', display: 'inlineBlock', marginRight:'10px'}}/>
                                    <a href={'https://www.freecodecamp.com/' + row.username}
                                       target="_blank"
                                       style={{verticalAlign: 'middle', display: 'inlineBlock', color : 'white'}}>
                                        {row.username}
                                    </a>
                                </TableRowColumn>
                                <TableRowColumn>{row.recent}</TableRowColumn>
                                <TableRowColumn>{row.alltime}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
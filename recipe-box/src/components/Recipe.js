import React, {
    PropTypes,
} from 'react';
import replace from 'lodash/replace';
import map from 'lodash/map';
import split from 'lodash/split';
import capitalize from 'lodash/capitalize';

// UI for card
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import RaisedButton from 'material-ui/RaisedButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    render() {
        let ingredientsArr = split(replace(this.props.ingredients, /\s/g, ''), ',');
        ingredientsArr = map(ingredientsArr, (ingredient)=> {
            return capitalize(ingredient);
        });
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={this.props.name}
                    subtitle={this.props.description}
                    actAsExpander={true}
                    showExpandableButton={true}
                    avatar={
                        <Avatar
                            src="http://lorempixel.com/50/50/food/"
                            size={50}/>
                    }
                />
                <CardText expandable={true}>
                    <List>
                        {ingredientsArr.map((ingredient, index) => {
                            return (
                                <ListItem key={index} primaryText={ingredient} leftIcon={<ActionGrade />} />
                            )
                        })}
                    </List>
                </CardText>
                <CardActions expandable={true}>
                    <RaisedButton
                        onTouchTap={this.props.handleDelete}
                        icon={<ActionDelete />}
                    />

                    <RaisedButton
                        icon={<EditorModeEdit />}/>
                </CardActions>
            </Card>
        );
    }
}

export default Recipe;



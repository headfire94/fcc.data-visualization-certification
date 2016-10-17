import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Recipe from './Recipe';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {

        return (
            <Grid>
                <Row>
                    {this.props.recipes.map((recipe) => {
                        return <Recipe
                            {...recipe}
                            handleDelete={this.props.handleDelete}
                            handleEdit={this.props.handleEdit}
                            key={recipe.id}/>
                    })}
                    <Col xs={6} md={3}>

                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default RecipeList;
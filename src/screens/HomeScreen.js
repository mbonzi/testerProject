import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { MOVIES } from '../Arrays/MoviesArray';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES,
    };
  }

  render() {
    const renderMovie = ({ item }) => {
      return (
        <ListItem
          title={item.title}
          subtitle={item.director}
        />
      );
    };

    return (
      <Card title="Movie Catalogue">
        <FlatList
          data={this.state.movies}
          renderItem={renderMovie}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    );
  }
}

export default HomeScreen;
import React, { Component } from "react";
import {
    ScrollView,
    FlatList,
    ActivityIndicator,
    View,
    Alert
} from "react-native";
import ActionSheet from "react-native-actionsheet";
//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import { Query, Mutation } from "react-apollo";
//import gql from graphql-tag for making queries to our graphql server.
import gql from "graphql-tag";

//import { Container, PlaceholdeWrapper, HeaderText } from "./styled";
//import { Button, NoteCard, TextPlaceHolder } from "../components";

//Define your query variable which is the query responsible for retrieving data
//This will query all notes
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: null
        };
    }

    _addNewNote = () => {
        const { navigation } = this.props;
        navigation.navigate("NewClient", {});
    };

    _renderItem({ item }) {
        //Return the UI
        // It will return a list of all notes
        return (
            <NoteCard
                noteText={item.text}
                onOptions={() => this._showEditDeleteOptions(item.id)}
            />
        );
    }

    _showEditDeleteOptions = async noteId => {
        await this.setState({ noteId });
        this.deleteActionSheet.show();
    };

    _deletePostPrompt = noteId => {
        Alert.alert("Delete Note ?", null, [
            {
                text: "Delete",
                onPress: () => {
                    this._deleteNote({ noteId });
                }
            },
            {
                text: "Cancel",
                style: "cancel"
            }
        ]);
    };

    _deleteNote = noteId => {
        <Mutation
            mutation={DELETE_NOTE}
            update={store => {
                const storeNotes = store.readQuery({ query: GET_NOTES });
                const data = storeNotes.notes.filter(note => note.id !== noteId);
                store.writeQuery({
                    query: GET_NOTES,
                    data: { notes: [...data] }
                });
            }}
        >
        </Mutation>;
    };

   //render here
  
  export default HomeScreen;
}

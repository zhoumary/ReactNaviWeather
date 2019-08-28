import React, { Component } from "react";
import { Image, StyleSheet, ImageBackground, Modal, View, TouchableHighlight } from "react-native";
// import Modal from "react-native-modal";
import { Root, Container, Card, CardItem, Text, Content, Header, Footer, Left, Right, Body, Button, Icon, Title, List, ListItem } from "native-base";


export default class Locations extends Component {
    render() {
        return (
            <Container style={{ flexDirection: 'cloumn' }}>
                <Content>
                    <List>
                        <ListItem style={{
                            marginLeft: 5, borderColor: 'transparent', paddingTop: 10, paddingBottom: 10, paddingRight: 10
                        }}>
                            <Text style={{ fontFamily: 'Chalkduster', fontSize: 15, fontWeight: 'bold', color: 'black' }}>Wuhou</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>

        );
    }
}

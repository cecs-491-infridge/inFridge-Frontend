import React from 'react';
import { View } from 'react-native';
import { Body, Button, Card, Container, Header, Icon, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base'


export default class InstructionTab extends React.Component {


    render() {
        return (
            <Content>


                {
                    !this.props.instructionList &&
                    <Text>Sorry no instructions~~</Text>
                }
                {
                    !!this.props.instructionList &&
                    this.props.instructionList.map(
                        instruction => (
                            <ListItem title="Instruction">
                                
                                <Body>
                                    <Text>{instruction.number}{"."}{instruction.step}</Text>
                                </Body>

                            </ListItem>
                        )
                    )
                }
            </Content>
        );
    }
}

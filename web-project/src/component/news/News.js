import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Divider, Dropdown, Grid, Menu} from "semantic-ui-react";
import './News.css'

class App extends Component {
    state = {activeItem: 'buy',};
    stateOptions = [{key: 'FB', value: 'FB', text: 'Football'}, {key: 'BB', value: 'BB', text: 'Basketball'}];

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div id="App">
                <Menu fluid widths={2} inverted>
                    <Menu.Item name='buy' active={activeItem === 'buy'} onClick={this.handleItemClick}/>
                    <Menu.Item name='sell' active={activeItem === 'sell'} onClick={this.handleItemClick}/>
                </Menu>

                <Container textAlign='center'>
                    <Dropdown placeholder='State' search selection options={this.stateOptions} defaultValue='FB' inverted/>
                </Container>

                <Divider hidden/>
                <Divider horizontal>
                    News
                </Divider>
                <Container fluid textAlign='justified'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem ipsam neque
                    perferendis perspiciatis possimus sapiente sed, sit ut vitae. Animi atque, dolorem ea
                    explicabo fuga ipsam molestiae non saepe.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad exercitationem ipsam neque perferendis perspiciatis possimus
                    sapiente sed, sit ut vitae. Animi atque, dolorem ea explicabo fuga ipsam molestiae non
                    saepe.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem ipsam
                    neque perferendis perspiciatis possimus sapiente sed, sit ut vitae. Animi atque, dolorem
                    ea explicabo fuga ipsam molestiae non saepe.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad exercitationem ipsam neque perferendis perspiciatis possimus
                    sapiente sed, sit ut vitae. Animi atque, dolorem ea explicabo fuga ipsam molestiae non
                    saepe.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem ipsam
                    neque perferendis perspiciatis possimus sapiente sed, sit ut vitae. Animi atque, dolorem
                    ea explicabo fuga ipsam molestiae non saepe.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad exercitationem ipsam neque perferendis perspiciatis possimus
                    sapiente sed, sit ut vitae. Animi atque, dolorem ea explicabo fuga ipsam molestiae non
                    saepe.
                </Container>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './MenuBar.css';
import _ from 'lodash'
import {Menu, Segment, Search, Grid, Icon, Dropdown, Transition} from 'semantic-ui-react'
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';


export class MenuBar extends React.Component {
    state = {
        activeItem: 'home',

    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Segment inverted>
                    <Menu inverted pointing secondary>
                        <Menu.Item name="Sport" id={'site-name'}/>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                        <Menu.Item
                            name='messages'
                            active={activeItem === 'messages'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item id={'search-bar'} position='left'>
                            <SearchExampleStandard/>
                        </Menu.Item>
                        <Menu.Item id={'profile-icon'} /*position='left'*/>
                            <ProfileIcon/>
                        </Menu.Item>

                    </Menu>
                </Segment>
            </DirectionProvider>
        )
    }
}

const source = [];


export class SearchExampleStandard extends React.Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''});

    handleResultSelect = (e, {result}) => this.setState({value: result.title});

    handleSearchChange = (e, {value}) => {
        this.setState({isLoading: true, value});

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    };

    render() {
        const {isLoading, value, results} = this.state

        return (
            <Grid>
                <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
                    results={results}
                    value={value}
                    {...this.props}
                />
            </Grid>
        )
    }
}

export class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'grey',
            dropdown: false,
        }
    }

    mouseEnter = () => {
        if (!this.state.dropdown)
            this.setState({color: 'teal'})

    };

    mouseLeave = () => {
        if (!this.state.dropdown)
            this.setState({color: 'grey'})
    };

    dropdown = () => {
        this.setState({dropdown: !this.state.dropdown});
        if (this.state.dropdown)
            this.setState({color: 'grey'});
        else
            this.setState({color: 'teal'})



    };


    render() {
        const {dropdown} = this.state;
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Dropdown inverted icon={<Icon circular inverted size='large' name='user' color={this.state.color}
                                               onClick={this.dropdown} onMouseEnter={this.mouseEnter}
                                               onMouseLeave={this.mouseLeave}/>}>
                    <Transition visible={dropdown} animation='slide down' duration={250}>
                        <Dropdown.Menu inverted className={'profile-dropdown'}>
                            <Dropdown.Item content='Username' lowercase={true}/>
                            <Dropdown.Divider/>
                            <Dropdown.Item text='Profile'/>
                            <Dropdown.Item text='Logout'/>
                        </Dropdown.Menu>
                    </Transition>
                </Dropdown>
            </DirectionProvider>)
    }

}


export class TransitionTest extends React.Component {

    /*

        render() {
            return (   );
        }
    */

}


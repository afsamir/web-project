import React from 'react';
import './MenuBar.css';
import _ from 'lodash'
import {Menu, Segment, Grid, Icon, Dropdown, Transition, Search, Responsive} from 'semantic-ui-react'
import DirectionProvider, {DIRECTIONS} from 'react-with-direction/dist/DirectionProvider';
import Auth from "../../utils/Auth";
import FrontUrls from "../../utils/FrontUrls";


export class MenuBar extends React.Component {
    state = {
        activeItem: 'home',
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <div className={MenuBar} id="MenuBar">
                    <Segment inverted attached={'bottom'} style={{marginBottom: '10px'}}>
                        <Responsive minWidth={768}>
                            <Menu inverted pointing secondary className={'menu-bar'}>
                                <Menu.Item name="<ورزش>" id={'site-name'}/>
                                <a href={FrontUrls.base}>

                                    <Menu.Item name='خانه' active={activeItem === 'خانه'}
                                               onClick={this.handleItemClick}/>
                                </a>

                                <Menu.Item
                                    name='لیگ ها'
                                    active={activeItem === 'لیگ ها'}
                                    onClick={this.handleItemClick}

                                />
                                <Menu.Item
                                    name='ویدیو ها'
                                    active={activeItem === 'ویدیو ها'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item id={'search-bar'} position='left'>

                                    <SearchExampleStandard/>
                                </Menu.Item>

                                <Menu.Item id='profile-icon'>
                                    <ProfileIcon/>
                                </Menu.Item>

                                <Menu.Item id='search-icon'>
                                </Menu.Item>

                            </Menu>
                        </Responsive>
                        <Responsive maxWidth={767} minWidth={540}>

                            <Menu inverted pointing secondary className={'menu-bar'}>
                                <Menu.Item name="Sport" id={'site-name'}/>
                                <a href={FrontUrls.base}>

                                    <Menu.Item name='خانه' active={activeItem === 'خانه'}
                                               onClick={this.handleItemClick}/>
                                </a>
                                <Menu.Item
                                    name='لیگ ها'
                                    active={activeItem === 'لیگ ها'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='ویدیو ها'
                                    active={activeItem === 'ویدیو ها'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item id={'search-icon'}>
                                    <SearchIcon/>
                                </Menu.Item>

                                <Menu.Item id='profile-icon' position='left'>
                                    <ProfileIcon/>
                                </Menu.Item>

                                <Menu.Item id='search-icon'>


                                </Menu.Item>

                            </Menu>
                        </Responsive>
                        <Responsive maxWidth={540}>

                            <Menu inverted pointing secondary className={'menu-bar'}>
                                <a href={FrontUrls.base}>

                                    <Menu.Item
                                        icon='home'
                                        active={activeItem === 'home'}
                                        onClick={this.handleItemClick}/>
                                </a>
                                <Menu.Item
                                    icon='trophy'
                                    active={activeItem === 'messages'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    icon='video'
                                    active={activeItem === 'friends'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item id='search-icon'>
                                    <SearchIcon/>
                                </Menu.Item>

                                <Menu.Item id='profile-icon' position='left'>
                                    <ProfileIcon/>
                                </Menu.Item>


                            </Menu>
                        </Responsive>

                    </Segment>
                </div>
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
        const {isLoading, value, results} = this.state;

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
            color: 'black',
            dropdown: false,
        }
    }

    mouseEnter = () => {
        if (!this.state.dropdown)
            this.setState({color: 'teal'})

    };

    mouseLeave = () => {
        if (!this.state.dropdown)
            this.setState({color: 'black'})
    };

    dropdown = () => {

        this.setState({dropdown: !this.state.dropdown});
        if (this.state.dropdown)
            this.setState({color: 'black'});
        else
            this.setState({color: 'teal'})


    };


    render() {
        const {dropdown} = this.state;
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Dropdown inverted icon={<Icon circular inverted name='user' color={this.state.color}
                                               onClick={this.dropdown} onMouseEnter={this.mouseEnter}
                                               onMouseLeave={this.mouseLeave}/>}>
                    <Transition visible={dropdown} animation='slide down' duration={250}>
                        <Dropdown.Menu inverted className={'profile-dropdown'}>
                            <Dropdown.Item content='نام کابری' lowercase={true}/>
                            <Dropdown.Divider/>
                            <Dropdown.Item text='نمایه'/>
                            <Dropdown.Item text='خروج'/>
                        </Dropdown.Menu>
                    </Transition>
                </Dropdown>
            </DirectionProvider>)
    }

}

export class SearchIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            dropdown: false,
        }
    }

    mouseEnter = () => {
        if (!this.state.dropdown)
            this.setState({color: 'teal'})

    };

    mouseLeave = () => {
        if (!this.state.dropdown)
            this.setState({color: 'black'})
    };

    dropdown = () => {
        this.setState({dropdown: !this.state.dropdown});
        if (this.state.dropdown)
            this.setState({color: 'black'});
        else
            this.setState({color: 'teal'})


    };


    render() {
        const {dropdown} = this.state;
        return (
            <DirectionProvider direction={DIRECTIONS.RTL}>
                <Dropdown inverted icon={<Icon circular inverted name='search' color={this.state.color}
                                               onClick={this.dropdown} onMouseEnter={this.mouseEnter}
                                               onMouseLeave={this.mouseLeave}/>}>
                    <Transition visible={dropdown} animation='slide down' duration={250}>
                        <Dropdown.Menu inverted className={'search-dropdown'}>
                            <SearchExampleStandard/>
                        </Dropdown.Menu>
                    </Transition>
                </Dropdown>
            </DirectionProvider>)
    }

}



import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NavBar from './NavbarComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Award from './AwardComponent';
import Footer from './FooterComponent';
import ScrollToTop from './ScrollToTop';
import { fetchMenu } from '../redux/actions/ActionCreaters';
import { connect } from 'react-redux';
import SpecificMenu from './SpecificMenu';
import axios from 'axios';

const mapStateToprops = state => {
    return {
        menu: state.Menu
    };
}

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => {dispatch(fetchMenu())}
})

class Main extends Component {

    componentDidMount () {
        console.log(this.props);
        this.props.fetchMenu();
    }

    render() {

        const MenuPage = () => {
            return (
                <Menu 
                    menu = {this.props.menu}
                />
            );
        };

        class SpecificMenuPage extends Component {
            state = {
                menuItems: [],
                category: '',
                menu_name: '',
                special_instructions: ''
            }
            componentDidMount() {
                const category = this.props.match.params.specific_menu;
                axios.get(`http://davids-restaurant.herokuapp.com/menu_items.json?category=${category}`)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            menuItems: res.data.menu_items,
                            category,
                            menu_name: res.data.category.name,
                            special_instructions: res.data.category.special_instructions
                        })
                    })
            }
            render() {
                return (
                    <SpecificMenu 
                        category = {this.state.category} 
                        menuItems = {this.state.menuItems} 
                        menu_name = {this.state.menu_name} 
                        special_instructions = {this.state.special_instructions}
                    />
                );
            }
        }

        return (
            <BrowserRouter>
                <NavBar/>
                <ScrollToTop/>
                <Switch>
                    <Route path = "/home" component = {Home} />
                    <Route exact path = "/menu" component = {MenuPage} />
                    <Route path = "/menu/:specific_menu" component = {SpecificMenuPage} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/awards" component = {Award} />
                    <Redirect to = "/home"/>
                </Switch>
                <Footer/>
            </BrowserRouter>

        );
    }
};

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Main));
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
import { fetchMenu, fetchMenuItems } from '../redux/actions/ActionCreaters';
import { connect } from 'react-redux';
import SpecificMenu from './SpecificMenu';

const mapStateToprops = state => {
    return {
        menu: state.Menu,
        menuItems: state.MenuItems
    };
}

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => {dispatch(fetchMenu())},
    fetchMenuItems: (category) => {dispatch(fetchMenuItems(category))}
})

class Main extends Component {

    componentDidMount () {
        console.log(this.props);
        this.props.fetchMenu();
        this.props.fetchMenuItems('SP');
    }

    render() {

        const MenuPage = () => {
            return (
                <Menu 
                    menu = {this.props.menu}
                />
            );
        };

        const SpecificMenuPage = ({match}) => {
                return (
                    <SpecificMenu menuItems = {this.props.menuItems} category = {match.params.specific_menu} />
                    );
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
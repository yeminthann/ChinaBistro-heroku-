import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardGroup } from 'reactstrap'
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { Component } from 'react';

function RenderSpecificMenu({item, category}) {
    return(
        <CardGroup className = "m-2">
        <Card>
            <CardImg src = {`/assets/images/menu/${category}/${item.short_name}.jpg`} alt = {item.short_name} width = "100%" height = "100%"/>
            <CardImgOverlay className = "item-name p-0 m-0 text-white text-center text-uppercase">
                <div className="bg-dark p-3 p-sm-1 menu_name">{item.short_name}</div>
            </CardImgOverlay>
            <CardImgOverlay className ="item-details p-0 m-0 text-white text-center">
                <div className="bg-dark p-3 p-sm-1 menu_name">
                    <h5>{item.name}</h5>
                    <p>${item.price_large} <small>large</small> ${item.price_small} <small>pint</small></p>
                    <i>{item.description}</i>
                </div>
            </CardImgOverlay>
        </Card>
        </CardGroup>
    );
}

class SpecificMenu extends Component {
    render() {
        const menuItems = this.props.menuItems;
        const category = this.props.category;
        const menu_name = this.props.menu_name;
        const special_instructions = this.props.special_instructions;
        console.log(menu_name)
        if(menuItems.length) {
            const menuList = menuItems.map(item => {
                return (
                    <div className = "col-12 col-md-5 m-1 mr-2" key = {item.id}>
                        <FadeTransform
                            in transformProps = {{exitTransform: 'scale(1) TranslateY(-100%)'}}
                        >
                        <div className = "mr-5 ml-5 mb-4 m-md-3">
                            <RenderSpecificMenu 
                                item = {item}
                                category = {category}
                            />
                        </div>
                        </FadeTransform>
                    </div>
                );
            });
            return (
                <div className = "container">
                    <Breadcrumb className = "font-weight-bold sticky-top">
                        <BreadcrumbItem>
                            <Link to = "/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to = "/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className = "text-capitalize">
                            {menu_name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "row">
                        <div className = "col-12 text-center mb-5">
                            <h3 className = "text-uppercase">{menu_name} MENU</h3> <hr className = "bg-warning"/>
                            <h4 className = "text-warning">{special_instructions}</h4>
                        </div>
                    </div>
                    <div className = "row">
                            {menuList}
                    </div>
                </div>
            );
        }
        else {
            return (
                <Loading/>
            );
        }
    }
}
        

export default SpecificMenu;
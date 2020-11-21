import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardGroup, CardImg, CardImgOverlay } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item}) {
    return (
        <FadeTransform
        in transformProps = {{exitTransform: 'scale(1) TranslateY(-100%)'}}
        >
            <div className = "mr-sm-2 ml-sm-2 mr-5 ml-5">
            <Link to = {`/menu/${item.short_name}`} className = "card-link">
                <CardGroup className = "m-2">
                <Card>
                    <CardImg src = {`/assets/images/menu/${item.short_name}/${item.short_name}.jpg`} alt = {item.name} width = "100%" />
                    <CardImgOverlay className = "p-0 m-0 text-white text-center text-uppercase">
                        <div className="bg-dark p-3 p-sm-1 menu_name">{item.name}</div>
                    </CardImgOverlay>
                </Card>
                </CardGroup>
            </Link>
            </div>
        </FadeTransform>
    );
}
export const category = () => {
    console.log(this.props)
}
const Menu = ({menu}) => {
    // console.log(menu);
    var category = menu.menu.map(item => item.short_name);
    console.log(category);
    if(menu.isLoading) {
        return(
            <Loading />
        );
    }
    if (menu.errMsg) {
        return (
            <h4>{menu.errMsg}</h4>
        );
    }

    else {
        const menuList = menu.menu.map(item => {
            return(
                <div className="col-12 col-sm-4 col-md-3" key = {item.id}>
                    <RenderCard item = {item} />
                </div>
            );
        })
        return (
            <div className = "container">
                <Breadcrumb className = "font-weight-bold sticky-top">
                    <BreadcrumbItem>
                        <Link to = "/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className = "row">
                    <h2 className = "col-12 text-center fon-weight-bold p-3">MENU CATEGORIES <hr className = "bg-warning" /></h2>

                    <div className="row mb-5">
                        {menuList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
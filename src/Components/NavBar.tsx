import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.nav`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    background-color: black;
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    transition: border-bottom 0.5s ease-in-out;
`;
const Nav = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


 function NavBar(){
     return(
        <Header>
            <List>
                <Item>
                    <Nav to="/">Movies</Nav>
                </Item >
                <Item>
                    <Nav to="/tv">TV</Nav>
                </Item>
                <Item>
                    <Nav to="/search">Search</Nav>
                </Item>
            </List>
        </Header>
     )
 }

 export default NavBar;
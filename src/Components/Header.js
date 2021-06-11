import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header``;
const List = styled.ul`
    display: flex;
`;
const Item = styled.li``;
const Nav = styled(Link)``;


export default () => (
    <Header>
        <List>
            <Item>
                <Nav to="/">Movies</Nav>
            </Item>
            <Item>
                <Nav to="/tv">TV</Nav>
            </Item>
            <Item>
                <Nav to="/search">Search</Nav>
            </Item>
        </List>
    </Header>
)
import styled from 'styled-components';

export const MenuBar = styled.ul `
    list-style: none; 
    display: flex; 
    margin-top: 6px;
    width: 85%;
    padding: 0;
    overflow: hidden;
    height: 40px;
    font-size: 1.15em;
    color: rgb(102, 102, 102);
    width:80%;    
`

export const MenuItem = styled.li `
    flex: 3;
    :hover {
        color: rgb(0, 120, 212);
    }
    a {
        display: block;
        text-align: center;
        padding: 5px 16px;
        text-decoration: none;
        color: rgb(102, 102, 102);        
    }
`
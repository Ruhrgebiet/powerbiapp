import React from 'react';

//export default (props) => <li>{props.title}</li>;

export default function ListItem(props) {
    console.log(props);
    return <li onClick={() => props.onItemClicked && props.onItemClicked(props.index)}><a href="#">{props.title}</a></li>
}
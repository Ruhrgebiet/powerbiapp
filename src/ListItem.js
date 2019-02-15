import React from 'react';

//export default (props) => <li>{props.title}</li>;

export default function ListItem(props) {
    return <li><a href={props.links}>{props.title}</a></li>
}
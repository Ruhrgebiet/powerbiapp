import React from 'react';
import ListItem from './ListItem';



export default class List extends React.Component{
    render(){
        return(
            <div>
            <h1>DashboardList</h1>
                <ul>
                    {
                        this.props.items.map((item, index)=> {
                            return <ListItem key={item.title} title ={item.title} 
                                             link ={item.link}
                                             index={index}
                                             onItemClicked={(idx) => this.props.onItemClicked && this.props.onItemClicked(idx)}
                                    />
                        })
                    }
                </ul>
            </div>
        );
        
    }
}
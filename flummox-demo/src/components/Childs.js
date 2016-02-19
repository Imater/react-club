import React, { Component } from 'react';

export default class Childs extends Component {

    render() {
        const { trees } = this.props;

        if(trees.length === 0) return( <div></div> );
       
        return(
            <ul>
                { 
                    trees.map((item, key) => {
                        return (
                            <li key={key}>
                                {item.title}
                                <Childs trees={item.childs} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

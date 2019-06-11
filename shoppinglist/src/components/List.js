import React from "react";

const List = props => {
    return(
        <div className="list-items">
            {props.listItem.item}
        </div>
    );
}
export default List;
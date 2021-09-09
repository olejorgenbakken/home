import { Component } from "react";

interface Props {
    tag: string
}

class TagItem extends Component<Props> {
    render() {
        return (
            <label>{this.props.tag}</label>
        )
    }
}

export default TagItem;

import { Component } from "react";
import Grid from "../../../grid/grid";

interface Props {
    tags: Array<string>
}

class TagList extends Component<Props> {
    render() {
        const tags = this.props.tags.map((tag) => (
            <label className="tag" key={tag}>{tag}</label>
        ));

        return (<Grid elements={tags} styling={{ width: "contained", align: "center" }} />)
    }
}


export default TagList;

import Grid from "../../layout/grid/grid";

interface Props {
    tags: Array<string>
}

const setList = (list: Array<string>) => {
    const tagList = list.map((element) => (
        <label className="tag" key={element}>{element}</label>
    ));

    return tagList;
}

function TagList({ tags }: Props) {
    return (<Grid elements={setList(tags)} styling={{ width: "contained", align: "center" }} />)
}


export default TagList;

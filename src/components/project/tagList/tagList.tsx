import Grid from "../../layout/grid/grid";

interface Props {
    tags: string[]
}

const setList = (list: string[]) => {
    const tagList = list.map((element) => (
        <label className="tag" key={element}>{element}</label>
    ));

    return tagList;
}

function TagList({ tags }: Props) {
    return (
        <Grid width="contained" align="center">
            {setList(tags)}
        </Grid>
    )
}


export default TagList;

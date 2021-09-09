import { Component } from "react";

interface Props {
    headerPadding?: boolean
}

class Main extends Component<Props> {
    setStyling() {
        if (this.props.headerPadding) {
            let style = {
                paddingTop: `var(--header-height)`
            };

            return style;
        }
    }

    render() {
        return (<main style={this.setStyling()}></main>)
    }
}

export default Main;
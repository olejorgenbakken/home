import './pie.css';

interface Props {
    amount: number,
}

function setAmount(amount: number) {
    let style = {
        background: `conic-gradient(var(--text) 0 ${amount / 100 * 365}deg, var(--background) 0)`,
    }

    return style;
}

function Pie({ amount }: Props) {
    return (
        <figure className="chart flex-column" style={setAmount(amount)}>
            <figcaption>{amount.toFixed(0)}%</figcaption>
        </figure>
    )
}

export default Pie;
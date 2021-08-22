import { Component } from "react";
import "./entryItem.css";


interface Props {
  place: string,
  title: string,
  time: {
    start: number,
    end: number
  },
  description: string
}

class EntryItem extends Component<Props> {

  getMonth(monthNum: number) {
    let monthName: string

    switch (monthNum) {
      case 1:
        monthName = 'januar';
        return monthName;
      case 2:
        monthName = 'februar';
        return monthName;
      case 3:
        monthName = 'mars'
        return monthName;
      case 4:
        monthName = 'april'
        return monthName;
      case 5:
        monthName = 'mai'
        return monthName;
      case 6:
        monthName = 'juni'
        return monthName;
      case 7:
        monthName = 'juli';
        return monthName;
      case 8:
        monthName = 'august';
        return monthName;
      case 9:
        monthName = 'september'
        return monthName;
      case 10:
        monthName = 'oktober'
        return monthName;
      case 11:
        monthName = 'november'
        return monthName;
      case 12:
        monthName = 'desember'
        return monthName;

      default:
        break;

    }
  }

  toDate() {
    let start = new Date(this.props.time.start - 1);
    let end = new Date(this.props.time.end - 1);

    let startYYYYMM = `${start.getFullYear()}-${start.getMonth()}`;
    let startText = `${this.getMonth(start.getMonth())} ${start.getFullYear()}`;

    let endYYYYMM = `${end.getFullYear()}-${end.getMonth()}`;
    let endText = `${this.getMonth(end.getMonth())} ${end.getFullYear()}`;

    return ({ startYYYYMM, startText, endYYYYMM, endText })
  }

  render() {
    return (
      <article className="cv-entry" >
        <header>
          <h3>{this.props.place}</h3>
          <h4>{this.props.title}</h4>
          <p className="date">
            <time dateTime={this.toDate().startYYYYMM}>{this.toDate().startText}</time>
            &nbsp;til&nbsp;
            <time dateTime={this.toDate().endYYYYMM}>{this.toDate().endText}</time>
          </p>
        </header>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default EntryItem;

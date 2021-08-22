import { Component } from "react";
import "./entryItem.css";


interface Props {
  logo?: string,
  place: string,
  title: string,
  time: {
    start: number,
    end: number
  },
  description: string
}

class EntryItem extends Component<Props> {

  getNorMonth(monthNum: number) {
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
    let startText = `${this.getNorMonth(start.getMonth())} ${start.getFullYear()}`;

    let endYYYYMM = `${end.getFullYear()}-${end.getMonth()}`;
    let endText = `${this.getNorMonth(end.getMonth())} ${end.getFullYear()}`;

    return ({ startYYYYMM, startText, endYYYYMM, endText })
  }

  render() {
    console.log(this.props.logo)

    if (this.props.logo == '' || this.props.logo == undefined) {
      return (
        <article className="cv-entry" >
          <section className="content">
            <header>
              <h3 className="place">{this.props.place}</h3>
              <h4 className="title">{this.props.title}</h4>
              <p className="date">
                <time dateTime={this.toDate().startYYYYMM}>{this.toDate().startText}</time>
                &nbsp;–&nbsp;
                <time dateTime={this.toDate().endYYYYMM}>{this.toDate().endText}</time>
              </p>
            </header>
            <p>{this.props.description}</p>
          </section>
        </article>
      );
    } else {
      return (
        <article className="cv-entry" >
          <img src={this.props.logo} alt={`${this.props.place} logo`} />

          <section className="content">
            <header>
              <h3 className="place">{this.props.place}</h3>
              <h4 className="title">{this.props.title}</h4>
              <p className="date">
                <time dateTime={this.toDate().startYYYYMM}>{this.toDate().startText}</time>
                &nbsp;–&nbsp;
                <time dateTime={this.toDate().endYYYYMM}>{this.toDate().endText}</time>
              </p>
            </header>
            <p>{this.props.description}</p>
          </section>
        </article >
      );
    }

  }
}

export default EntryItem;

import "./entryList.css";
import EntryItem from "./entryItem/entryItem";
import { Component } from "react";

interface Props {
  title: string
  data: Array<{
    id?: number,
    place: string,
    title: string,
    time: {
      start: number,
      end: number,
    },
    description: string
  }>
}

class EntryList extends Component<Props> {

  getList() {
    const entryList = this.props.data.map((entry) => (
      <EntryItem place={entry.place} title={entry.title} time={entry.time} description={entry.description} />
    ));

    return (entryList)
  }

  render() {
    return (
      <section id={"cv-" + this.props.title} className="cv-section" >
        <header>
          <h2>{this.props.title}</h2>
        </header>
        <section className="cv-section-items">{this.getList()}</section>
      </section >
    );
  }

}

export default EntryList;

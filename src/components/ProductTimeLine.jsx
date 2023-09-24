import { Timeline } from "antd";
import { TimelineList } from "../utils";
import { v4 } from "uuid";

export default function ProductTimeLine() {
  function CreateChaild(status, date) {
    return (
      <div className="statusInfo">
        <p className="detailsTitle">{status}</p>
        <p className="dateText">{date}</p>
      </div>
    );
  }
  function CreateContent(content) {
    return (
      <div className="contentInfo">
        <p>{content}</p>
      </div>
    );
  }
  function renderChildren(aray) {
    return aray.map((el) => ({
      key: v4(),
      label: CreateChaild(el.orderStatus, el.date),
      color: el.color,
      children: CreateContent(el.contrnt),
    }));
  }

  return (
    <div>
      <Timeline
        mode="left"
        items={renderChildren(TimelineList)}
        style={{ marginBottom: "1rem" }}
      />
    </div>
  );
}

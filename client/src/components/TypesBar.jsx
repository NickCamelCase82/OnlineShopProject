import React from "react";
import { observer } from "mobx-react-lite";
import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index";

const TypesBar = observer(() => {
  const { device } = useContext(Context);

  //console.log("======>", device._types);
  return (
    <ListGroup>
      {device._types.map((e) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={e.id === device._selectedType.id}
          onClick={() => device._selectedType(e)}
          key={e.id}
        >
          {e.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypesBar;

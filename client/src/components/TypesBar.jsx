import React from "react";
import { observer } from "mobx-react-lite";
import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index";

const TypesBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypesBar;

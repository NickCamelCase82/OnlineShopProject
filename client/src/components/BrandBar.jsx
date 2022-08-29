import React from "react";
import { observer } from "mobx-react-lite";
import { Row, Card } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device._brands.map((brand) => (
        <Card key={brand.id} className="p-3">
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;

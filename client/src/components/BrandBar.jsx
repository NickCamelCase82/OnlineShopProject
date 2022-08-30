import React from "react";
import { observer } from "mobx-react-lite";
import { Row, Card } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          className="p-3"
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;

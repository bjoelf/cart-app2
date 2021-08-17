import React from "react";

const Cart = (props) => {
  console.log("cart props: ", props);

  const rows = props.oList.map((item, index) => {
    //console.log("cart-item: ", item);
    //console.log("cart-item_quantity: ", item.quantity);
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  return (
    <div className="col-md-4 middle-bar">
      <h5>Dessa sorter har du i din godispåse</h5>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>I påsen</th>
            <th>Antal</th>
            <th>Kostnad</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <hr />

      <div >
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Totalt antal</th>
              <th>Totalt kostnad</th>
            </tr>
          </thead>
          <tbody>
            <td> {props.tItems} </td>
            <td>{props.tCost.toFixed(2)}</td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

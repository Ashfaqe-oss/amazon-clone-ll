import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal () {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  /* <strong>{` ${value}`}</strong> */
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={( value ) => (
          <>
            <p className="subtotal__amount">
              Subtotal ({basket.length} {basket?.length > 1 ? "items" : "item"}
              ):{" "}
              <strong>
                {`₹`}
                {value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal( basket )}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" "}
      />

      <button onClick={( e ) => history.push( "/payment" )}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;

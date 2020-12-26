import React from "react";
import "./PaymentSubtotal.css";
import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function PaymentSubtotal () {

  const [{ basket }] = useStateValue();
  return (
    <div className="paymentSubtotal">
      {/* price */}
      <CurrencyFormat
        renderText={( value ) => (
          <>
            <p className="paymentSubtotal__amount">
              Subtotal ({basket.length} {basket?.length > 1 ? "items" : "item"}
              ):{" "}
              <strong>
                {`₹`}
                {value}
              </strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal( basket )}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" "}
      />
    </div>
  );
}

export default PaymentSubtotal;

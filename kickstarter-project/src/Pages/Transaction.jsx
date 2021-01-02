import React from "react";

const Transaction = () => {
  return (
    <div
      style={{
        border: "1px solid gray",
        background: "Gainsboro",
        height: "500px",
        width: "50%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h3>Transaction Page</h3>
      <input type="number" placeholder="Card number" />
      <br />
      <br />
      <input type="text" placeholder="Card holder name" />
      <br />
      <br />
      <input type="number" placeholder="Expiration date" />
      <input type="number" placeholder="CVV" />
      <br />
      <br />
      <input type="number" placeholder="ZIP/POSTAL Code" />
      <br />
      <br />
      <button>SUBMIT</button>
      <br />
      <br />
      <div>
        Your payment information is processed through Stripe. To complete
        transactions, we store the card type, last four digits, expiration, and
        name on the card. By pledging you agree to Kickstarter's Terms of Use,
        Privacy Policy and Cookie Policy. Our policies explain how we will use
        and store your data, and how you can control that use. You can edit your
        settings here.
      </div>
    </div>
  );
};
export { Transaction };

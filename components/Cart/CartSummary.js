import { Button, Segment, Divider } from "semantic-ui-react";
import React from "react";
import calculateCartTotal from "../../utils/calculateCartTotal";
import StripeCheckout from "react-stripe-checkout";

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub total:</strong>$ {cartAmount}
        <StripeCheckout
          name="Shopping Zone"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ""}
          currency="USD"
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey="pk_test_51IzHm4SHDkSmgwAwUmnvxZ7vFZs05zFuV781mxjD38T58nIPMPEY14q67w6XBy6Z4p3gEm8KindqPxMHHTXmRS2300WdK16hEk"
          token={handleCheckout}
          triggerEvent="onClick"
        >
          <Button
            icon="cart"
            disabled={isCartEmpty || success}
            color="teal"
            floated="right"
            disabled={isCartEmpty}
            content="Checkout"
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;

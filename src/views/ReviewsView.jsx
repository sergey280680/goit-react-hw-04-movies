import { React, useEffect, useState } from "react";
import { Reviews } from "components/Reviews/Reviews";

export function ReviewsView({ reviews }) {
  const [state, setState] = useState(null);

  // console.log("reviews: ", reviews);

  useEffect(() => {
    if (state === null || reviews.length === 0) {
      setState("error");
    } else {
      setState("rejected");
    }
  }, [reviews]);

  return (
    <>
      <Reviews state={state} reviews={reviews} />
    </>
  );
}

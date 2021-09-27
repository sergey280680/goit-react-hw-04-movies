export function Reviews({ reviews, state }) {
  return (
    <>
      <h2>ReviewsView</h2>
      {state === "error" && (
        <>
          <h5>We don't have any reviews for this movies </h5>
        </>
      )}
      {state === "rejected" && (
        <>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

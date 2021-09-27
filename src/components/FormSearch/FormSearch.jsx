export function FormSearch({ movieQuery, handleSabmit, handleNameChange }) {
  return (
    <>
      <form onSubmit={handleSabmit}>
        <input
          type="text"
          autoComplete="off"
          value={movieQuery}
          onChange={handleNameChange}
          placeholder="Search movie"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}

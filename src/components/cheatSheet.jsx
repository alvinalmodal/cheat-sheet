const displayColumns = (cheatsheet) => {
  const columns = [];
  for (let key in cheatsheet.values[0]) {
    columns.push(<th>{key}</th>);
  }
  return columns;
};

const displayRows = (cheatsheet) => {
  const rows = [];
  return cheatsheet.values.map((value) => {
    return (
      <tr>
        <td>
          <span
            className={
              cheatsheet.highlightCode === true ? "code-highlight" : "code"
            }
          >
            {value.code}
          </span>
        </td>
        <td>{value.name}</td>
        <td>{value.description}</td>
      </tr>
    );
  });
};

const CheetSheet = ({ cheatsheet }) => {
  return (
    <article className="cheatsheet">
      <h3 id="cheatsheet-header">{cheatsheet.name}</h3>
      <table id="cheatsheet-table">
        <thead>
          <tr>{displayColumns(cheatsheet)}</tr>
        </thead>
        <tbody>{displayRows(cheatsheet)}</tbody>
      </table>
    </article>
  );
};

export default CheetSheet;

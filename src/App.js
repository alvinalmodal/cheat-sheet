import "./App.css";
import Header from "./components/header";
import CheatSheet from "./components/cheatSheet";

let cheatsheets = [
  {
    id: 1,
    name: "Table Tags",
    values: [
      {
        code: "<table>",
        name: "Table",
        description: "The wrapper element for all HTML tables.",
      },
      {
        code: "<thead>",
        name: "Table Head",
        description: "The set of rows defining the column headers in a table.",
      },
      {
        code: "<tbody>",
        name: "Table Body",
        description: "THe set of rows containing actual table data.",
      },
      {
        code: "<tr>",
        name: "Table Row",
        description: "The table row container.",
      },
      {
        code: "<td>",
        name: "Table Data",
        description: "The table row container.",
      },
      {
        code: "<tfoot>",
        name: "Table Foot",
        description: "The set of rows defning the footer in a table.",
      },
    ],
    highlightCode: true,
  },
  {
    id: 2,
    name: "Table attributes",
    values: [
      {
        code: "colspan",
        name: "Column Span",
        description: "Defines how many columns a td element should span.",
      },
      {
        code: "rowspan",
        name: "Row Span",
        description: "Defines how many rows a td element should span.",
      },
    ],
    highlightCode: true,
  },
];

const displayCheetSheets = () => {
  return cheatsheets.map((value) => {
    console.log(value);
    return <CheatSheet cheatsheet={value}></CheatSheet>;
  });
};

function App() {
  return (
    <section className="main-content">
      <Header></Header>
      {displayCheetSheets()}
    </section>
  );
}

export default App;

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styles from "../../../styles/issues/issues.module.scss";

const columns = [
  { id: "name", label: "User Name", minWidth: 170 },
  {
    id: "no",
    label: "Issue No",
    minWidth: 100
    // format: (value) => value.toFixed(2)
  },
  {
    id: "damage",
    label: "Damage Detail",
    minWidth: 170,
    align: "center"
    // format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "comments",
    label: "Seller Comments",
    minWidth: 170,
    align: "center"
    // format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center"
    // format: (value) => value.toFixed(2)
  }
];

function createData(name, no, damage, comments, status) {
  // const density = population / size;
  return { name, no, damage, comments, status };
}

const rows = [
  createData(
    "Abhijeet Singh Rathore",
    1,
    "Broken",
    "resolved in 24 hours have patience",
    "in progress"
  ),
  createData(
    "Sahil Sharma",
    2,
    "Broken",
    "resolved in 24 hours have patience",
    "in progress"
  ),
  createData(
    "Robin Chauhan",
    3,
    "Broken",
    "resolved in 24 hours have patience",
    "in progress"
  )
];

export default function IssuesTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={styles.issues_main_wrapper}>
      {/* <div className="row py-3">
        <div className="col-12">
          <p className={styles.issue_label}>Issues List</p>
        </div>
      </div> */}
      <div className="flex-grow-1">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={3}
                    className={styles.issue_title}
                  >
                    Buyer Response
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={2}
                    className={styles.issue_title}
                  >
                    Seller Response
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        </Paper>
      </div>
    </div>
  );
}

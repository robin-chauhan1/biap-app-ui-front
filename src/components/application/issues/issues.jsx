import { Fragment } from "react";
import IssuesTable from "./issuesTable";
import styles from "../../../styles/issues/issues.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import TablePagination from "@mui/material/TablePagination";

const Issues = () => {
  return (
    <Fragment>
      <div
        className={styles.playground_height}
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="accordion" id="ordersAccordion">
          <div className="container">
            <div className="row py-3">
              <div className="col-12">
                <p className={styles.issue_label}>Issues</p>
              </div>
            </div>

            <Accordion
            className={styles.accordian_label}
              sx={{
                color: "gray",
                boxShadow: "0 0 10px 0 rgb(96 97 97 / 15%)"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div
                    className={`d-flex align-items-center  ${styles.padding_20}`}
                  >
                    <div className="flex-grow-1 border-end px-4">
                      <p className={styles.issue_title}>Product Name</p>
                      <p
                        className={styles.address_type_label}
                        style={{ fontSize: "12px" }}
                      >
                        -NA-
                      </p>
                    </div>
                    <div className="flex-grow-1 border-end px-4 ">
                      <p className={styles.issue_title}>Seller Name</p>
                      <p
                        className={styles.address_type_label}
                        style={{ fontSize: "12px" }}
                      >
                        -NA-
                      </p>
                    </div>
                    <div className="flex-grow-1 border-end px-4 ">
                      <p className={styles.issue_title}>Status</p>
                      <p
                        className={styles.address_type_label}
                        style={{ fontSize: "12px" }}
                      >
                        NA
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <IssuesTable />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div
                    className={`d-flex align-items-center  ${styles.padding_20}`}
                  >
                    <div className="flex-grow-1 border-end px-4">
                      <p className={styles.issue_title}>Product Name</p>
                      <p
                        className={styles.address_type_label}
                        style={{ fontSize: "12px" }}
                      >
                        -NA-
                      </p>
                    </div>
                    <div className="flex-grow-1 border-end px-4 ">
                      <p className={styles.issue_title}>Seller Name</p>
                      <p
                        className={styles.address_type_label}
                        style={{ fontSize: "12px" }}
                      >
                        -NA-
                      </p>
                    </div>
                    <div className="flex-grow-1 border-end px-4 ">
                      <p className={styles.issue_title}>Status</p>
                      <p
                        className={styles.address_type_label}
                        style={{ fontSize: "12px" }}
                      >
                        NA
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <IssuesTable />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Issues;

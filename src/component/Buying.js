import { Link } from "react-router-dom";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Buying() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-4 offset-1">
          <li class="breadcrumb-item">
            <Link
              to="/HelpCenter"
              style={{ textDecoration: "none" }}
              className="text-dark"
            >
              Help Center
            </Link>
          </li>
          <li class="breadcrumb-item active text-primary" aria-current="page">
            Buying
          </li>
        </ol>
      </nav>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="offset-2"
      >
        <h4 className="font-22 font-weight-700" style={{ marginLeft: "3.6em" }}>
          Buying
        </h4>
        <div class="input-group mb-3 buying-search-btn">
          <input
            type="text"
            className="form-control border-input input-box-border"
            style={{ marginLeft: "1em", borderRight: "0" }}
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append w-25">
            <button
              className="btn btn-search-secondary border border-search"
              type="button"
              id="button-addon2"
              style={{ borderRadius: "0px 5px 5px 0px" }}
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-9  offset-2">
            <Accordion className="mt-3 shadow accordion-border p-3">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 shadow accordion-border p-3">
              <AccordionSummary
                expandIcon={<RemoveIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 shadow accordion-border p-3">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mt-4 shadow accordion-border p-3">
              <AccordionSummary
                expandIcon={<RemoveIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buying;

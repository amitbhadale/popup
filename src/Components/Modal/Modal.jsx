import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "./Modal.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="state-popup" data-state-popup="">
          <div className="state-popup__inner flex f-dir-column">
            <div className="state-popup__close" data-state-popup-close="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                onClick={handleClose}
              >
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M14.862.195a.667.667 0 0 1 1.013.86l-.07.083L8.943 8l6.862 6.862a.667.667 0 1 1-.943.943L8 8.943l-6.862 6.862a.667.667 0 0 1-.86.07l-.083-.07a.667.667 0 0 1-.07-.86l.07-.083L7.057 8 .195 1.138a.667.667 0 1 1 .943-.943L8 7.057z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <img
              src="https://cdn.shopify.com/s/files/1/0518/9563/2063/files/PopUp_HeroImage_BroncoRockyTerrain_D_1b289964-72b0-4fb9-86aa-9ffb43a85a29.jpg?v=1623408058"
              data-preload="loaded"
              alt="In Arizona, Oklahoma or Vermont?"
              className="above-tablet"
            />

            <img
              className="tablet-only"
              src="https://cdn.shopify.com/s/files/1/0518/9563/2063/files/PopUp_HeroImage_BroncoRockyTerrain_M.jpg?v=1623408046"
              data-preload="loaded"
              alt="In Arizona, Oklahoma or Vermont?"
            />

            <div className="state-popup__text-content text-align-center">
              <h3 className="title--xs m-b-s">
                In Arizona, Oklahoma or Vermont?
              </h3>
              <div className="rte sm">
                <p>
                  We do not currently service your area from this store. Please
                  select the brand you're looking to browse and we will redirect
                  you.
                </p>
              </div>
              <div className="state-popup__buttons">
                <a
                  href="https://parts.ford.com/shop/en/us/accessories"
                  className="btn btn--rounded btn--blue-hover"
                >
                  Ford Accessories
                </a>

                <a
                  href="https://parts.ford.com/shop/en/us/accessories"
                  className="btn btn--rounded btn--border"
                >
                  Lincoln Accessories
                </a>
              </div>
              <div className="state-popup__footnote rte">
                <p>
                  Not ordering to one of these states? Click{" "}
                  <span
                    data-state-popup-close=""
                    className="state-popup__text-close underline color-primary"
                  >
                    here
                  </span>{" "}
                  to continue shopping.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </BootstrapDialog>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MultiSelecter from "../../components/multiselecter";
import SelectItem from "../../components/selectitems";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  InputContainer,
  ButtonSection,
  TextSection,
  NewButtton,
  MultiContainer,
  SubInputContainer,
} from "../../styles/components/Ordermodal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "860px",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderStyle: "none",
  borderRadius: "24px",
};

const Ordermodal = () => {
  const [open, setOpen] = React.useState(false);
  const [subData, setSubData] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const category = ["ORDER", "ITEM", "FULFILLMENT", "AGENT", "PAYMENT"];
  const subCategory = [
    ["Order not received", "Quality issue", "Delayed delivery"],

    ["Missing items", "Quantity issue", "Item mismatch", "Quality issue"],

    [
      "Wrong delivery address",
      "Delay in delivery",
      "Delayed delivery",
      "Packaging",
      "Buyer not found",
      "Seller not found",
      "Package info mismatch",
    ],

    ["Agent behavioral issue", "Buyer behavioral issue"],

    ["Refund not received", "Underpaid", "Over paid", "Not paid"],
  ];

  const findSubCategory = (index) => {
    const data = subCategory[index];
    setSubData(data);
  };
  return (
    <div>
      <NewButtton onClick={handleOpen}>New Issues</NewButtton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextSection>Enter Your Issues</TextSection>
          <InputContainer>
            <div style={{ display: "flex", width: "315px" }}>
              Choose Items that had a problem
            </div>
            <MultiContainer>
              <MultiSelecter />
            </MultiContainer>
          </InputContainer>
          <InputContainer>
            <SubInputContainer>Category</SubInputContainer>
            <MultiContainer>
              <SelectItem onChange={(e) => findSubCategory(e.target.value)}>
                {category.map((ele, index) => (
                  <MenuItem key={index} value={index}>
                    {ele}
                  </MenuItem>
                ))}
              </SelectItem>
            </MultiContainer>
          </InputContainer>
          <InputContainer>
            <SubInputContainer>SubCategory</SubInputContainer>
            <MultiContainer>
              <SelectItem
                onChange={(e, index) => console.log("e", e.target.value, index)}
              >
                {subData.map((ele, index) => (
                  <MenuItem key={index} value={ele}>
                    {ele}
                  </MenuItem>
                ))}
              </SelectItem>
            </MultiContainer>
          </InputContainer>

          <InputContainer>
            <SubInputContainer>Add Image</SubInputContainer>
            <MultiContainer>
              <input type="file" />
            </MultiContainer>
          </InputContainer>
          <InputContainer>
            <SubInputContainer>Short Description</SubInputContainer>
            <MultiContainer>
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
              />
            </MultiContainer>
          </InputContainer>
          <InputContainer>
            <SubInputContainer>Long Description</SubInputContainer>
            <MultiContainer>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                style={{
                  width: "100%",
                  minHeight: "120px",
                  resize: " none",
                  placeholder: " describe Issue",
                }}
              />
            </MultiContainer>
          </InputContainer>
          <ButtonSection>
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{
                border: "1px solid #606161",
                borderRadius: "26px",
                color: " #606161",
                backgroundColor: " #ffffff",
                width: "100px",
              }}
            >
              Save
            </Button>
          </ButtonSection>
        </Box>
      </Modal>
    </div>
  );
};

export default Ordermodal;

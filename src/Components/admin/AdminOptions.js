import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

function AdminOptions({ onClick }) {
  return (
    <Container>
      <Button
        onClick={onClick}
        startIcon={
          <AddIcon
            sx={{
              color: "#007FFF",
              fontSize: "18px",
            }}
          />
        }
      >
        ADD INSTRUCTOR
      </Button>
    </Container>
  );
}

export default AdminOptions;

const Container = styled("div")`
  padding: 10px;
`;

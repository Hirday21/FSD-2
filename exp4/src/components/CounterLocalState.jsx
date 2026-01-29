import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function LocalStateCounter({ cno = "Local" }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <Container maxWidth="sm" sx={{ mb: 2 }}>
      <Box sx={{ bgcolor: "#cfe8fc", p: 2 }}>
        <h3>{cno} : Local State Count: {count}</h3>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={increaseCount}>
            Increase
          </Button>
          <Button variant="outlined" onClick={decreaseCount}>
            Decrease
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

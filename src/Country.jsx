import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";

const countries = ["India", "United States", "Canada", "Australia"];

const states = {
  India: ["Gujarat", "Maharashtra", "Tamilnadu", "Punjab"],
  "United States": ["New York", "California", "Texas", "Florida"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
  Australia: ["New South Wales", "Queensland", "Victoria", "Western Australia"],
};

function Country() {
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} style={{color: "white", backgroundColor: "#1d3557", borderRadius:"8px"}}>
            <List>
              {countries.map((country) => (
                <div key={country}>
                  <ListItem
                    button
                    onClick={() => handleCountryClick(country)}
                    selected={selectedCountry === country}
                  >
                    <ListItemText primary={country} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3}>
            <Box style={{backgroundColor: "#1d3557", color: "white", borderRadius: "8px"}} p={2}>
              <Typography variant="h5">Country: {selectedCountry}</Typography>
              <List>
                {states[selectedCountry].map((state) => (
                  <>
                    <ListItem className="item" key={state} >
                      <ListItemText primary={state} />
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Country;

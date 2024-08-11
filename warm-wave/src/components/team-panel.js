"use client";

import Spacer from "@/components/spacer";
import { Box, Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TeamPanel(props) {
  const [value, setValue] = useState(0);
  const team = props.team;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ padding: "2em", margin: "0 2em" }}>
      <Box sx={{ display: "flex" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", minWidth: "100px" }}
        >
          {team.map((teamMember, index) => (
            <Tab
              id={teamMember.name}
              key={index}
              label={teamMember.name}
              {...a11yProps(0)}
              sx={{ paddingRight: "2em" }}
            />
          ))}
        </Tabs>

        <Divider orientation="vertical" flexItem />
        {team.map((teamMember, index) => (
          <TabPanel key={teamMember.name} value={value} index={index}>
            <div id={teamMember.name} key={teamMember.name}>
              <Box sx={{ display: "flex", padding: "2em 0 2em 0" }}>
                <Image
                  src={teamMember.imgSrc}
                  width={600}
                  height={450}
                  alt={teamMember.alt}
                  priority
                />
                <Box sx={{ marginLeft: "2em" }}>
                  <Typography variant="h4" component="h4" fontWeight={400}>
                    {teamMember.name}
                  </Typography>

                  <Spacer height={10} />

                  <Typography variant="h5" component="h5">
                    {teamMember.title}
                  </Typography>

                  <Spacer height={35} />

                  <Typography variant="p" component="p">
                    {teamMember.description}
                  </Typography>
                </Box>
              </Box>
            </div>
          </TabPanel>
        ))}
      </Box>
    </Paper>
  );
}

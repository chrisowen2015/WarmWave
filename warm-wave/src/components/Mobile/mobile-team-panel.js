"use client";

import Spacer from "@/components/spacer";
import { Box, Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import MuiPortableText from "@/components/mui-portable-text";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div>{value === index && <Box sx={{ p: 1 }}>{children}</Box>}</div>;
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MobileTeamPanel(props) {
  const [value, setValue] = useState(0);
  const team = props.team;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ padding: "1em", margin: "0 1em" }}>
      <Box sx={{ display: "block" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {team
            .sort((a, b) => a.order - b.order)
            .map((teamMember, index) => (
              <Tab
                id={teamMember.name}
                key={index}
                label={teamMember.name}
                {...a11yProps(0)}
              />
            ))}
        </Tabs>

        <Divider />

        {team
          .sort((a, b) => a.order - b.order)
          .map((teamMember, index) => (
            <TabPanel key={teamMember.name} value={value} index={index}>
              <div id={teamMember.name}>
                <Box sx={{ display: "block", padding: "1em 0 1em 0" }}>
                  <Image
                    src={teamMember.image}
                    style={{ width: "100%", height: "auto" }}
                    width={600}
                    height={450}
                    alt={teamMember.name + " image"}
                  />
                  <Box sx={{}}>
                    <Spacer height={10} />

                    <Typography
                      color="primary"
                      variant="h4"
                      component="h4"
                      fontWeight={600}
                    >
                      {teamMember.name}
                    </Typography>

                    <Spacer height={10} />

                    <Typography variant="h5" component="h5" fontWeight={500}>
                      {teamMember.role}
                    </Typography>

                    <Spacer height={15} />

                    <MuiPortableText text={teamMember.text} />
                  </Box>
                </Box>
              </div>
            </TabPanel>
          ))}
      </Box>
    </Paper>
  );
}

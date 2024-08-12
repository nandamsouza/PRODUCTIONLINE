import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface tabProps {
  tabs: { title: string; children: React.ReactNode }[];
}

export default function DefaultTabs(props: tabProps) {
  const [value, setValue] = React.useState(props.tabs[0].title);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {props.tabs &&
              props.tabs.map((item, idx) => (
                <Tab label={item.title} value={item.title} key={idx} />
              ))}
          </TabList>
        </Box>
        {props.tabs &&
          props.tabs.map((item, idx) => (
            <TabPanel value={item.title} key={idx}>{item.children}</TabPanel>
          ))}
      </TabContext>
    </Box>
  );
}

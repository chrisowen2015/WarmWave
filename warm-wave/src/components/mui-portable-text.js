import React from "react";
import { PortableText } from "@portabletext/react";
import { Typography } from "@mui/material";

// Define custom block and mark components
const muiOverrideComponents = {
  block: {
    // Customize block styles like "normal", "h1", "h2"
    h1: ({ children }) => (
      <Typography variant="h1" component={"h1"}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" component={"h2"}>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" component={"h3"}>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" component={"h4"}>
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" component={"h5"}>
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" component={"h6"}>
        {children}
      </Typography>
    ),
    normal: ({ children }) => <Typography>{children}</Typography>,
  },
  marks: {
    // Customize the rendering of links or bold text
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },
};

const dramaticOverrideComponents = {
  block: {
    // Customize block styles like "normal", "h1", "h2"
    h1: ({ children }) => (
      <Typography variant="h1" component={"h1"}>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" component={"h2"}>
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" component={"h3"}>
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" component={"h4"}>
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" component={"h5"}>
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" component={"h6"}>
        {children}
      </Typography>
    ),
    // normal: ({ children }) => <Typography align="center" sx={{fontSize: 18, fontWeight: 500}}>{children}</Typography>,

    normal: ({ children }) => (
      <Typography
        align="center"
        sx={{
          fontSize: {
            xs: 16.5,
            md: 18,
          },
          fontWeight: 500,
        }}
      >
        {children}
      </Typography>
    ),
  },
  marks: {
    // Customize the rendering of links or bold text
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ value, children }) => (
      <a href={value.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },
};

// Define the component to render rich text with custom components
const MuiPortableText = ({ text, isBold }) => {
  return (
    <div>
      {/* Render the PortableText with the custom components */}

      {isBold ? (
        <PortableText value={text} components={dramaticOverrideComponents} />
      ) : (
        <PortableText value={text} components={muiOverrideComponents} />
      )}
    </div>
  );
};

// Export the component so it can be imported elsewhere
export default MuiPortableText;

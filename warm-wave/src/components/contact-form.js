"use client";

import {
  Box,
  Button,
  TextField,
  Paper,
  Grid,
  Tooltip,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Send from "@mui/icons-material/Send";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import Spacer from "./spacer";

const quoteConstants = [
  {
    subject: "Audio Recording Quote",
    urlParams: "audio-recording",
  },
  {
    subject: "Mixing & Mastering Lessons",
    urlParams: "mixing-mastering-lessons",
  },
  {
    subject: "Mixing & Mastering",
    urlParams: "mixing-mastering",
  },
  {
    subject: "Production Session Musicians",
    urlParams: "production-session-musicians",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });
  const [initialLoading, setInitialLoading] = useState(true);

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    emailAddress: false,
    subject: false,
    message: false,
  });

  const [validationMessages, setValidationMessages] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const searchParams = useSearchParams() || null;
  const quoteParam = searchParams ? searchParams.get("quote") : null;

  useEffect(() => {
    if (quoteParam && quoteParam.length > 0) {
      var subject;

      switch (quoteParam) {
        case quoteConstants[0].urlParams:
          subject = quoteConstants[0].subject;
          break;
        case quoteConstants[1].urlParams:
          subject = quoteConstants[1].subject;
          break;
        case quoteConstants[2].urlParams:
          subject = quoteConstants[2].subject;
          break;
        case quoteConstants[3].urlParams:
          subject = quoteConstants[3].subject;
          break;
      }
      setFormData({
        ...formData,
        subject: subject,
      });
      setInitialLoading(false);
    } else {
      setInitialLoading(false);
    }
  }, []);

  const validate = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "firstName":
        if (value.length == 0) {
          setValidationMessages({
            ...validationMessages,
            firstName: "First name is required.",
          });
          setFormErrors({ ...formErrors, firstName: true });
        } else {
          setValidationMessages({
            ...validationMessages,
            firstName: "",
          });
          setFormErrors({ ...formErrors, firstName: false });
        }
        break;
      case "lastName":
        if (value.length == 0) {
          setValidationMessages({
            ...validationMessages,
            lastName: "Last name is required.",
          });
          setFormErrors({ ...formErrors, lastName: true });
        } else {
          setValidationMessages({
            ...validationMessages,
            lastName: "",
          });
          setFormErrors({ ...formErrors, lastName: false });
        }
        break;
      case "emailAddress":
        if (value.length == 0) {
          setValidationMessages({
            ...validationMessages,
            emailAddress: "Email is required.",
          });
          setFormErrors({
            ...formErrors,
            emailAddress: true,
          });
        } else if (!value.includes("@")) {
          setValidationMessages({
            ...validationMessages,
            emailAddress: "Email is invalid.",
          });
          setFormErrors({
            ...formErrors,
            emailAddress: true,
          });
        } else {
          setValidationMessages({
            ...validationMessages,
            emailAddress: "",
          });
          setFormErrors({
            ...formErrors,
            emailAddress: false,
          });
        }
        break;
      case "subject":
        if (value.length == 0) {
          setValidationMessages({
            ...validationMessages,
            subject: "Subject is required.",
          });
          setFormErrors({
            ...formErrors,
            subject: true,
          });
        } else {
          setValidationMessages({
            ...validationMessages,
            subject: "",
          });
          setFormErrors({
            ...formErrors,
            subject: false,
          });
        }
        break;
      case "message":
        if (value.length == 0) {
          setValidationMessages({
            ...validationMessages,
            message: "Message is required.",
          });
          setFormErrors({
            ...formErrors,
            message: true,
          });
        } else {
          setValidationMessages({
            ...validationMessages,
            message: "",
          });
          setFormErrors({
            ...formErrors,
            message: false,
          });
        }
        break;
    }
  };

  const validateAll = () => {
    let valid = true;

    if (formData.firstName.length == 0) {
      setValidationMessages((prevState) => {
        return {
          ...prevState,
          firstName: "First name is required.",
        };
      });
      setFormErrors((prevState) => {
        return {
          ...prevState,
          firstName: true,
        };
      });
      valid = false;
    }

    if (formData.lastName.length == 0) {
      setValidationMessages((prevState) => {
        return {
          ...prevState,
          lastName: "Last name is required.",
        };
      });
      setFormErrors((prevState) => {
        return {
          ...prevState,
          lastName: true,
        };
      });
      valid = false;
    }

    if (formData.emailAddress.length == 0) {
      setValidationMessages((prevState) => {
        return {
          ...prevState,
          emailAddress: "Email is required.",
        };
      });
      setFormErrors((prevState) => {
        return {
          ...prevState,
          emailAddress: true,
        };
      });
      valid = false;
    } else if (!formData.emailAddress.includes("@")) {
      setValidationMessages((prevState) => {
        return {
          ...prevState,
          emailAddress: "Email is invalid.",
        };
      });
      setFormErrors((prevState) => {
        return {
          ...prevState,
          emailAddress: true,
        };
      });
      valid = false;
    }

    if (formData.subject.length == 0) {
      setValidationMessages((prevState) => {
        return {
          ...prevState,
          subject: "Subject is required.",
        };
      });
      setFormErrors((prevState) => {
        return {
          ...prevState,
          subject: true,
        };
      });
      valid = false;
    }

    if (formData.message.length == 0) {
      setValidationMessages((prevState) => {
        return {
          ...prevState,
          message: "Message is required.",
        };
      });
      setFormErrors((prevState) => {
        return {
          ...prevState,
          message: true,
        };
      });
      valid = false;
    }

    return valid;
  };

  async function handleSubmit(event) {
    const apiEndpoint = "/api/contact";

    if (!validateAll()) {
      return;
    } else {
      fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((response) => {
          if (!response.error) {
            setToast({
              message: "Message sent successfully!",
              severity: "success",
              open: true,
            });
            setFormData({
              firstName: "",
              lastName: "",
              emailAddress: "",
              subject: "",
              message: "",
            });
          } else {
            setToast({
              message: "Message failed to send. Please try again.",
              severity: "error",
              open: true,
            });
          }
        })
        .catch((err) => {
          setToast({
            message: "Message failed to send. Please try again.",
            severity: "error",
            open: true,
          });
        });
    }
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToast({
      ...toast,
      open: false,
    });
  };

  const handleCloseToast = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseToast}
          severity={toast.severity == "success" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
      {initialLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 510,
          }}
        >
          <CircularProgress size={75} />
        </Box>
      ) : (
        <Box>
          <Paper elevation={10} sx={{ p: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={formData.firstName}
                  onChange={onChange}
                  name="firstName"
                  variant="outlined"
                  error={formErrors.firstName}
                  helperText={validationMessages.firstName}
                  onBlur={validate}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={formData.lastName}
                  onChange={onChange}
                  name="lastName"
                  variant="outlined"
                  error={formErrors.lastName}
                  helperText={validationMessages.lastName}
                  onBlur={validate}
                />
              </Grid>
            </Grid>

            <div style={{ paddingTop: "1em" }}>
              <TextField
                label="Email Address"
                value={formData.emailAddress}
                onChange={onChange}
                name="emailAddress"
                fullWidth
                variant="outlined"
                error={formErrors.emailAddress}
                helperText={validationMessages.emailAddress}
                onBlur={validate}
              />
            </div>

            <div style={{ paddingTop: "1em" }}>
              <TextField
                label="Subject"
                value={formData.subject}
                onChange={onChange}
                name="subject"
                fullWidth
                variant="outlined"
                error={formErrors.subject}
                helperText={validationMessages.subject}
                onBlur={validate}
              />
            </div>

            <div style={{ paddingTop: "1em" }}>
              <TextField
                label="Message"
                value={formData.message}
                onChange={onChange}
                name="message"
                fullWidth
                variant="outlined"
                minRows={9}
                multiline
                error={formErrors.message}
                helperText={validationMessages.message}
                onBlur={validate}
              />
            </div>
          </Paper>

          <Spacer height={50} />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tooltip title="Send Message" placement="top">
              <Button
                variant="contained"
                color="primary"
                sx={{ p: "1em 1em 1em 1.5em" }}
                onClick={async (event) => await handleSubmit(event)}
              >
                <Typography variant="h6">SUBMIT &nbsp;</Typography>
              </Button>
            </Tooltip>
          </Box>
        </Box>
      )}
    </>
  );
}

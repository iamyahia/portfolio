import React from "react";
// packages
import Link from "next/link";
import { Box, IconButton, Typography } from "@mui/material";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const contacts = [
  {
    name: "instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/yahiabaiz/",
  },
  {
    name: "github",
    username: "@iamyahia",
    icon: <GitHubIcon />,
    href: "https://github.com/iamyahia/",
  },
];

function Footer() {
  return (
    <footer
      style={{
        bottom: 0,
        width: "100%",
        display: "flex",
        position: "absolute",
        borderTop: "1px solid #1E2D3D",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "0 24px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          component="p"
          sx={{
            width: {
              xs: "100%",
              md: "100px",
            },
          }}
        >
          find me in:
        </Typography>
        <Box
          sx={{ display: { xs: "none", md: "flex", width: "100%" } }}
          component="ul"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {contacts.map((contact, index) => (
            <Box
              component="li"
              style={{
                padding: "11px 14px",
                listStyleType: "none",
                borderLeft: "1px solid #1e2d3d",
              }}
              sx={{
                marginLeft: {
                  xs: index === 0 && "auto",
                  md: contacts.length - 1 === index && "auto",
                },
              }}
              key={index}
            >
              <Link
                key={contact.name}
                href={contact.href}
                color="inherit"
                style={{
                  color: "#607B96",
                  textDecoration: "none",
                }}
                target="_blank"
              >
                <IconButton
                  size="large"
                  aria-label={`${contact.name} contact`}
                  color="inherit"
                  style={{
                    padding: 0,
                  }}
                >
                  {contact.username && (
                    <Typography
                      component="p"
                      style={{
                        fontWeight: 450,
                        fontSize: "16px",
                        marginRight: "8px",
                      }}
                    >
                      {contact.username}
                    </Typography>
                  )}
                  {contact.icon}
                </IconButton>
              </Link>
            </Box>
          ))}
        </Box>
      </div>
    </footer>
  );
}

export default Footer;

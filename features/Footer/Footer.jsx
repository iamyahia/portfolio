import React from "react";
// packages
import Link from "next/link";
import { Typography } from "@mui/material";

import * as Styled from "./Footer.styled";

import { contacts } from "./utils/constant";

function Footer() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.FooterInfoTypography component="p">
          find me in:
        </Styled.FooterInfoTypography>
        <Styled.ContactsBox>
          {contacts.map((contact, index) => (
            <Styled.ContactBox
              component="li"
              sx={{
                marginLeft: {
                  xs: index === 0 && "auto",
                  md: contacts.length - 1 === index && "auto",
                },
              }}
              key={index}
              contactLength={contact.length}
            >
              <Styled.ContactLink
                key={contact.name}
                href={contact.href}
                color="inherit"
                target="_blank"
              >
                <Styled.ContactIconButton
                  size="large"
                  aria-label={`${contact.name} contact`}
                  color="inherit"
                >
                  {contact.username && (
                    <Styled.UsernameTypography>
                      {contact.username}
                    </Styled.UsernameTypography>
                  )}
                  {contact.icon}
                </Styled.ContactIconButton>
              </Styled.ContactLink>
            </Styled.ContactBox>
          ))}
        </Styled.ContactsBox>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Footer;

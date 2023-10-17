import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            marginBottom: "5rem",
            color: "#E5E9F0",
          }}
        >
          <Typography component="h6" variant="h6">
            Hi all. I am
          </Typography>
          <Typography component="h1" variant="h1">
            Yahia Hasan
          </Typography>
          <Typography component="h2" variant="h2" style={{ color: "#4D5BCE" }}>
            &gt; Full-Stack developer
          </Typography>
        </div>
        <div>
          <Typography component="p">
            {" "}
            &#47;&#47; complete the game to continue.
          </Typography>
          <Typography
            component="p"
            color="primary"
            style={{
              margin: "0.875rem 0 ",
            }}
          >
            {" "}
            &#47;&#47; you can also get the source-code on my Github repo.
          </Typography>
          <Typography component="p">
            <span style={{ color: "#4D5BCE" }}>const</span>&nbsp;
            <span style={{ color: "#43D9AD" }}>githubLink</span>&nbsp;=&nbsp;
            <a href="#" style={{ color: "#E99287", textDecoration: "none" }}>
              “https://github.com/example/url”
            </a>
          </Typography>
        </div>
      </div>
      <Box
        component="div"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        snake
      </Box>
    </div>
  );
}

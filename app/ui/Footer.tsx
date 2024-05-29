import { auth } from "@/auth";
import { AdminPanelSettings } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default async function Footer() {
  const session = await auth();

  return (
    <>
      <Box
        component="footer"
        sx={{
          display: "flex",
          background: "#1F1724",
          marginTop: "auto",
          padding: "5px 10px",
          fontFamily: "Josefin sans",
          color: "#5A5353",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            background:
              "linear-gradient(to right, #AE8625, #F7EF8A, #D2AC47, #EDC967)",
            zIndex: 1,
          }}
        />
        {session?.user.isAdmin && (
          <Link
            href="/admin/products"
            style={{
              textDecoration: "none",
              color: "#5A5353",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AdminPanelSettings sx={{ "&:hover": { color: "white" } }} />
            Admin
          </Link>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <InstagramIcon
              sx={{
                color: "white",
                width: "30px",
                height: "30px",
              }}
            />
            <FacebookIcon
              sx={{
                color: "white",
                width: "30px",
                height: "30px",
              }}
            />
            <XIcon
              sx={{
                color: "white",
                width: "30px",
                height: "30px",
              }}
            />
          </Box>
          <Link
            style={{
              textDecoration: "none",
              color: "#5A5353",
              lineHeight: "1.5",
            }}
            href="mailto:costumerservice@wineoclock.com"
          >
            costumerservice@wineoclock.com
          </Link>
          <Typography sx={{ fontFamily: "Josefin sans" }}>
            +46 31-487 30 73
          </Typography>
          <Typography sx={{ fontFamily: "Josefin sans" }}>
            © 2024 Wine O`clock
          </Typography>
        </Box>
      </Box>
    </>
  );
}

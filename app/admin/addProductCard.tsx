import {
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export default function AddProductCard() {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ marginTop: "30px" }}>
      <Link
        href="/admin/product/new"
        color="text.secondary"
        sx={{ textDecoration: "none" }}
      >
        <CardActionArea
          sx={{
            background: "#4E3D53 ",
            borderRadius: "8px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "white", fontFamily: "josefin sans" }}
            >
              Add New Product
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Grid>
  );
}

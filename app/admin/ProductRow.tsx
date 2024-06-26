"use client";
import { archiveProduct } from "@/app/actions/productActions";
import ArchiveButton from "@/app/ui/DeleteButton";
import "@fontsource/karla";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Product } from "@prisma/client";

interface Props {
  product: Product;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function ProductRow({ product, open, onOpen, onClose }: Props) {
  const handleArchive = async (productId: string) => {
    await archiveProduct(productId);
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <Card
        sx={{
          background: product.isArchived ? "#e7e7e7" : "white",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              maxWidth: "100%",
              height: "auto",
              filter: product.isArchived ? "blur(3px)" : "none",
            }}
          />
        </CardActionArea>
        {product.isArchived && (
          <Typography
            variant="h6"
            color="#1F1724"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
              backgroundColor: "#1F1724",
              fontFamily: "Karla",
            }}
          >
            ARCHIVED
          </Typography>
        )}
        <CardContent>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "Karla",
                }}
              >
                {product.title}
              </Typography>
              <Typography sx={{ fontFamily: "Karla" }}>Product Id:</Typography>
              <Typography sx={{ fontFamily: "Karla" }}>{product.id}</Typography>
              <Typography sx={{ fontFamily: "Karla" }}>
                Inventory: {""}
                {product.inventory}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontFamily: "Karla" }}
              >
                {product.price.toString()} $
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Karla" }}
          >
            {product.description.substring(0, 150)}
          </Typography>
        </CardContent>
        <CardActions>
          <ArchiveButton product={product} onArchive={handleArchive} />
          <Link href={`/admin/products/${product.id}`}>
            <ModeEditOutlineOutlinedIcon
              sx={{
                color: "text.secondary",
                "&:hover": { color: "#1F1724" },
                fontFamily: "Karla",
              }}
            />
          </Link>
          <ExpandMoreIcon
            onClick={onOpen}
            sx={{
              color: "text.secondary",
              "&:hover": { color: "#1F1724" },
              fontFamily: "Karla",
            }}
          />
          <Dialog open={open} onClose={onClose}>
            <DialogContent sx={{ fontFamily: "Karla" }}>
              <img
                src={product.image}
                style={{
                  width: "200px",
                  padding: "10px",
                  borderRadius: "15px",
                }}
              />
              <DialogTitle sx={{ fontWeight: "bold", fontFamily: "Karla" }}>
                {"Produktinformation"}
              </DialogTitle>
              <DialogContent>
                <Typography sx={{ fontWeight: "bold", fontFamily: "Karla" }}>
                  Produkt-ID:{" "}
                  <Typography component="span" sx={{ fontFamily: "Karla" }}>
                    {product.id}
                  </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontFamily: "Karla" }}>
                  Produktpris:{" "}
                  <Typography component="span" sx={{ fontFamily: "Karla" }}>
                    {product.price} $
                  </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontFamily: "Karla" }}>
                  Produktbeskrivning:{" "}
                  <Typography component="span" sx={{ fontFamily: "Karla" }}>
                    {product.description}
                  </Typography>
                </Typography>
              </DialogContent>
              <DialogActions>
                <ExpandLessIcon
                  onClick={onClose}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "#1F1724" },
                    fontFamily: "Karla",
                  }}
                />
              </DialogActions>
            </DialogContent>
          </Dialog>
        </CardActions>
      </Card>
    </Grid>
  );
}

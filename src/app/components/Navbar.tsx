import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky" }}>
      <AppBar
        sx={{ backgroundColor: "black" }}
        className="border-b border-gray-900"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Hyper⚡onify
          </Typography>
          {/* <IconButton
            sx={{
              ":hover": {
                bgcolor: "rgb(17 24 39)",
              },
              color: "white",
            }}
          >
            <PhotoLibraryIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

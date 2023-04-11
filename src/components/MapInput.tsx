import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import mapData from "./../data/countries.json";

import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON } from "react-leaflet";

const MapInput = ({ fetch }: { fetch: (country: string) => void }) => {
    const [open, setOpen] = useState(false);

    const [selected, setSelected] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

        fetch(selected);
    };

    const handleCountryClick = (country: any, layer: any) => {
        const countryName = country.properties.ADMIN;
        layer.on({
            click: () => {
                //save country name to state
                setSelected(countryName);
            },
        });

        layer.bindPopup(countryName);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Choose from map
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose}>
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Select a country - {selected}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>

                <MapContainer
                    className="h-screen bg-white"
                    zoom={2}
                    center={[20, 100]}
                >
                    <GeoJSON
                        style={{
                            fillColor: "red",
                            fillOpacity: 0.5,
                            color: "black",
                            weight: 0.5,
                        }}
                        data={mapData.features}
                        onEachFeature={handleCountryClick}
                    />
                </MapContainer>
            </Dialog>
        </div>
    );
};

export default MapInput;

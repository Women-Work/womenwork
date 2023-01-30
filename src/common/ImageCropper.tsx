import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

interface CropperDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (image: string) => void;
}

function CropperDialog(props: CropperDialogProps) {
  const { open, onClose, onSave } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [dialogTitle, setDialogTitle] = useState<"Escolher" | "Cortar">(
    "Escolher"
  );

  const [src, setSrc] = useState("");
  const [crop, setCrop] = useState("");

  const onCrop = (preview: any) => {
    setCrop(preview);
  };

  const onCloseCrop = () => {
    setCrop("");
  };

  const handleSave = () => {
    onSave(crop);
  };

  useEffect(() => {
    setDialogTitle(crop === "" ? "Escolher" : "Cortar");
  }, [crop]);

  return (
    <Dialog onClose={onClose} open={open} fullScreen={fullScreen} maxWidth="xs">
      <DialogTitle>{dialogTitle} imagem</DialogTitle>
      <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          width={400}
          height={400}
          src={src}
          onCrop={onCrop}
          onClose={onCloseCrop}
          mimeTypes="image/jpeg"
          label="Clique para escolher uma imagem"
          exportAsSquare={true}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CropperDialog;

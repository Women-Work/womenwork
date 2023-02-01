import { AddAPhotoRounded, DeleteRounded } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../common/hooks";
import ImageCropper from "../../common/ImageCropper";
import { dataUrlToFileUsingFetch, s3Config } from "../../common/utils";
import { selectUser, updateUser } from "../../redux/userSlice";
import { UserUpdate } from "../../models/UserUpdate";
import { useNavigate } from "react-router-dom";

function UserImage() {
  const user = useAppSelector(selectUser);
  const [openCropper, setOpenCropper] = useState(false);
  const [file, setFile] = useState<File>();
  const dispatch = useAppDispatch();
  const url = s3Config.s3Url;
  const userPhoto = ["default.jpg", "", undefined].includes(user.photo)
    ? ""
    : url + user.photo;

  const onCloseCropper = () => setOpenCropper(false);

  const onSaveCropper = async (image: string) => {
    setFile(
      await dataUrlToFileUsingFetch(image, `user/${user.id}`, "image/jpeg")
    );
  };

  useEffect(() => {
    if (file) {
      updatePhoto(file);
    }
  }, [file]);

  const handleClick = () => {
    if (user.photo === "default.jpg") {
      setOpenCropper(true);
    } else {
      deletePhoto();
    }
  };

  const deletePhoto = async () => {
    const update: UserUpdate = {
      type: "removePhoto",
      id: user.id,
      payload: {
        photoUrl: user.photo,
      },
    };

    await dispatch(updateUser(update));
  };

  const updatePhoto = async (photo: File) => {
    const update: UserUpdate = {
      type: "updatePhoto",
      id: user.id,
      payload: {
        photo,
      },
    };

    await dispatch(updateUser(update));

    onCloseCropper();
  };

  return (
    <>
      <Box className="hover-img" onClick={handleClick}>
        <Avatar
          src={userPhoto}
          alt={user.name}
          sx={{ width: "200px", height: "200px" }}
        />

        <Box className="overlay">
          {user.photo === "default.jpg" ? (
            <AddAPhotoRounded fontSize="large" />
          ) : (
            <DeleteRounded fontSize="large" />
          )}
        </Box>
      </Box>
      <ImageCropper
        open={openCropper}
        onClose={onCloseCropper}
        onSave={onSaveCropper}
      />
    </>
  );
}

export default UserImage;

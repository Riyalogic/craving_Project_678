import cloudinary from "../config/cloudinary.config.js";

export const uploadMultipleImages = async (Images, storageLocation) => {
  try {
    const uploadMultiple = Images.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      const dataURI = `data:${image.mimeType};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: storageLocation,
        width: 500,
        height: 500,
        crop: "fill",
      });

      return {
        url: result.secure_url,
        publcId: result.public_id,
      };
    });

    return await promises.all(uploadMultiple);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const deleteMultipleImages = async (Images) => {
  try {
    const deleteMultiple = Images.map(async (image) => {
      await cloudinary.uploader.destroy(image.publcId);
    });
    await promises.all(deleteMultiple);
  } catch (error) {
    throw error;
  }
};

export const deleteSingleImages = async (image) => {
  try {
    await cloudinary.uploader.destroy(image.publcId);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const uploadSingleImages = async (image, storageLocation) => {
  try {
    const b64 = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimeType};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: storageLocation,
      width: 500,
      height: 500,
      crop: "fill",
    });

    return {
      url: result.secure_url,
      publcId: result.public_id,
    };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

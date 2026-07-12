import mongoose from "mongoose";

const RiderSchema = mongoose.Schema(
  {
    riderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    vehicleDetails: {
      type: {
        vehivleType: { type: String, required: true },
        vehivleNumber: { type: String, required: true },
        vehivleModel: { type: String, required: true },
        vehivleColor: { type: String, required: true },
      },
    },
    documents: {
      type: {
        drivingLicense: { type: String, required: true },
        vehicleRegistrationCertificate: { type: String, required: true },
        insuranceCertificate: { type: String, required: true },
        aadharCard: { type: String, required: true },
        panCard: { type: String, required: true },
      },
    },
    currentAddress: {
      type: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        country: { type: String, required: true },
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "inactive",
    },
    averageRating: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: false },
    financialDetails: {
      type: {
        bankName: { type: String, required: true },
        accountNumber: { type: String, required: true },
        ifscCode: { type: String, required: true },
      },
    },
    currentLocation: {
      type: {
        lat: { type: String },
        lon: { type: String },
      },
    },
  },
  { timestamps: true },
);

const Rider = mongoose.model("rider", RiderSchema);

export default Rider;

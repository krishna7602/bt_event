import mongoose from "mongoose";

const siteConfigSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: "site-config",
      unique: true,
      index: true,
    },
    settings: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("SiteConfig", siteConfigSchema);
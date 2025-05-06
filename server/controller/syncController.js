import userModel from "../model/authModel.js";

export const syncUserWithDB = async (req, res) => {
  try {
    // Step 1: Extract the userId from the authenticated request
    const {
      clerkId,
      name,
      email,
      imageUrl,
      role,
      company,
      description,
      address,
      city,
      country,
      websiteUrl,
      telephoneUrl,
      facebookUrl,
      twitterUrl,
      linkedinUrl,
      otherSocialUrl,
    } = req.body;
    // console.log(clerkId);

    if (!clerkId) {
      // console.log("❌ Authentication failed");
      return res.status(401).json({ message: "Unauthorized" });
    }

    // console.log("✅ Authenticated Clerk UserID:", clerkId);

    // Step 2: Retrieve user details from the request body

    if (!clerkId || !name || !email) {
      return res.status(400).json({ message: "Missing user data in request" });
    }
    const cardData =
      "title description imageUrl category rewardAmount totalReviewsNeeded companyName createdAt updatedAt";
    // Step 3: Check if the user already exists in the database
    let user = await userModel.findOne({ clerkId }).populate("cards", cardData);

    if (!user) {
      // Create a new user
      user = await userModel.create({
        clerkId,
        name,
        email,
        imageUrl,
        role,
        company,
        description,
        address,
        city,
        country,
        websiteUrl,
        telephoneUrl,
        facebookUrl,
        twitterUrl,
        linkedinUrl,
        otherSocialUrl,
      });

      // console.log("✅ New user created:", user);
    } else {
      // Update existing user details
      user.name = name;
      user.email = email;
      user.imageUrl = imageUrl;
      user.role = role;
      await user.save();

      // console.log("♻️ Existing user updated:", user);
    }

    return res.status(200).json({ message: "User synced successfully", user });
  } catch (error) {
    // console.error("❌ Error syncing user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserwithCompanyDetails = async (req, res) => {
  try {
    // const clerkId = "user_2wicTA7NyoLbopzTjypTHyf6muq"
    const {
      clerkId,
      company,
      description,
      address,
      city,
      country,
      websiteUrl,
      telephoneUrl,
      facebookUrl,
      twitterUrl,
      linkedinUrl,
      otherSocialUrl,
    } = req.body;

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Find the user by clerkId and update the company details
    const user = await userModel.findOneAndUpdate(
      { clerkId },
      {
        company,
        description,
        address,
        city,
        country,
        websiteUrl,
        telephoneUrl,
        facebookUrl,
        twitterUrl,
        linkedinUrl,
        otherSocialUrl,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Error updating user company details",
      error: error.message,
    });
  }
};

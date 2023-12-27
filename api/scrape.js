const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const searchQuery = req.query.query;

    console.log("Search query:", searchQuery);

    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;

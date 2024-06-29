require("dotenv").config();

const mainController = {
  // Vista principañ

  index: async (req, res) => {
    try {
      return res.render("./main/index.ejs");
    } catch (error) {
      console.log(error.message);
    }
  },
  dashboard: async (req, res) => {
    try {
        
      const dashboardUrl =
        process.env.ENV == "development"
          ? "http://localhost:5173"
          : process.env.PRODUCTION_DASHBOARD_URL;

      return res.redirect(dashboardUrl);
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = mainController;

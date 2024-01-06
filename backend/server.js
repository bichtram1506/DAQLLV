
const app = require("./app");

const port = process.env.APP_PORT || 3000;

// Các tuyến đường và cấu hình ứng dụng

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
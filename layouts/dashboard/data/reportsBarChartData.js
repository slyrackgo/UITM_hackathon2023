
const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Funds involved", data: [1000, 1211, 1111, 1111, 1111, 1000, 1222, 1110, 1112] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "users",
      progress: { content: "36K", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "clicks",
      progress: { content: "2M", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "sales",
      progress: { content: "$435", percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "items",
      progress: { content: "43", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;

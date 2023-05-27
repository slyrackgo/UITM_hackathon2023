

  // @mui material components
  import Grid from "@mui/material/Grid";
  import Icon from "@mui/material/Icon";

  // Soft UI Dashboard React components
  import SoftBox from "components/SoftBox";
  import SoftTypography from "components/SoftTypography";

  // Soft UI Dashboard React examples
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import DashboardNavbar from "examples/Navbars/DashboardNavbar";
  import Footer from "examples/Footer";
  import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
  import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
  import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

  // Soft UI Dashboard React base styles
  import typography from "assets/theme/base/typography";

  // Dashboard layout components
  import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
  import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
  import Projects from "layouts/dashboard/components/Projects";
  import OrderOverview from "layouts/dashboard/components/OrderOverview";

  // Data
  import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
  import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

  function Dashboard() {
    const { size } = typography;
    const { chart, items } = reportsBarChartData;

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "today's sponsor's help" }}
                  count="$10,000"
                  percentage={{ color: "success"}}
                  icon={{ color: "info", component: "paid" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "today's volunteers" }}
                  count="300+"
                  percentage={{ color: "success"}}
                  icon={{ color: "info", component: "public" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                  title={{ text: "events organized" }}
                  count="14"
                  percentage={{ color: "success"}}
                  icon={{ color: "info", component: "emoji_events" }}

                />
              </Grid>
            </Grid>
          </SoftBox>
          <SoftBox mb={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <BuildByDevelopers />
              </Grid>
              <Grid item xs={12} lg={5}>
                <WorkWithTheRockets />
              </Grid>
            </Grid>
          </SoftBox>
          <SoftBox mb={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12}>
                <GradientLineChart
                  title="Organisation Overview  in 2022"
                  description={
                    <SoftBox display="flex" alignItems="center">
                      <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      </SoftBox>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                      
                        <SoftTypography variant="button" color="text" fontWeight="regular">
                        
                        </SoftTypography>
                      </SoftTypography>
                    </SoftBox>
                  }
                  height="20.25rem"
                  
                  chart={gradientLineChartData}
                />
              </Grid>
            </Grid>
          </SoftBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrderOverview />
            </Grid>
          </Grid>
        </SoftBox>
        <Footer />
      </DashboardLayout>
    );
  }

  export default Dashboard;

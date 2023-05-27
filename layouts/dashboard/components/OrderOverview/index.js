// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Levels overview
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
             
            </SoftTypography>
            &nbsp;
           
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="delete"
          title="1-800 points"
          dateTime="1 level"
        />
        <TimelineItem
          color="error"
          icon="upgrade"
          title="801-950 points"
          dateTime="2 level"
        />
        <TimelineItem
          color="info"
          icon="money"
          title="951-1100 points"
          dateTime="3 level"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="1101-1250 points"
          dateTime="4 level"
        />
        <TimelineItem
          color="primary"
          icon="notifications"
          title="1251-1400 points"
          dateTime="5 level"
        />
        <TimelineItem 
          color="dark"
          icon="inventory_2"
          title="1401-1550 points" 
          dateTime="6 level"/>
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="1551-1700 points"
          dateTime="7 level"
        />
        <TimelineItem
          color="primary"
          icon="paid"
          title="1701-1850 points"
          dateTime="8 level"
        />
        <TimelineItem
          color="primary"
          icon="A"
          title="1851-2000 points"
          dateTime="8 level"
        />
        <TimelineItem
          icon="S"
          color="primary"
          title="2001+ points"
          dateTime="10 level"
        />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;

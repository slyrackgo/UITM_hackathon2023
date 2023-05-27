/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "sponsors", align: "left" },
    { name: "date", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      sponsors: <Author image={team2} name="Name Surname" email="United Way" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/22
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      sponsors: <Author image={team3} name="Name Surname" email="Amnesty International" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/22
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      sponsors: <Author image={team4} name="Name Surname" email="Save the Children" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/21
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      sponsors: <Author image={team3} name="Name Surname" email="Doctors Without Borders (Médecins Sans Frontières)" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/21
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      sponsors: <Author image={team2} name="Name Surname" email="World Wildlife Fund (WWF)" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/22
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      sponsors: <Author image={team4} name="Name Surname" email="Feeding America" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/22
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
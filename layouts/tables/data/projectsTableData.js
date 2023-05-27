/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

// Soft UI Dashboard React components
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftProgress from 'components/SoftProgress';

// Images
import logoSpotify from 'assets/images/small-logos/logo-spotify.svg';
import logoInvesion from 'assets/images/small-logos/logo-invision.svg';
import logoJira from 'assets/images/small-logos/logo-jira.svg';
import logoSlack from 'assets/images/small-logos/logo-slack.svg';
import logoWebDev from 'assets/images/small-logos/logo-webdev.svg';
import logoXD from 'assets/images/small-logos/logo-xd.svg';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5, 4),
  textTransform: 'none',
  boxShadow: '0 4px 12px rgba(0, 0, 0.5, 0.1)',
  '&:hover': {
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
  },
}));

function Completion({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SoftTypography>
      <SoftBox width="20px">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

const action = (
  <Icon sx={{ cursor: 'pointer', fontWeight: 'bold' }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: 'project', align: 'left' },
    { name: 'budget', align: 'left' },
    { name: 'action', align: 'center' },
  ],

  rows: [
    {
      project: (
        <StyledButton
          onClick={() => history.push('/united-way.js')}
          variant="contained"
          color="primary"
        >
          <h3>United Way</h3>
        </StyledButton>
      ),
      budget: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: (
        <StyledButton
          onClick={() => history.push('/save-the-children')}
          variant="contained"
          color="primary"
        >
          <h3>Save the Children</h3>
        </StyledButton>
      ),
      budget: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          done
        </SoftTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: (
        <StyledButton
          onClick={() => history.push('/doctors-without-borders')}
          variant="contained"
          color="primary"
        >
          <h3>Doctors Without Borders (Médecins Sans Frontières)</h3>
        </StyledButton>
      ),
      budget: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: (
        <StyledButton
          onClick={() => history.push('/world-wildlife-fund')}
          variant="contained"
          color="primary"
        >
          <h3>World Wildlife Fund (WWF)</h3>
        </StyledButton>
      ),
      budget: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SoftTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: (
        <StyledButton
          onClick={() => history.push('/feeding-america')}
          variant="contained"
          color="primary"
        >
          <h3>Feeding America</h3>
        </StyledButton>
      ),
      budget: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          working
        </SoftTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: (
        <StyledButton
          onClick={() => history.push('/amnesty-international')}
          variant="contained"
          color="primary"
        >
          <h3>Amnesty International</h3>
        </StyledButton>
      ),
      budget: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </SoftTypography>
      ),
      status: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          done
        </SoftTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;

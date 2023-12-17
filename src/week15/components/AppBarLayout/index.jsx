import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material';
import AppLogin from './AppLogin';
import EvaluateMembers from './EvaluateMemebers';
import SaveIcon from '@mui/icons-material/Save';
import BackupIcon from '@mui/icons-material/Backup';
import { Tooltip } from '@mui/material';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function AppBarLayout({ mainContent }) {

  const [hasSubmit, setHasSubmit] = React.useState(false)

  const handleSubmit = () => {
    window.assessment.submit=true
    setHasSubmit(true)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to see button
          </Typography>
          <ButtonSubmit onClick={handleSubmit} />
          <ButtonSave />
          <EvaluateMembers disabled={hasSubmit} />
          <AppLogin />
          {/* <Button color="inherit" onClick={() => login()}><LoginIcon/></Button> */}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
          {mainContent}
        </Box>
      </Container>
      <ScrollTop >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}


function ButtonSave() {
  return <>
    <Tooltip title="儲存">
      <Button color="inherit" onClick={()=>{update_record_assessment()}} ><SaveIcon /></Button>
    </Tooltip>

  </>
}

function ButtonSubmit({onClick}) {
  return <>
    <Tooltip title="送出成績">
      <Button color="inherit" onClick={onClick}><BackupIcon /></Button>
    </Tooltip>

  </>
}

function update_record_assessment(){
  window.assessment.assessment.members=window.eval_members
  window.assessment.assessment.project=window.ratings
}
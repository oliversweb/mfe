import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MaterialLink from '@material-ui/core/Link';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ft',
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit">
        MFE Demo Site
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default ({ data }) => { 
  const classes = useStyles();

  // console.log('Footer data: ', data);
  return (
    <React.Fragment>      
      <StylesProvider generateClassName={generateClassName}>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            ______________ Footer ______________
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" >          
              <ul>
              {data.sections.map((item) => (
                <li key={item.id}>link name: {item.name}</li>
              ))}
              </ul>            
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            ____________________________________
          </Typography>
          <Copyright />
        </footer>
      </StylesProvider>
    </React.Fragment> 
  );
};

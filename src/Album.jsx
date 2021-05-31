import {React, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import StarsIcon from '@material-ui/icons/Stars';
import Card from '@material-ui/core/card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Redirect } from "react-router";
import ParticlesBg from "particles-bg";
import Data from './Data';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  icon1: {
    marginRight: theme.spacing(1),
    animation: "App-logo-spin infinite 3s linear"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
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


export default function Album(props) {
  const classes = useStyles();
  function Follow() {
    return (
      <Typography variant="subtitle1" align="center" color="textPrimary" style={{padding:"6px"}}>
        {'Follow me at: '}
        <Link color="inherit" href="https://github.com/Aryaman21">
          <GitHubIcon fontSize="small" className={classes.icon} />
        </Link>{''}
        <Link color="inherit" href="https://www.instagram.com/">
          <InstagramIcon fontSize="small" className={classes.icon} />
        </Link>
      </Typography>
    );
  }
  const[paths,setPaths] = useState('/');
  if(paths==="/gfg"){
    return <Redirect to='/gfg'/>;
  }
  else if(paths==="/codeforces"){
    return <Redirect to='/codeforces'/>;
  }
  else if(paths==="/hackerrank"){
    return <Redirect to='/hackerrank'/>;
  }
  else if(paths==="/admin"){
    return <Redirect to='/admin'/>;
  }
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link style={{cursor:"pointer"}} onClick={()=>setPaths("/admin")} color="inherit">
          Aryaman
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <>
      <CssBaseline />
      <AppBar style={{ background: '#666699' }} /*color="primary"*/ position="sticky">
        <Toolbar>
          <StarsIcon fontSize="large" className={classes.icon1} />
          <Typography variant="h6" color="inherit" noWrap>
            AryaTechnical
          </Typography>
          <Typography style={{marginLeft:"auto"}} variant="h6" color="inherit" noWrap>
            Welcome!!
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/001/369/246/non_2x/art-paper-textured-background-photo.jpg")`,
      backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden"}}>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End apppbar unit */}
        <Grid container spacing={4}>
          {Data.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.text}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.value}
                  </Typography>
                  <Typography>
                    {`Click view to see the solutions for `}<b>{`${card.para}`}</b> {` problems.`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>setPaths(card.path)} size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
      

      <main style={{minHeight:"60vh"}}>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundColor:"transparent", position:"relative"}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom style={{color:"white"}}>
              INTERESTED IN CRYPTO ??
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{color:"white"}}>
              If you invest your money in cryptocurrencies, then subscribe to my newsletter page to get the notification of top news at the earliest.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Crypto Newsletter
                  </Button>
                </Grid>
                
              </Grid>
            </div>
          </Container>
          <ParticlesBg num={100} color="#282c34" type="thick" bg={true}/>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer} style={{background:"#c2c2d6"}}>
        <Typography variant="h6" align="center" gutterBottom>
          Aryaman Singh
        </Typography>
        <Follow/>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
}
import {React,useState,useEffect} from 'react';
import Popup from '../Popup';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Redirect } from "react-router";
import '../App.css';
import db from '../util/firebase';
import ParticlesBg from "particles-bg";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Aryaman
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  mydiv: {
    padding:"3px",
    overflowY:"auto",
    height:"225px"
  },
  appbar: {
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
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
    padding: theme.spacing(3),
  },
}));


export default function Codeforces() {
  const classes = useStyles();
  function Follow() {
    return (
      <Typography variant="subtitle1" align="center" color="inherit" style={{padding:"6px"}}>
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
  const[paths,setPaths] = useState('/hackerrank');
  const[ques,setQues] = useState();
  const[sol,setSol] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const[qsol,setQsol] = useState([]);

  useEffect(()=>{
    db.collection('hackerrank').onSnapshot(snapshot=>{
      setQsol(snapshot.docs.map(doc=>[doc.data().gfgques,doc.data().gfgsol]))
      //console.log(snapshot.docs.map(doc=>doc.data().gfgques));
    })
  },[])
 

  function HOME(){
    setPaths('/')
  }
  if(paths==="/"){
    return <Redirect to='/'/>;
  }

  return (
    <>
      <CssBaseline />
      <AppBar style={{ background:'#3d5c5c' }}  position="static">
        <Toolbar>
          <FormatAlignLeftIcon fontSize="large" className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            HackerRank
          </Typography>
          <Button onClick={HOME} style={{marginLeft:"auto",backgroundColor:"red"}} color="inherit"><ArrowBackIcon style={{marginRight:"4px"}} fontSize="small" className={classes.icon}/>Home page</Button>
        </Toolbar>
      </AppBar>
        {/* Hero unit */}
        <main style={{display:"flex",  alignItems:"center",justifyContent:"center"}}>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid xs={12} sm={6} md={5}>
                <div style={{backgroundColor:"white",border:"5px solid black",padding:"1px",borderRadius:"8px"}} className={classes.card}>
                    <div  style={{ display:"flex",justifyContent:"center",color:"white", alignItems:"center", background:'#3d5c5c' }} position="static">
                        <Toolbar>
                        <Typography  variant="h6" color="inherit" noWrap>
                            <b style={{textAlign:"center"}}>Questions</b>
                        </Typography>
                        </Toolbar>
                    </div>
                    <CardContent className={classes.cardContent}>
                    <div className={classes.mydiv}>
                        {qsol.map((ques) => (
                            <Typography variant="h6" align="center"><Link style={{cursor:"pointer"}} onClick={()=>{setIsOpen(!isOpen);setQues(ques[0]);setSol(ques[1])}} color="inherit">{ques[0]}</Link><hr></hr></Typography>
                        ))}
                    </div>
                    </CardContent>
                </div>
                </Grid>
            </Grid>
            </Container>
            <ParticlesBg num={200} color="#282c34" type="square" bg={true}/>
        </main>
        {isOpen && <Popup
            content={<>
              <h3 style={{textAlign:"center"}}>{ques}</h3>
              <div className={classes.mydiv} style={{ padding:"5px",width:"100%",backgroundColor:"lightgray",height:"100%"}}>
              <pre>
                {`${sol}`}
              </pre>
              </div>
            </>}
            handleClose={()=>setIsOpen(!isOpen)}
          />}
      {/* Footer */}
      <footer className={classes.footer} style={{background:"#3d5c5c",color:"white"}}>
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

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Header} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import 'semantic-ui-css/semantic.min.css'
import logo from '../logo3.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    width: '100%',
  },
  root: {
    '& > * + *': {
      
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    
      },

  },
  menuButton: {
    // marginLeft: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
  title: {
    position: 'relative',
    width: '10%',
    marginTop: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      // width: '7%',
      display: 'none',
      // fontSize: 10,
      // marginLeft: theme.spacing(0),
      // marginRight: theme.spacing(2)
    },
  },

  searchAndLinks: {
    position: 'relative',
    marginRight: theme.spacing(2),
    width: '100%',
    marginTop:'0.1%',
  
    // marginLeft: 0,
    // [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(3),
    //     width: '50%',
    //   },
  },
  bellowSearch: {
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: '0.5%',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '70%',
      },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '80%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: '100%',
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  const preventDefault = (event) => event.preventDefault();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
           
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
   
  );
// END MOBILE



  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#05005e' }}>
        <Toolbar>
   
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          > */}
           <LeftSidebar />
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          

{/* LET TYPOGRAPHY ONLY ON DESKTOP */}
          <Typography className={classes.title} variant="h4" /*Wrap*/>
            <span> 
              <Link to="/" >
                <img src={logo} alt="TR" ></img>
            </Link>
            </span>
          </Typography>

        <div className={classes.searchAndLinks}>
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
          </div>
          <div className={classes.bellowSearch}>
          <Typography className={classes.root}>
                {/* <Link href="#" onClick={preventDefault} color="inherit">
                    Category#1 
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    Category#2 
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    Category#3 
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    Category#4 
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    Category#5 
                </Link> */}
            </Typography>
            
          </div>

          </div>


          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
              &nbsp;
                <div > 

      
                <Header as='h4'style={{color: "white"}}>
                   
                    <Header.Content >
                        <Header.Subheader style={{color: "white"}}>Hello, Sign in</Header.Subheader>
                        My Account
                    </Header.Content>
                </Header>
                </div>
            </IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton aria-label="cart" color="inherit">
              <Badge badgeContent={17} color="secondary">
                 <ShoppingCartIcon fontSize="large"/>
               </Badge>
                 <p style={{fontSize: "15px", marginTop:"20%"}}>Cart</p>
               
            </IconButton>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>


      

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

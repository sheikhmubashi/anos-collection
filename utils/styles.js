import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  navbar: {
    // height: "16%",
    backgroundColor: 'black',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,

    },
  },
  brand: {
    // fontWeight: 'bold',
    // fontSize: '1.5rem',
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {

  },
  layOutFooter: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: 'space-evenly',
    marginTop: "50px",
  },
  section: {
    marginTop: 100,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '7rem' },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    width: "70%",
    // backgroundColor: 'red'
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '100%'
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
    width: '96%',
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: 5,
  },

  // Sale button Styel 
  saleCss: {
    color: 'red',
  },
  // main header 
  parentCatogaryDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
export default useStyles;

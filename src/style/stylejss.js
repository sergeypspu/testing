//import React from 'react';
import {createUseStyles} from 'react-jss';
export  const useStyles = createUseStyles({
    
    divAddTask: {
      margin:'0 auto',
      width:'40%',
      height:180,
      padding:10,
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)'
    },
    addTextArea:{
      width:'100%',
      margin: 0,
      padding: 0,
      border: 0,
      resize: 'none',
      boxSizing: 'border-box',
      height:100
    },
    addSelect: {
      width:'100%',
      margin:{
        bottom:7
      },
      padding:0
    },
    addInput: {
      width:'100%',
      margin:{
        bottom:7
      },
      padding:0,
      boxSizing: 'border-box'
    },
    addButton: {
      width:'100%',
      margin:0,
      padding: 5,
      border:'none'
    },
    divTasksList:{
      width:'40%',
      margin:'0 auto',
      marginTop: 20,
      /*margin: {
        top: 20,
        right: '0 auto',
        bottom: '0 auto',
        left: '0 auto'
      },*/
      height:95,
      padding: {
        left: 10,
        bottom:0,
        top:10,
        right:10  
      },
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)'
    },
    pText:{
      width: '100%',
      margin: 0,
      margin:{
        bottom: 15
      }
    },
    pName:{
      width:'100%',
      margin:{
        bottom: 5
      }
    },
    pCount:{
      margin:'auto',
      marginLeft:0
    },
    divButtonListP:{
      display:'flex',
      margin:{
        bottom: 0,
      }
    },
    divButtonList: {
      margin:{
        left: 'auto',
        right: 0
      },
      display:'flex'
    },
    buttonList: {
      margin:{
        left: 'auto',
        right: 10,
        bottom: 0,
        top: 'auto'
      },
      padding: 5,
      border:'none'
    },
    buttonListRight: {
      margin:{
        left: 'auto',
        right: 0,
        bottom: 0,
        top: 'auto'
      },
      padding: 5,
      border:'none'
    }  
  })
    /*myButton: {
      background: '#F4F4F4', 
      border: 'none',
      color: 'black',
      margin: {
        top: 5,
        right: 0,
        bottom: 0,
        left: '1rem'
      },
      padding: {
          top: 8,
          bottom: 8,
          right: 147,
          left: 147
      }
    },
    myLabel: {
      //fontStyle: 'italic'
      //fontWeight: 'bold'
    }*/
 
    /*const Button = ({children}) => {
    const classes = useStyles()
    return (
      <button className={classes.myButton}>
        <span className={classes.myLabel}>{children}</span>
      </button>
    )
  }
  const App = () => <Button>Добавить Задачу</Button>*/
  /*<App />*/
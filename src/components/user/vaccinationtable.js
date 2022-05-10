import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Typography from "@material-ui/core/Typography";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import Button from "@material-ui/core/Button";
// import { mergeClasses } from '@material-ui/styles';
// import { ChildCare } from '@material-ui/icons';

const useStyles = makeStyles({
    tr : {
        "& *":{
        // backgroundColor: '#00ffff',
        border : '2px',
        }
    },
    tr2 : {
        "& *":{
        backgroundColor: '#e0ffff',
        border : '2px',
        }
    },
    th : {
        fontWeight: 'bold ',
        backgroundColor: '#0dd',
    }
})
const tableRow = (data) => {
    return (
        <TableRow >
            <TableCell scope="row">
                {data.a}
            </TableCell>
            <TableCell >
                {data.b}
            </TableCell>
            <TableCell >
                {data.c}
            </TableCell>
            <TableCell >
                <a href='/user/certificate'>{data.d}</a>
            </TableCell>
        </TableRow>
    )
}

const Vaccinationtable = (props) => {
    const classes  = useStyles()
    return (
    <>
      <div style = {{
          margin : '10px',
          color : 'Blue',
          fontWeight: 'bold ',
          fontSize : '20px'
      }}>Patient's Vaccination Details
      </div>
          <React.Fragment>
            
                <Collapse in={true} timeout="auto" unmountOnExit>
                    <Box margin={1} >

                    <Table aria-label="purchases">
                        <TableHead >
                        <TableRow >
                            <TableCell className={classes.th}>Name</TableCell>
                            <TableCell className={classes.th}>Date</TableCell>
                            <TableCell className={classes.th}>LotNo</TableCell>
                            <TableCell className={classes.th}>Certificate</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody className={classes.tr2}>
                        {tableRow({a:'a',b:'b',c:'c',d:'Download'})}
                        {tableRow({a:'q',b:'4',c:'2',d:'Download'})}
                        {tableRow({a:'w',b:'5',c:'3',d:'Download'})}
                        {tableRow({a:'e',b:'6',c:'d',d:'Download'})}
                        </TableBody>
                    </Table>
                    </Box>
                </Collapse>
        </React.Fragment>
      
    </>  
    );
  
}

export default Vaccinationtable
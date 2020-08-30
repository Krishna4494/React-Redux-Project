import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {readCookie, eraseCookie} from "../Login/util";
import { ActionButton } from "../Login/style";


const useStyles = makeStyles({
    table: {
      minWidth: 350,
    },
  });


const Label = ["Id", "Name", "Age", "Gender", "Email", "Phone"];

  
function Home(props){
    const classes = useStyles();
    const verifiedUser = readCookie("verifiedUser");

    useEffect(() => {
        if(!verifiedUser){
            //Redirection
            window.location.href = "/";
        }
    }, []);

  return <div>
    {
        verifiedUser ? <>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {
                        Label.map(labelTitle => <TableCell align="right">{labelTitle}</TableCell> )
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props?.employeeDetails.map(employee => {
                        return <TableRow>
                            <TableCell align="right">{employee.id}</TableCell>
                            <TableCell align="right">{employee.name}</TableCell>
                            <TableCell align="right">{employee.age}</TableCell>
                            <TableCell align="right">{employee.gender}</TableCell>
                            <TableCell align="right">{employee.email}</TableCell>
                            <TableCell align="right">{employee.phoneNo}</TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
            </Table>
        </TableContainer>
            <div style= {{textAlign:"center", margin: "40px 0"}}>
                <ActionButton onClick = {() => {
                    eraseCookie("verifiedUser");
                    window.location.href ="/";
                }}>Logout</ActionButton>
        </div>
        </> : ""
    }
</div>
}


const mapStateToProps = (state) => {
    return {
        employeeDetails: state?.employeeReducer?.employeeDetails
    }
};


export default connect(mapStateToProps, null)(Home);
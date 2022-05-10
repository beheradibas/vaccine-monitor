import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    label : {

        color : '#002359',
        textDecoration : 'underline',
        margin : '10px',
        fontWeight : 'bold'
    },
    detailsHeading :{
        textAlign : 'center',
        fontSize : '30px',
        fontWeight : 'bold' ,
        color : '#002359',
        margin : '20px'
    }
})

const rowData = (data) => {
    return (
        <div style={{
            margin : '15px',
        }}> {data.label}
            <name style={{
                fontWeight : 'bold',
                position : 'absolute',
                left : '50%'
            }}> {data.value}</name>
        </div>
    )
}

const printDocument = () => {
    const input = document.getElementById('certi');
    html2canvas(input)
      .then((canvas) => {
        let imgWidth = 208;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 1, 1, imgWidth, imgHeight);
        // pdf.output('dataurlnewwindow');
        pdf.save("certificate.pdf");
      })
    ;
  }

function Certificate() {
    const classes = useStyles()
  return (
    <div>
    <div id = 'certi' style={{
        
        border:'2px solid black',
        margin : '10px'
        }}>
        <div className={classes.detailsHeading}>Provisional Certiﬁcate for COVID-19 Vaccination - 1 st Dose</div>
        <div className={classes.label}> Beneficiary Details:</div>
        
        {rowData({label:'Beneficiary Name' , value: 'Dibas Behera'})}
        {rowData({label:'Age' , value: '21'})}
        {rowData({label:'Gender' , value: 'Male'})}
        {rowData({label:'ID Verified' , value: 'Aadhaar # XXXXXXXX7875'})}
        {rowData({label:'Beneﬁciary Reference ID' , value: '68515476034340'})}

        
        {/*Vaccination details*/}
        <div className={classes.label} style = {{marginTop : '30px'}}> Vaccination Details:</div>
        {rowData({label:'Vaccine Name' , value: 'COVISHIELD'})}
        {rowData({label:'Date of dose' , value: '14/04/2021'})}
        {rowData({label:'Vaccinated by' , value: 'Prafulla Kumar'})}
        {rowData({label:'Vaccination at' , value: 'Dhanbad'})}
        
        
        </div>
        <Box m={1}
        //margin
        display="flex"
        justifyContent="center"

        alignItems="center"
        >
            <Button onClick={printDocument} align='centre' variant = 'contained' color='primary'>
                    Download
            </Button>
        </Box>
    </div>
  )
}

export default Certificate
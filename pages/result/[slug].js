import React from "react";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
export default function Admission() {

    const [searchTerm, setSearchTerm] = useState("");
    const [search, setSearch] = useState(false);
    const controlSearch = (e) => {
        setSearchTerm(e);
        setSearch(true);
      };
      const searchSuccess = () => {
        setSearchTerm("");
      };
    const data =[
        'bs3454q',
        'gaf325545',
        'gdgg4444'
    ]
  return (
    <>
   
      <Navbar />
      <div className="about bg-white">
        <div className="about__header">
          <h2>Senior School Entrance Result</h2>
        </div>

        <div className="about__content pb-36 pt-12"  >
          
 <div className="">
      <input className="outline-none rounded-md w-full px-3 py-3 "
      placeholder="SEARCH"
      style={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}}
      
    
      />
    </div> 

    <p className="mt-10">The admission numbers listed are successfully passed the exam</p>     
    <TableContainer component={Paper} className="mt-3">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell >Register No</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {i+1}
              </StyledTableCell>
              <StyledTableCell >{row}</StyledTableCell>
               
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </div>
      </div>
      <Footer />
    </>
  );
}

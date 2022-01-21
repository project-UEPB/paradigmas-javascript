import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, points, date, hours) {
  return {
    name,
    points,
    date,
    hours,
  };
}

const rows = [
  createData('Matheus', 50000, '01/01/2001', '12:23'),
  createData('Jose', 5000, '15/01/2022', '05:00'),
  createData('Lucas', 10000, '02/03/2023', '13:30'),
  createData('Klayton', 15000, '10/01/2022', '00:00'),
  createData('João', 100000, '02/01/2021', '12:15'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Pontuação</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Horário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

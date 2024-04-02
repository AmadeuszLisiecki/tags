import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Tag } from "../../types/Tag"

type TableWrapperProps = {
  /**
   * Downloaded tags with posts count.
   */
  tags: Tag[],
};

/**
 * Wrapper to MUI Table.
 */
export const TableWrapper = ({ tags }: TableWrapperProps) => (
  <TableContainer>
    <Table sx={{ maxWidth: 450 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><b>Number</b></TableCell>
          <TableCell align="center"><b>Tag name</b></TableCell>
          <TableCell align="right"><b>Posts count</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tags.map(({ name, count }, index) => {
          return (
            <TableRow key={name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="right">{count}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
)
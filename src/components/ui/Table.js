import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, th, Button } from '@smooth-ui/core-sc';

export const TableRowAsLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const TableRow = styled(Row)`
  border-bottom: 1px solid ${th('lightGrey')};
  flex-wrap: nowrap;

  &:hover {
    background: ${th('lighterGrey')};
  }
`;

export const TableCol = styled(Col)`
  padding: 0.7em 0.5em;
`;

export const HeaderCol = styled(Col)`
  background: ${th('darkGrey')};
  color: ${th('white')};
  padding: 0.7em 0.5em;
`;

export const Table = ({ items, headers, actions, edit }) => {
  return items.length ? (
    <Grid>
      <TableRow>
        {headers.map(col => (
          <HeaderCol xs={col.xs}>{col.name}</HeaderCol>
        ))}
        {actions && <HeaderCol xs={2} ml="auto" />}
      </TableRow>
      {items.map(item => {
        const keys = Object.keys(item.cols).filter(key => key !== 'id');
        const cols = keys.map(key => (
          <TableCol xs={item.cols[key].xs}>{item.cols[key].value}</TableCol>
        ));
        actions &&
          cols.push(
            <TableCol xs={2} ml="auto">
              {edit && <Button onClick={() => edit(item.id)}>Edit</Button>}
            </TableCol>
          );
        return (
          <TableRowAsLink to={`/admin/users/${item.id}`}>
            <TableRow key={item.id}>{cols}</TableRow>
          </TableRowAsLink>
        );
      })}
    </Grid>
  ) : null;
};

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, th, Button } from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons';

export const TableRow = styled(Row)`
  border-bottom: 1px solid ${th('lightGrey')};
  flex-wrap: nowrap;

  &:hover {
    background: ${th('lighterGrey')};
  }
`;

export const DataTableRow = styled(TableRow)`
  align-items: center;
`;

export const TableCol = styled(Col)`
  padding: 0.7em 0.5em;
`;

export const HeaderCol = styled(Col)`
  background: ${th('darkGrey')};
  color: ${th('white')};
  padding: 0.7em 0.5em;
`;

export const ActionButton = styled(Button)`
  align-items: center;
  display: inline-flex;
  height: 25px;
  justify-content: center;
  margin-right: 5px;
  opacity: 0.8;
  padding: 0;
  width: 25px;

  &:hover {
    opacity: 1;
  }
`;

export const Table = ({ items, headers, actions, edit, showDetails }) => {
  return items.length ? (
    <Grid>
      <TableRow>
        {headers.map(col => (
          <HeaderCol key={col.name} xs={col.xs}>
            {col.name}
          </HeaderCol>
        ))}
        {actions && <HeaderCol xs={2} ml="auto" />}
      </TableRow>
      {items.map((item, rowIndex) => {
        const keys = Object.keys(item.cols).filter(key => key !== 'id');
        const cols = keys.map((key, index) => (
          <TableCol
            key={`table-col-${item.cols[key].name}-${index}`}
            xs={item.cols[key].xs}
          >
            {item.cols[key].value}
          </TableCol>
        ));
        actions &&
          cols.push(
            <TableCol xs="auto" ml="auto" key="table-col-actions">
              {edit && (
                <ActionButton onClick={() => edit(item.id)}>
                  <FontAwesomeIcon icon={faEdit} size="xs" />
                </ActionButton>
              )}
              <ActionButton onClick={() => showDetails(item.id)}>
                <FontAwesomeIcon icon={faUser} size="xs" />
              </ActionButton>
            </TableCol>
          );
        return (
          <DataTableRow key={`${item.id}-${rowIndex}`}>{cols}</DataTableRow>
        );
      })}
    </Grid>
  ) : null;
};

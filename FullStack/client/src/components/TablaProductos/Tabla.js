import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = props => {
const data = {
  columns: [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'First',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Last',
      field: 'last',
      sort: 'asc'
    },
    {
      label: 'Handle',
      field: 'handle',
      sort: 'asc'
      }
  ],
  rows: [
    {
      'id': 1,
      'first': 'Mark',
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': 'Thornton',
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': '@twitter'
    },
    {
      'id': 4,
      'first': 'Mark',
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 5,
      'first': 'Jacob',
      'last': 'Thornton',
      'handle': '@fat'
    },
    {
      'id': 6,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': '@twitter'
    }
  ]
};

return (
    <MDBTable scrollY>
      <MDBTableHead columns={data.columns} color="bg-primary" textBlack/>
      <MDBTableBody rows={data.rows} color="bg-dark" textWhite />
    </MDBTable>
  );
};

export default TablePage;
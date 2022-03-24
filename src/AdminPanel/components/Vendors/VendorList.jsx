/** @format */

import React from "react";
import MaterialTable from "material-table";

const MenuData = {
  data: [
    { name: "Vendor 1", email: "text@email.com" },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 2",
      email: "text@email.com",
    },
    {
      name: "Vendor 3",
      email: "text@email.com",
    },
  ],

  columns: [
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "E-mail", field: "email" },
  ],
};

export default function MaterialTableDemo() {
  const [state, setState] = React.useState(MenuData);

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 3000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 3000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 3000);
          }),
      }}
      options={{
        actionsColumnIndex: -1,
        addRowPosition: "first",
      }}
    />
  );
}

/* eslint-disable */

import React from 'react';
import './styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Nome
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('points')}
              className={getClassNamesFor('points')}
            >
              Pontuação
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('data')}
              className={getClassNamesFor('data')}
            >
              Data
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('time')}
              className={getClassNamesFor('time')}
            >
              Horário
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.points}</td>
            <td>{item.data}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          {
            id: 1,
            name: 'Matheus',
            points: 50000,
            data: '01/01/2000',
            time: '12:23',
          },
          {
            id: 2,
            name: 'Lucas',
            points: 45000,
            data: '01/01/2001',
            time: '11:23',
          },
          {
            id: 3,
            name: 'José',
            points: 30000,
            data: '01/01/2002',
            time: '10:23',
          },
          {
            id: 4,
            name: 'João',
            points: 20000,
            data: '01/01/2003',
            time: '14:23',
          },
          {
            id: 5,
            name: 'Klayton',
            points: 10000,
            data: '01/01/2004',
            time: '18:23',
          },
        ]}
      />
    </div>
  );
}

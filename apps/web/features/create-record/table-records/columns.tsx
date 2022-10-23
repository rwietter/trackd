import { Popconfirm, Typography } from "antd";

import { IRecord, IRecordA, Item } from "./types";

interface ColumnProps { 
  isEditing: (record: Item) => boolean;
  save: (key: React.Key) => void;
  cancel: () => void;
  editingKey: string;
  edit: (record: Partial<Item> & { key: React.Key }) => void;
 }

const Columns = ({ isEditing, cancel, save, editingKey, edit }: ColumnProps) => {
  return [
    {
      title: 'Dia',
      dataIndex: 'day',
      width: '20%',
      editable: false,
    },
    {
      title: 'Total de Fichas',
      dataIndex: 'records',
      width: '20%',
      editable: true,
      ellipsis: true,
      sorter: (a: IRecord, b: IRecord) => +a.records - +b.records,
    },
    {
      title: 'Disponíveis',
      dataIndex: 'records_available',
      width: '30%',
      editable: true,
      ellipsis: true,
      sorter: (a: IRecordA, b: IRecordA) => +a.records_available - +b.records_available,
    },
    {
      title: 'Operação',
      dataIndex: 'operation',
      width: '20%',
      render: (_: string, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm title="Quer realmente cancelar ?"
              onConfirm={cancel}
            >
              <a href='#null'>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Editar
          </Typography.Link>
        );
      },
    },
  ]
}

export { Columns }
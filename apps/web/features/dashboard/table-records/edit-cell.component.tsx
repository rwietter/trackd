/* eslint-disable react/jsx-closing-bracket-location */
import { FC } from 'react';

import { Form, Input, InputNumber } from 'antd';

import { EditableCellProps } from '../types';

const InputType = {
  day: <Input />,
  records: <InputNumber
    min={0}
    max={100}
  />,
  records_available: <InputNumber
    min={0}
    max={100}
  />,
};

export const EditableCell: FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = InputType[dataIndex];

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
          >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

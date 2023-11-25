'use client';

import {
  FaEye,
  FaPencilAlt,
  FaTrash,
} from 'react-icons/fa'

import { RenderIf } from './RenderIf'

const ActionButton = ({
  allowView = true,
  allowEdit = true,
  allowDelete = true,
  onView = () => null,
  onEdit = () => null,
  onDelete = () => null,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <RenderIf isTrue={allowView}>
        <div
          onClick={() => onView()}
          className="flex items-center justify-center rounded-full w-8 h-8 bg-green-500 text-white cursor-pointer"
        >
          <FaEye size={16} />
        </div>
      </RenderIf>
      <RenderIf isTrue={allowEdit}>
        <div
          onClick={() => onEdit()}
          className="flex items-center justify-center rounded-full w-8 h-8 bg-yellow-500 text-white cursor-pointer"
        >
          <FaPencilAlt size={16} />
        </div>
      </RenderIf>
      <RenderIf isTrue={allowDelete}>
        <div
          onClick={() => onDelete()}
          className="flex items-center justify-center rounded-full w-8 h-8 bg-rose-500 text-white cursor-pointer"
        >
          <FaTrash size={16} />
        </div>
      </RenderIf>
    </div>
  );
};

export default ActionButton;

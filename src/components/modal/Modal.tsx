import * as React from "react";
import "./Modal.scss";
import { IconClose } from "../icon";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowModal } from "../../redux/MusicSlice";

interface IModalProps {
  title: string;
  children: any;
  className: string;
}

export default function Modal({ children, title, className }: IModalProps) {
  const dispatch = useDispatch();
  const { isShowModal } = useSelector((state: any) => state.music);
  const handleCloseModal = () => {
    dispatch(setIsShowModal(!isShowModal));
  };

  return (
    <div className={`modal ${className}`}>
      <div className="modal-main">
        <div className="modal-head">
          <h3 className="modal-head--title">{title}</h3>
          <span
            className="modal-head--close"
            onClick={() => handleCloseModal()}
          >
            <IconClose />
          </span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

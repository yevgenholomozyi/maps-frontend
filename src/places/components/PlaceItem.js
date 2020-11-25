import React, { Fragment, useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card/Card'
import Button from "../../shared/components/FormElements/Button/Button";
import Modal from "../../shared/components/Modal/Modal";
import Map from "../../shared/components/Map/Map";
import { AuthContext } from '../../shared/context/AuthContext';
import ErrorModal from '../../shared/components/Modal/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

import "./PlaceItem.css";
const PlaceItem = ({
  image,
  title,
  address,
  description,
  coordinates,
  onDelete,
  creatorId,
  id
}) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId, token } = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  
  const confirmDeleteHandler = async () => { 
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/${id}`,
        'DELETE',
        null, // no body for 'DELETE' method
        { Authorization: `Bearer ${token}` }
      );
      onDelete(id);
    } catch (err) {}
  };

  const equalId = creatorId === userId;

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />

      <Modal 
        show = {showMap} 
        onCancel = {closeMapHandler}
        header = {address}
        contentClass = "place-item__modal-content"
        footerClass = "place-item__modal-actions"
        footer = {<Button onClick = {closeMapHandler}> Close</Button>}
      >
        <div className = "map-container">
          <Map center = {coordinates} zoom = {16} />
        </div>
      </Modal>
      <Modal 
        header = "Are you sure?" 
        footerClass = "place-item__modal-actions" 
        show = {showConfirmModal}
        onCancel= {cancelDeleteHandler}
        footer = {
          <Fragment>
            <Button inverse onClick = {cancelDeleteHandler}>
              CANCEL 
            </Button>
            <Button 
              danger onClick = {confirmDeleteHandler}> 
              DELETE 
            </Button>
          </Fragment>
        }
      >
        <p>
          Do you indeed want to proceed and delete this place? Please note that it 
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
        {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={`${process.env.REACT_APP_ASSET_URL}/${image}`} alt={title} />
          </div>

          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick = {openMapHandler}>VIEW ON MAP</Button>
            {equalId && <Button to={`/places/${id}`}>EDIT</Button>}
            {equalId && <Button danger onClick = {showDeleteWarningHandler}>DELETE</Button>}
          </div>
        </Card>

      </li>
    </Fragment>
  );
};

export default PlaceItem;

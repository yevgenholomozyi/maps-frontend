import React, { Fragment } from 'react';
import './Modal.css';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import Backdrop from '../UIElements/Backdrop/Backdrop';

const ModalOverlay = ({ 
    children,
    className, 
    style, 
    header, 
    footer,
    contentClass, 
    footerClass, 
    onSubmit,
    headerClass 
}) => {
    const content = (
        <div 
            className = {`modal ${className}`} 
            style = {style}
            >
            <header
                className = {`modal__header ${headerClass}`}
            >
                <h2>{header}</h2>
            </header>
            <form onSubmit = {
                onSubmit ? onSubmit : event => event.preventDefault()
            }>
                <div 
                className = {`modal__content ${contentClass}`}
                >
                    {children}
                </div>
                <footer className={`${footerClass} modal__footer`}>
                    {footer}
                </footer>
            </form>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}
 

const Modal = props => {
    return ( 
        <Fragment>
            {props.show && <Backdrop onClick = { props.onCancel } />}
            <CSSTransition
                in = {props.show} 
                mountOnEnter
                unmountOnExit
                timeout = {250}
                classNames = "modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </Fragment>
    );
}
 
export default Modal;
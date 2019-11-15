import React, { Component } from 'react';

const FloatingButton = ({ onClick, isActive }) => (
    <button
        className="float"
        disabled={isActive}
        style={{ backgroundColor: isActive ? "grey" : "green" }}
        onClick={onClick}> Save</button >
)

export default FloatingButton
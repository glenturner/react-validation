import React, { useState } from 'react';
import { Icon } from '../../icon';

export const ValidationRule = ({ rule, isValid }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon name={isValid ? "circle-check-16x16" : "circle-16x16"} />
            <span style={{ marginLeft: '0.5rem', color: isValid && '#0F840E' }}>{rule}</span>
        </div>
    );
};

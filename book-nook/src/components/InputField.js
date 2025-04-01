import React, { useState } from "react";
import "./InputField.css";

function InputField({ label, placeholder, onChange }) {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="input-field"
            />
        </div>
    );
}

export default InputField;

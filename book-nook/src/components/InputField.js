import React, { useState } from "react";

function InputField({ label, placeholder, onChange }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg font-medium">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="border rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default InputField;

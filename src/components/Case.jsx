import React from "react";

function Case({ value, caseclick, disabled }) {
    return (
        <button className="case" onClick={caseclick} disabled={disabled}>
            {value}
        </button>
    );
}

export default Case;

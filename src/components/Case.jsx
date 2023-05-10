import React from "react";

function Case({ value, caseclick, disabled }) {
    return (
        <button className="case" disabled={disabled} onClick={caseclick}>
            {value}
        </button>
    );
}

export default Case;

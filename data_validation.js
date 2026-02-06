// backend/src/utils/validateData.js
const UBOS_COUNTS = {
    districts: 146,
    counties: 312,
    constituencies: 353,
    subcounties: 2184,
    parishes: 10595,
    villages: 70626
}[citation:7];

function validateCounts(collectedData) {
    const discrepancies = [];
    
    Object.keys(UBOS_COUNTS).forEach(level => {
        if (collectedData[level] && 
            collectedData[level].length !== UBOS_COUNTS[level]) {
            discrepancies.push({
                level,
                expected: UBOS_COUNTS[level],
                actual: collectedData[level].length,
                difference: collectedData[level].length - UBOS_COUNTS[level]
            });
        }
    });
    
    return discrepancies;
}
import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

function DistrictExporter() {
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [hierarchy, setHierarchy] = useState(null);
    
    useEffect(() => {
        fetch('/api/districts')
            .then(res => res.json())
            .then(data => setDistricts(data));
    }, []);
    
    const handleExport = async () => {
        const response = await fetch(`/api/export/${selectedDistrict}`);
        const blob = await response.blob();
        saveAs(blob, `${selectedDistrict}_hierarchy.xlsx`);
    };
    
    return (
        <div className="container">
            <h1>Uganda Administrative Boundaries Exporter</h1>
            
            <div className="selector">
                <select onChange={(e) => setSelectedDistrict(e.target.value)}>
                    <option value="">Select a District</option>
                    {districts.map(d => (
                        <option key={d.id} value={d.name}>
                            {d.name} ({d.counties?.length || 0} counties)
                        </option>
                    ))}
                </select>
                
                <button onClick={handleExport} disabled={!selectedDistrict}>
                    Export to Excel
                </button>
            </div>
            
            {hierarchy && (
                <div className="preview">
                    <h3>Data Preview</h3>
                    <p>Districts: 1 | Counties: {hierarchy.counties.length} | 
                       Parishes: {hierarchy.parishes.length} | 
                       Villages: {hierarchy.villages.length}</p>
                </div>
            )}
        </div>
    );
}
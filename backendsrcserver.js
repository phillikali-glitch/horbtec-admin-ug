const express = require('express');
const axios = require('axios');
const ExcelJS = require('exceljs');
const app = express();

// Data aggregator service
app.get('/api/districts', async (req, res) => {
    // Fetch from PHP service
    const response = await axios.get('http://php-service:8000/api.php?action=districts');
    
    // Supplement with UBOS data if needed[citation:2]
    const districts = response.data;
    
    // Add geographic IDs from SimpleMaps[citation:1]
    districts.forEach(district => {
        district.gis_id = getGisId(district.name); // Map to UG101, UG102, etc.
    });
    
    res.json(districts);
});

// Hierarchical data endpoint
app.get('/api/hierarchy/:district', async (req, res) => {
    const { district } = req.params;
    
    const hierarchy = await axios.get(
        `http://php-service:8000/api.php?action=hierarchy&district=${district}`
    );
    
    // Validate counts with Electoral Commission data[citation:7]
    const validation = validateCounts(hierarchy.data);
    
    res.json({ ...hierarchy.data, validation });
});

// Excel export endpoint
app.get('/api/export/:district', async (req, res) => {
    const { district } = req.params;
    const hierarchy = await fetchHierarchy(district);
    
    const workbook = new ExcelJS.Workbook();
    
    // Create worksheets for each level
    ['districts', 'counties', 'subcounties', 'parishes', 'villages'].forEach(level => {
        const worksheet = workbook.addWorksheet(level);
        addHierarchicalData(worksheet, hierarchy, level);
    });
    
    res.setHeader('Content-Type', 
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 
        `attachment; filename="${district}_hierarchy.xlsx"`);
    
    await workbook.xlsx.write(res);
    res.end();
});

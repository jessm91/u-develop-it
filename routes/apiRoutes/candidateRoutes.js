const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// Get all candidates 
router.get('/candidates', (req, res) => {
    const sql =  `SELECT * FROM candidates`;
    const params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // app.get('/api/candidate/:id')
router.get('/candidate/:id', (req, res) => {});

// app.post('/api/candidate')
router.post('/candidate', ({ body }, res) => {});

// app.put('/api/candidate/:id')
router.put('/candidate/:id', (req, res) => {});

// app.delete('/api/candidate/:id')
router.delete('/candidate/:id', (req, res) => {});

module.exports = router;
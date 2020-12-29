const db = require('../../db/database');
const express = require('express');
const router = express.Router();

router.get('/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;
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

  // Get single party
router.get('/party/:id', (req, res) => {});

// Delete a party
router.delete('/party/:id', (req, res) => {});

module.exports = router;
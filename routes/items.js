const router = require('express').Router();
const Item = require('../models/itemSchema')

//create items
router.post('/create', async (req, res) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save();
        res.status(200).json(newItem)
    } catch (err) {
        res.status(500).json(err)
    }
})

//read all items
router.get('/all/items', async (req, res) => {
    try {
        const allItems = await Item.find().sort({ _id: -1 });
        res.status(200).json(allItems)
    } catch (err) {
        res.status(500).json(err)
    }
})

//read One item
router.get('/item/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.status(200).json(item)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update One item
router.put('/update/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedItem)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete One item
router.delete('/delete/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id)
        res.status(200).json("Item deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
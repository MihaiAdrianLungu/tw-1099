const express = require('express');
const Order = require('../database/models/Order');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userId = req.userId;

        if(!userId) {
            return res.status(404).json({ success: false, message: "User id not found", data: {} });
        }

        const orders = await Order.findAll({
            where: {
                userId: userId
            }
        });

        return res.status(200).json({ success: true, message: "Orders list", data: {orders} });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findOne({
            where: {
                id: orderId
            }
        })

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found", data: {} });
        }

        return res.status(200).json({ success: true, message: "Found order", data: {order} });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const userId = req.userId;

        if(!userId) {
            return res.status(404).json({ success: false, message: "User id not found", data: {} });
        }

        const order = await Order.create({
            ...req.body,
            userId: userId
        })

        return res.status(201).json({ success: true, message: "Order created", data: {order} });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findOne({
            where: {
                id: orderId
            }
        })

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found", data: {} });
        }

        const updatedOrder = await order.update({
            ...req.body
        })

        return res.status(200).json({ success: true, message: "Order updated", data: {order: updatedOrder} });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findOne({
            where: {
                id: orderId
            }
        })

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found", data: {} });
        }

        await order.destroy();

        return res.status(200).json({ success: true, message: "Order deleted", data: {} });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;
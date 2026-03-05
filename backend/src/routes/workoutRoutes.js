// src/routes/workoutRoutes.js
import express from 'express'
import {
  getAllWorkouts,
  getWorkoutById,
  createWorkout
} from '../controllers/workoutController.js'

const router = express.Router()

// GET alle workouts
router.get('/', getAllWorkouts)

// GET één workout
router.get('/:id', getWorkoutById)

// POST nieuwe workout
router.post('/', createWorkout)

// PATCH workout (later)
router.patch('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `PATCH workout ${id}` })
})

// DELETE workout (later)
router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `DELETE workout ${id}` })
})

export default router
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CourseStudentSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, required: true, ref: 'Course' },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } })

CourseStudentSchema.virtual('course', {
  localField: 'courseId',
  ref: 'Course',
  foreignField: '_id',
  justOne: true
})

CourseStudentSchema.virtual('student', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CourseSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  prerequisites: [{ type: String, required: true }],
  schoolId: { type: Schema.Types.ObjectId, required: true, ref: 'School' }
},
  { timestamps: true, toJSON: { virtuals: true } })

// NOTE we want to be able to populate a school onto the course
// FIRST look at local field, what is local to this schema? SchoolId
// THEN reference the school collection
// AND THEN in the school collection (that's the foreign field), find the school using its _id that matches the schoolId
CourseSchema.virtual('school', {
  localField: 'schoolId',
  ref: 'School',
  foreignField: '_id',
  justOne: true
})
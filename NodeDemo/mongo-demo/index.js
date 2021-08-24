const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB...'))
	.catch(err => console.log('Could not connect:', err));

const courseSchema = new Schema({
	name: String,
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'Angular Course',
		author: 'jmilthedude',
		tags: ['angular', 'frontend'],
		isPublished: false
	});

	const result = await course.save();
	console.log(result);
}

async function getCourses() {
	const courses = await Course
		.find({ author: 'jmilthedude', isPublished: false })
		.limit(2)
		.sort({ name: 1 })
		.select({ name: 1, tags: 1 });
	console.log(courses);
}

getCourses();
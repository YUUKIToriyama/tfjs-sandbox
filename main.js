const tf = require("@tensorflow/tfjs");


const practice1 = () => {
	const a = tf.tensor([
		[3, -1],
		[0, 1],
		[1, -4]
	]);
	const b = tf.tensor([
		[0, -4],
		[1, 2],
		[-5, 0]
	]);
	a.mul(tf.scalar(2)).sub(b.mul(tf.scalar(3))).print();
}
const practice2 = () => {
	const a = tf.tensor([
		[1, 2, 3]
	]).transpose();
	const b = tf.tensor([
		[0, -1, -1]
	]).transpose();
	a.mul(tf.scalar(3)).sub(b.mul(5)).print();
}
const practice3 = () => {
	const a = tf.tensor([
		[1, 3, 2]
	]);
	const b = tf.tensor([
		[1, 1, 1]
	]);
	a.mul(tf.scalar(2)).add(b.mul(tf.scalar(-3))).print()
}
const practice4 = () => {
	const a = tf.tensor([
		[1, 2, 3],
		[6, 5, 4]
	]);
	const b = tf.tensor([
		[7, 0, -1],
		[8, -1, 4],
		[9, 1, 0]
	]);
	a.dot(b).print()
}
const practice5 = () => {
	const a = tf.tensor([
		[-1, -2, -3],
		[2, 2, 2],
		[2, 0, 0]
	]);
	const b = tf.tensor([
		[-3, 2],
		[5, 1],
		[6, -4]
	]);
	a.dot(b).print();
};
const practice6 = () => {
	const a = tf.tensor([
		[2, 3, 5]
	]).transpose();
	const b = tf.tensor([
		[7, 11, 13]
	]);
	a.dot(b).print();
};
const practice7 = () => {
	const a = tf.tensor([
		[2, 5, 7]
	]);
	const b = tf.tensor([
		[1, 1, 2]
	]).transpose();
	a.dot(b).print();
};
const practice8 = () => {
	const a = tf.tensor([
		[1, 3],
		[2, 4]
	]);
	const b = tf.tensor([
		[5, 7],
		[6, 8]
	]);
	a.dot(b).print();
};
const practice9 = () => {
	const a = tf.tensor([
		[5, 7],
		[6, 8]
	]);
	const b = tf.tensor([
		[1, 3],
		[2, 4]
	]);
	a.dot(b).print();
};
const practice10 = () => {
	const a = tf.tensor([
		[1, -2, 2],
		[-1, 0, 5],
		[-1, 1, 1]
	]);
	const b = tf.tensor([
		[-5, 4, -10],
		[-4, 3, -7],
		[-1, 1, -2]
	]);
	a.dot(b).print();
};
practice1();
practice2();
practice3();
practice4();
practice5();
practice6();
practice7();
practice8();
practice9();
practice10();
export function actionSelectedBook(theBook) {
	const SELECTBOOK = 'Selected_Book';
	let bookObj = {
		type: SELECTBOOK,
		bookSelected: theBook
	};
	return bookObj;
};
import commints from './data/commints'

export default function handler(req, res) {
	if (req.method == 'GET') {
		res.status(200).json(commints)
	}

	if (req.method == 'POST') {
		const { newCommint } = req.body
		commints.push({
			id: new Date(),
			text: newCommint
		});
		res.status(200).json(commints)
	}
	if (req.method == 'DELETE') {
		commints.splice(0, commints.length)
		res.status(200).json(commints);
	}

	if (req.method == 'PATCH') {
		const value = req.body.value
		const com = commints.findIndex((com) => com.id === value)
		commints.splice(com, 1);
		res.status(200).json(commints);

	}

}
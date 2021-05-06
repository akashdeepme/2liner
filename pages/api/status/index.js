import { connectToDatabase } from "../../../util/mongodb";


export default async (req, res) => {
  const { db } = await connectToDatabase();
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
              const status = await db.collection('status')
                .find({})
                .limit(20)
                .toArray();
                

                res.status(200).json({ success: true, data: status })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
              const { db } = await connectToDatabase();
                const status = await db.collection('status').create(req.body);

                res.status(201).json({ success: true, data: status })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
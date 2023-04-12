import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'

const allAvos =  async(req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const id = req.query.id
    const entry = await db.getById(id as string)
    // const length = allEntries.length
    res.statusCode = 200
    res.setHeader(
        'Content-type', 'application/json'
    )
    res.status(200).json(entry)
}

export default allAvos
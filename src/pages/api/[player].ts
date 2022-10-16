import MOCK_API from '@/services/mockApi';
import { DefaultError, PlayerDataResponse } from '@/utilts/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlayerDataResponse | DefaultError>,
) {
  const { player } = req.query;

  if (req.method === `GET`) {
    try {
      const playerData = await MOCK_API.get(`/${player}`).then((res) => {
        const { data } = res.data;
        return data;
      });

      res.status(200).json(playerData);
    } catch (err) {
      const error = { message: `Failed to load data` };
      res.status(400).json({ error: error });
    }
  } else {
    const error = { message: `Method Not Allowed` };
    res.status(500).json({ error });
  }
}

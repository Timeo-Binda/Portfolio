import PocketBase from 'pocketbase';
import type { projets_videoResponse} from'@/pocketbase-types'
var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

export const pb = new PocketBase(pocketbase_ip);

// Fonction qui retourne la liste de tous les artistes
export async function allprojets_video() {
  const records = await pb.collection('projets_video').getFullList<projets_videoResponse>(
    {
      sort: '-note',
    }
  );

  return records;
}

export async function projets_videoId(id) {
  const records = await pb.collection('projets_video').getOne<projets_videoResponse>(id);
  return records;
}

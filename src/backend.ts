import PocketBase from 'pocketbase'
import type { projets_videoResponse, projets_designResponse } from '@/pocketbase-types'
var pocketbase_ip = ''
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = 'https://portfolio.timeobinda.fr/'
} else {
  pocketbase_ip = 'http://127.0.0.1:8090'
}

export const pb = new PocketBase(pocketbase_ip)

// Fonction qui retourne la liste de tous les artistes
export async function allprojets_video() {
  const records = await pb.collection('projets_video').getFullList<projets_videoResponse>({
    sort: '-note'
  })

  return records
}

export async function projets_videoId(id: string) {
  const records = await pb.collection('projets_video').getOne<projets_videoResponse>(id)
  return records
}

// Fonction pour récupérer tous les enregistrements de la collection projets_design
export async function allprojets_design() {
  const records = await pb.collection('projets_design').getFullList<projets_designResponse>({
    // Vous pouvez spécifier des options de tri ou d'autres paramètres ici
    // Par exemple, trier par date décroissante :
    sort: '-note'
  })

  return records
}

// Fonction pour récupérer un enregistrement spécifique de la collection projets_design par son ID
export async function projets_designId(id: string) {
  const record = await pb.collection('projets_design').getOne<projets_designResponse>(id)
  return record
}

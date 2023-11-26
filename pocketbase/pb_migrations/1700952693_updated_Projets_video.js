/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  collection.name = "projets_video"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  collection.name = "Projets_video"

  return dao.saveCollection(collection)
})

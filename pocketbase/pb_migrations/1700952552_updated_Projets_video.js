/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmnp2aob",
    "name": "categorie",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "projet personnel",
        "projet scolaire",
        "projet profesionnel"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  // remove
  collection.schema.removeField("rmnp2aob")

  return dao.saveCollection(collection)
})

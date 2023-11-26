/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whbvlc4e",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  // remove
  collection.schema.removeField("whbvlc4e")

  return dao.saveCollection(collection)
})

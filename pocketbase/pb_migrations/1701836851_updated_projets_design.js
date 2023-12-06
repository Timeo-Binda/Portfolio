/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubxkffqz",
    "name": "photo_bonus",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3fncsa4",
    "name": "role",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // remove
  collection.schema.removeField("ubxkffqz")

  // remove
  collection.schema.removeField("y3fncsa4")

  return dao.saveCollection(collection)
})

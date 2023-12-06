/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7f6kq5ik",
    "name": "cover",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bk6dolzf",
    "name": "projet",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cpuznj2f",
    "name": "realisation",
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
  collection.schema.removeField("7f6kq5ik")

  // remove
  collection.schema.removeField("bk6dolzf")

  // remove
  collection.schema.removeField("cpuznj2f")

  return dao.saveCollection(collection)
})

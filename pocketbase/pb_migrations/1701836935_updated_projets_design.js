/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntiz8yi6",
    "name": "categorie",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "projet professionnel",
        "projet scolaire",
        "projet personnel"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // remove
  collection.schema.removeField("ntiz8yi6")

  return dao.saveCollection(collection)
})

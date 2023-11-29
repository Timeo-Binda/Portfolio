/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "juwpgmmr",
    "name": "recommandation",
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
    "id": "mipe9s2s",
    "name": "nom_personne_reco",
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
  const collection = dao.findCollectionByNameOrId("zan1lz7gol8c2pi")

  // remove
  collection.schema.removeField("juwpgmmr")

  // remove
  collection.schema.removeField("mipe9s2s")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z4qiitfx",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfpm7etg",
    "name": "note",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qw7zrc40",
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
    "id": "vjmglt7a",
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
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm")

  // remove
  collection.schema.removeField("z4qiitfx")

  // remove
  collection.schema.removeField("jfpm7etg")

  // remove
  collection.schema.removeField("qw7zrc40")

  // remove
  collection.schema.removeField("vjmglt7a")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k28nkvipbxk3hwm",
    "created": "2023-12-06 04:26:34.033Z",
    "updated": "2023-12-06 04:26:34.033Z",
    "name": "projets_design",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xawq8yei",
        "name": "titre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k28nkvipbxk3hwm");

  return dao.deleteCollection(collection);
})

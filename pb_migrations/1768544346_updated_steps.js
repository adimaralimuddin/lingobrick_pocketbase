/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // update field
  collection.fields.addAt(18, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_4284789913",
    "hidden": false,
    "id": "relation2156163321",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "substep_of",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // update field
  collection.fields.addAt(18, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4284789913",
    "hidden": false,
    "id": "relation2156163321",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "substep_of",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})

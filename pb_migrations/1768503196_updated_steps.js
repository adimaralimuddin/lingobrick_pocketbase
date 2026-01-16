/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // add field
  collection.fields.addAt(21, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4284789913",
    "hidden": false,
    "id": "relation2404436652",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "subSteps",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // remove field
  collection.fields.removeById("relation2404436652")

  return app.save(collection)
})

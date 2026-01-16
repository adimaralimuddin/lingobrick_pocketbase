/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3219405885")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2920376115",
    "hidden": false,
    "id": "relation1061296345",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "lessons",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3219405885")

  // remove field
  collection.fields.removeById("relation1061296345")

  return app.save(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "json4047661616",
    "maxSize": 0,
    "name": "fOptions",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // remove field
  collection.fields.removeById("json4047661616")

  return app.save(collection)
})

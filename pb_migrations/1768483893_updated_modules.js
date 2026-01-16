/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3219405885")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1177347317",
    "max": null,
    "min": null,
    "name": "position",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3219405885")

  // remove field
  collection.fields.removeById("number1177347317")

  return app.save(collection)
})

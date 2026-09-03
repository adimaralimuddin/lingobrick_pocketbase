/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // add field
  collection.fields.addAt(26, new Field({
    "hidden": false,
    "id": "bool1755343883",
    "name": "isAns",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // remove field
  collection.fields.removeById("bool1755343883")

  return app.save(collection)
})
